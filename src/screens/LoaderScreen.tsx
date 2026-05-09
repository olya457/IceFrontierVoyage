import React, {useEffect, useMemo, useRef} from 'react';
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {images} from '../assets/images';
import {colors} from '../theme';
import type {RootStackParamList} from '../navigation/types';

type LoaderScreenProps = NativeStackScreenProps<RootStackParamList, 'Loader'>;

export function LoaderScreen({navigation}: LoaderScreenProps) {
  const {width, height} = useWindowDimensions();
  const pulse = useRef(new Animated.Value(0)).current;
  const spin = useRef(new Animated.Value(0)).current;

  const snow = useMemo(
    () =>
      Array.from({length: 22}, (_, index) => ({
        id: index,
        left: ((index * 47) % Math.max(width, 1)) / width,
        top: ((index * 73) % Math.max(height, 1)) / height,
        size: 2 + (index % 3),
        opacity: 0.36 + (index % 5) * 0.11,
      })),
    [height, width],
  );

  useEffect(() => {
    const loop = Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(pulse, {
            toValue: 1,
            duration: 1250,
            easing: Easing.inOut(Easing.quad),
            useNativeDriver: true,
          }),
          Animated.timing(pulse, {
            toValue: 0,
            duration: 1250,
            easing: Easing.inOut(Easing.quad),
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(spin, {
          toValue: 1,
          duration: 5000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    );

    loop.start();

    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 5000);

    return () => {
      loop.stop();
      clearTimeout(timer);
    };
  }, [navigation, pulse, spin]);

  const scale = pulse.interpolate({
    inputRange: [0, 1],
    outputRange: [0.96, 1.04],
  });
  const rotate = spin.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '8deg'],
  });
  return (
    <LinearGradient colors={['#07325d', '#061b32']} style={styles.root}>
      {snow.map(item => (
        <View
          key={item.id}
          style={[
            styles.snow,
            {
              left: item.left * width,
              top: item.top * height,
              width: item.size,
              height: item.size,
              opacity: item.opacity,
            },
          ]}
        />
      ))}
      <View style={styles.center}>
        <Animated.View
          style={[
            styles.logoWrap,
            {
              transform: [{scale}, {rotate}],
            },
          ]}>
          <Image source={images.loaderLogo} style={styles.logo} />
        </Animated.View>
        <Text style={styles.title}>Preparing Polar Route...</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  snow: {
    position: 'absolute',
    borderRadius: 6,
    backgroundColor: colors.white,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logoWrap: {
    position: 'absolute',
    top: '50%',
    marginTop: -130,
    width: 260,
    height: 260,
    borderRadius: 34,
    overflow: 'hidden',
    shadowColor: '#55c7ff',
    shadowOpacity: 0.24,
    shadowRadius: 24,
    shadowOffset: {width: 0, height: 12},
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    position: 'absolute',
    top: '50%',
    color: colors.muted,
    marginTop: 160,
    fontSize: 19,
    lineHeight: 25,
    fontWeight: '500',
  },
});
