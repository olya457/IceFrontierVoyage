import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type {SavedKind, SavedState} from '../types';

const storageKey = '@ice-frontier/saved';

const emptySaved: SavedState = {
  tour: [],
  station: [],
  prep: [],
};

type SavedContextValue = {
  saved: SavedState;
  ready: boolean;
  isSaved: (kind: SavedKind, id: string) => boolean;
  save: (kind: SavedKind, id: string) => void;
  remove: (kind: SavedKind, id: string) => void;
  toggle: (kind: SavedKind, id: string) => void;
};

const SavedContext = createContext<SavedContextValue | undefined>(undefined);

const normalizeSaved = (value: unknown): SavedState => {
  const candidate = value as Partial<SavedState>;
  return {
    tour: Array.isArray(candidate?.tour) ? candidate.tour : [],
    station: Array.isArray(candidate?.station) ? candidate.station : [],
    prep: Array.isArray(candidate?.prep) ? candidate.prep : [],
  };
};

export function SavedProvider({children}: PropsWithChildren) {
  const [saved, setSaved] = useState<SavedState>(emptySaved);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    AsyncStorage.getItem(storageKey)
      .then(value => {
        if (!mounted || !value) {
          return;
        }

        setSaved(normalizeSaved(JSON.parse(value)));
      })
      .catch(() => undefined)
      .finally(() => {
        if (mounted) {
          setReady(true);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (ready) {
      AsyncStorage.setItem(storageKey, JSON.stringify(saved)).catch(
        () => undefined,
      );
    }
  }, [ready, saved]);

  const isSaved = useCallback(
    (kind: SavedKind, id: string) => saved[kind].includes(id),
    [saved],
  );

  const save = useCallback((kind: SavedKind, id: string) => {
    setSaved(current => {
      if (current[kind].includes(id)) {
        return current;
      }

      return {...current, [kind]: [id, ...current[kind]]};
    });
  }, []);

  const remove = useCallback((kind: SavedKind, id: string) => {
    setSaved(current => ({
      ...current,
      [kind]: current[kind].filter(savedId => savedId !== id),
    }));
  }, []);

  const toggle = useCallback(
    (kind: SavedKind, id: string) => {
      if (isSaved(kind, id)) {
        remove(kind, id);
      } else {
        save(kind, id);
      }
    },
    [isSaved, remove, save],
  );

  const value = useMemo(
    () => ({saved, ready, isSaved, save, remove, toggle}),
    [isSaved, ready, remove, save, saved, toggle],
  );

  return (
    <SavedContext.Provider value={value}>{children}</SavedContext.Provider>
  );
}

export const useSaved = () => {
  const value = useContext(SavedContext);

  if (!value) {
    throw new Error('useSaved must be used inside SavedProvider');
  }

  return value;
};
