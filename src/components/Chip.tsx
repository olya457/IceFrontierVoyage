import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {colors, radii} from '../theme';

type ChipProps = {
  label: string;
  active: boolean;
  onPress: () => void;
};

export function Chip({label, active, onPress}: ChipProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.chip,
        active && styles.active,
        pressed && styles.pressed,
      ]}>
      <Text style={[styles.label, active && styles.activeLabel]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    height: 44,
    borderRadius: radii.chip,
    borderWidth: 1,
    borderColor: colors.line,
    paddingHorizontal: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(13, 71, 127, 0.72)',
  },
  active: {
    backgroundColor: colors.cyan,
    borderColor: colors.cyan,
  },
  label: {
    color: colors.muted,
    fontSize: 15,
    fontWeight: '700',
  },
  activeLabel: {
    color: colors.dark,
  },
  pressed: {
    opacity: 0.82,
  },
});
