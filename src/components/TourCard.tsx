import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {AppButton} from './AppButton';
import {colors, radii} from '../theme';
import type {ExpeditionRoute} from '../types';
import {useSaved} from '../context/SavedContext';

type TourCardProps = {
  route: ExpeditionRoute;
  onOpen: () => void;
};

export function TourCard({route, onOpen}: TourCardProps) {
  const {isSaved, toggle} = useSaved();
  const saved = isSaved('tour', route.id);

  return (
    <Pressable onPress={onOpen} style={styles.card}>
      <View style={styles.image}>
        <Image source={route.image} style={styles.photo} />
        <View style={styles.imageOverlay}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{route.category}</Text>
          </View>
          <Pressable
            accessibilityLabel={saved ? 'Remove saved tour' : 'Save tour'}
            onPress={() => toggle('tour', route.id)}
            style={styles.saveBubble}>
            <Text style={styles.saveIcon}>{saved ? '★' : '☆'}</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{route.title}</Text>
        <Text style={styles.meta}>🚢 {route.startingPoint}</Text>
        <View style={styles.metaRow}>
          <Text style={styles.small}>◷ {route.duration}</Text>
          <Text style={styles.small}>↗ {route.difficulty}</Text>
          <Text style={styles.small}>▣ {route.season}</Text>
        </View>
        <Text style={styles.description}>{route.shortDescription}</Text>
        <AppButton title="View Route" onPress={onOpen} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radii.panel,
    borderWidth: 1,
    borderColor: colors.lineSoft,
    backgroundColor: colors.panel,
    overflow: 'hidden',
    marginBottom: 18,
  },
  image: {
    height: 166,
    backgroundColor: colors.navy,
    overflow: 'hidden',
  },
  photo: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  badge: {
    backgroundColor: colors.yellow,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  badgeText: {
    color: colors.dark,
    fontSize: 12,
    fontWeight: '900',
  },
  saveBubble: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(4, 25, 46, 0.68)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveIcon: {
    color: colors.cyan,
    fontSize: 20,
    fontWeight: '800',
  },
  content: {
    padding: 16,
    paddingBottom: 20,
    gap: 8,
  },
  title: {
    color: colors.text,
    fontSize: 20,
    lineHeight: 25,
    fontWeight: '900',
  },
  meta: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 20,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 14,
    flexWrap: 'wrap',
  },
  small: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '700',
  },
  description: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
  },
});
