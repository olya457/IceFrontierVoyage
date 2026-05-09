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
import type {Station} from '../types';
import {useSaved} from '../context/SavedContext';

type StationCardProps = {
  station: Station;
  onOpen: () => void;
  onMap: () => void;
};

export function StationCard({station, onOpen, onMap}: StationCardProps) {
  const {isSaved, toggle} = useSaved();
  const saved = isSaved('station', station.id);

  return (
    <Pressable onPress={onOpen} style={styles.card}>
      <View style={styles.image}>
        <Image source={station.image} style={styles.photo} />
        <View style={styles.imageOverlay}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{station.stationType}</Text>
          </View>
          <Pressable
            accessibilityLabel={saved ? 'Remove saved station' : 'Save station'}
            onPress={() => toggle('station', station.id)}
            style={styles.saveBubble}>
            <Text style={styles.saveIcon}>{saved ? '★' : '☆'}</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{station.title}</Text>
        <Text style={styles.meta}>🏢 {station.country}</Text>
        <Text style={styles.meta}>📍 {Math.abs(station.coordinate.latitude).toFixed(1)}°S, {Math.abs(station.coordinate.longitude).toFixed(1)}°{station.coordinate.longitude >= 0 ? 'E' : 'W'}</Text>
        <Text style={styles.description}>{station.shortDescription}</Text>
        <View style={styles.actions}>
          <AppButton title="View Details" onPress={onOpen} style={styles.mainAction} />
          <AppButton title="View on Map" onPress={onMap} variant="outline" style={styles.secondaryAction} />
        </View>
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
    height: 178,
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
    backgroundColor: colors.red,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  badgeText: {
    color: colors.white,
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
    padding: 17,
    paddingBottom: 20,
    gap: 9,
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
    lineHeight: 19,
  },
  description: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 8,
  },
  mainAction: {
    flex: 1.55,
  },
  secondaryAction: {
    flex: 1,
  },
});
