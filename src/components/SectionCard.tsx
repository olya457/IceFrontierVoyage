import React, {PropsWithChildren} from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {colors, radii} from '../theme';

type SectionCardProps = PropsWithChildren<{
  title?: string;
  style?: StyleProp<ViewStyle>;
}>;

export function SectionCard({title, children, style}: SectionCardProps) {
  return (
    <View style={[styles.card, style]}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.panelSoft,
    borderWidth: 1,
    borderColor: colors.lineSoft,
    borderRadius: radii.card,
    padding: 20,
  },
  title: {
    color: colors.text,
    fontSize: 19,
    fontWeight: '800',
    marginBottom: 12,
  },
});
