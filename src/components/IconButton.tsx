import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {colors} from '../theme';

type IconButtonProps = {
  icon: string;
  onPress: () => void;
  label: string;
};

export function IconButton({icon, onPress, label}: IconButtonProps) {
  return (
    <Pressable
      accessibilityLabel={label}
      onPress={onPress}
      style={({pressed}) => [styles.button, pressed && styles.pressed]}>
      <Text style={styles.icon}>{icon}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(4, 25, 46, 0.72)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '800',
  },
  pressed: {
    opacity: 0.74,
  },
});
