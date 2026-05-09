import React, {useMemo, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppButton} from '../components/AppButton';
import {Chip} from '../components/Chip';
import {HeaderBlock} from '../components/HeaderBlock';
import {Screen} from '../components/Screen';
import {images} from '../assets/images';
import {useSaved} from '../context/SavedContext';
import {expeditionRoutes} from '../data/routes';
import {prepArticles} from '../data/prep';
import {stations} from '../data/stations';
import {colors, tabBarSpace} from '../theme';
import type {SavedKind} from '../types';

type SavedFilter = 'All' | 'Tours' | 'Stations' | 'Prep';

const filters: SavedFilter[] = ['All', 'Tours', 'Stations', 'Prep'];
const filterKind: Record<SavedFilter, SavedKind | 'all'> = {
  All: 'all',
  Tours: 'tour',
  Stations: 'station',
  Prep: 'prep',
};

type SavedItem = {
  id: string;
  kind: SavedKind;
  title: string;
  subtitle: string;
  image?: unknown;
};

export function SavedScreen() {
  const navigation = useNavigation<any>();
  const {saved, remove} = useSaved();
  const [filter, setFilter] = useState<SavedFilter>('All');

  const items = useMemo<SavedItem[]>(() => {
    const tours = saved.tour
      .map(id => expeditionRoutes.find(item => item.id === id))
      .filter(Boolean)
      .map(item => ({
        id: item!.id,
        kind: 'tour' as SavedKind,
        title: item!.title,
        subtitle: item!.shortDescription,
        image: item!.image,
      }));

    const stationItems = saved.station
      .map(id => stations.find(item => item.id === id))
      .filter(Boolean)
      .map(item => ({
        id: item!.id,
        kind: 'station' as SavedKind,
        title: item!.title,
        subtitle: item!.shortDescription,
        image: item!.image,
      }));

    const prepItems = saved.prep
      .map(id => prepArticles.find(item => item.id === id))
      .filter(Boolean)
      .map(item => ({
        id: item!.id,
        kind: 'prep' as SavedKind,
        title: item!.title,
        subtitle: item!.subtitle,
      }));

    return [...tours, ...stationItems, ...prepItems];
  }, [saved]);

  const filtered = items.filter(item => {
    if (filter === 'All') {
      return true;
    }

    return item.kind === filterKind[filter];
  });

  const open = (item: SavedItem) => {
    if (item.kind === 'tour') {
      navigation.navigate('TourDetail', {id: item.id});
    }

    if (item.kind === 'station') {
      navigation.navigate('StationDetail', {id: item.id});
    }

    if (item.kind === 'prep') {
      navigation.navigate('PrepDetail', {id: item.id});
    }
  };

  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <HeaderBlock
          title="Saved"
          subtitle="Your Antarctic planning collection"
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chips}>
          {filters.map(item => (
            <Chip
              key={item}
              label={item}
              active={filter === item}
              onPress={() => setFilter(item)}
            />
          ))}
        </ScrollView>
        {filtered.length === 0 ? (
          <View style={styles.empty}>
            <Image source={images.onboardingSave} style={styles.emptyImage} />
            <Text style={styles.emptyTitle}>No saved polar routes yet</Text>
          </View>
        ) : (
          <View style={styles.list}>
            {filtered.map(item => (
              <View key={`${item.kind}-${item.id}`} style={styles.row}>
                {item.image ? (
                  <Image source={item.image as never} style={styles.rowImage} />
                ) : (
                  <View style={styles.articleIcon}>
                    <Text style={styles.articleIconText}>▤</Text>
                  </View>
                )}
                <View style={styles.rowCopy}>
                  <Text style={styles.kind}>{kindLabel(item.kind)}</Text>
                  <Text style={styles.rowTitle}>{item.title}</Text>
                  <Text style={styles.rowSubtitle}>{item.subtitle}</Text>
                </View>
                <View style={styles.rowActions}>
                  <AppButton
                    title="Open"
                    onPress={() => open(item)}
                    style={styles.openButton}
                  />
                  <AppButton
                    title="Remove"
                    variant="danger"
                    onPress={() => remove(item.kind, item.id)}
                    style={styles.removeButton}
                  />
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </Screen>
  );
}

const kindLabel = (kind: SavedKind) => {
  if (kind === 'tour') {
    return '🚢 Tours';
  }

  if (kind === 'station') {
    return '🏢 Stations';
  }

  return '▤ Prep';
};

const styles = StyleSheet.create({
  content: {
    paddingBottom: tabBarSpace,
  },
  chips: {
    gap: 10,
    paddingHorizontal: 16,
    paddingBottom: 22,
  },
  empty: {
    minHeight: 560,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  emptyImage: {
    width: '86%',
    height: 330,
    resizeMode: 'contain',
  },
  emptyTitle: {
    color: colors.text,
    fontSize: 22,
    lineHeight: 28,
    textAlign: 'center',
    marginTop: 28,
  },
  list: {
    paddingHorizontal: 16,
    gap: 14,
  },
  row: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.lineSoft,
    backgroundColor: colors.panelSoft,
    padding: 16,
    minHeight: 166,
  },
  rowImage: {
    position: 'absolute',
    left: 16,
    top: 16,
    width: 82,
    height: 82,
    borderRadius: 14,
  },
  articleIcon: {
    position: 'absolute',
    left: 16,
    top: 16,
    width: 82,
    height: 82,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.lineSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  articleIconText: {
    color: colors.cyan,
    fontSize: 26,
    fontWeight: '900',
  },
  rowCopy: {
    minHeight: 82,
    paddingLeft: 98,
    gap: 5,
  },
  kind: {
    color: colors.dim,
    fontSize: 12,
    fontWeight: '700',
  },
  rowTitle: {
    color: colors.text,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '900',
  },
  rowSubtitle: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 20,
  },
  rowActions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },
  openButton: {
    flex: 1,
  },
  removeButton: {
    width: 112,
  },
});
