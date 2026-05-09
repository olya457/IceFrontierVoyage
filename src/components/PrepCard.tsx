import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors, radii} from '../theme';
import type {PrepArticle} from '../types';

type PrepCardProps = {
  article: PrepArticle;
  onOpen: () => void;
};

export function PrepCard({article, onOpen}: PrepCardProps) {
  return (
    <Pressable
      onPress={onOpen}
      style={({pressed}) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.copy}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.subtitle}>{article.subtitle}</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 128,
    borderRadius: radii.panel,
    borderWidth: 1,
    borderColor: colors.lineSoft,
    backgroundColor: colors.panelSoft,
    padding: 22,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  copy: {
    flex: 1,
    gap: 8,
  },
  title: {
    color: colors.text,
    fontSize: 19,
    lineHeight: 24,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 21,
  },
  arrow: {
    color: colors.cyan,
    fontSize: 38,
    lineHeight: 42,
    fontWeight: '400',
  },
  pressed: {
    opacity: 0.82,
  },
});
