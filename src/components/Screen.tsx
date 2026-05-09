import LinearGradient from 'react-native-linear-gradient';
import React, {PropsWithChildren} from 'react';
import {
  Platform,
  StatusBar,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {androidEdge, colors, gradients} from '../theme';

type ScreenProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
  topInset?: boolean;
  bottomInset?: boolean;
}>;

export function Screen({
  children,
  style,
  topInset = true,
  bottomInset = false,
}: ScreenProps) {
  const insets = useSafeAreaInsets();
  const top = Platform.OS === 'android' ? androidEdge : insets.top;
  const bottom = Platform.OS === 'android' ? androidEdge : insets.bottom;

  return (
    <LinearGradient colors={gradients.app} style={styles.root}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View
        style={[
          styles.content,
          topInset && {paddingTop: Math.max(top, Platform.OS === 'ios' ? 14 : 0)},
          bottomInset && {paddingBottom: bottom},
          style,
        ]}>
        {children}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bgTop,
  },
  content: {
    flex: 1,
  },
});
