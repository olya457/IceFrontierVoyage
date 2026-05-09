import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';
import {colors, radii} from '../theme';

type AppButtonProps = {
  title: string;
  onPress?: () => void;
  variant?: 'primary' | 'outline' | 'dark' | 'danger';
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
};

export function AppButton({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  style,
}: AppButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({pressed}) => [
        styles.pressable,
        styles[variant],
        (pressed || disabled) && styles.pressed,
        style,
      ]}>
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? colors.dark : colors.cyan} />
      ) : (
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          minimumFontScale={0.72}
          style={[
            styles.text,
            variant === 'primary' && styles.primaryText,
            variant === 'danger' && styles.dangerText,
          ]}>
          {title}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    height: 56,
    borderRadius: radii.button,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
    overflow: 'hidden',
  },
  text: {
    color: colors.cyan,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '800',
    textAlign: 'center',
    includeFontPadding: false,
  },
  primary: {
    backgroundColor: colors.cyan,
  },
  outline: {
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: 'transparent',
  },
  dark: {
    backgroundColor: colors.panelDeep,
  },
  danger: {
    backgroundColor: colors.red,
  },
  primaryText: {
    color: colors.dark,
  },
  dangerText: {
    color: colors.white,
  },
  pressed: {
    opacity: 0.82,
  },
});
