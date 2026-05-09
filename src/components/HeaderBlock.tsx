import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme';

type HeaderBlockProps = {
  title: string;
  subtitle: string;
};

export function HeaderBlock({title, subtitle}: HeaderBlockProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 24,
  },
  title: {
    color: colors.text,
    fontSize: 31,
    lineHeight: 38,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.muted,
    fontSize: 17,
    lineHeight: 24,
    marginTop: 8,
  },
});
