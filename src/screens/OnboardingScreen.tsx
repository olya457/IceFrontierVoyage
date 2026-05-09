import React, {useRef, useState} from 'react';
import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppButton} from '../components/AppButton';
import {Screen} from '../components/Screen';
import {images} from '../assets/images';
import {colors} from '../theme';
import type {RootStackParamList} from '../navigation/types';

type OnboardingScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Onboarding'
>;

const slides = [
  {
    title: 'Discover Antarctica',
    subtitle: 'Explore routes, stations, and frozen landscapes across Antarctica.',
    button: 'Start Exploring',
    image: images.onboardingDiscover,
  },
  {
    title: 'Follow Real Expedition Routes',
    subtitle: 'Compare classic crossings, deep voyages, islands, and fly-cruise routes.',
    button: 'View Routes',
    image: images.onboardingRoutes,
  },
  {
    title: 'Visit Polar Stations',
    subtitle: 'Learn about research bases, remote stations, and life on the ice.',
    button: 'Explore Stations',
    image: images.onboardingStations,
  },
  {
    title: 'Plan Before You Go',
    subtitle: 'Prepare for weather, packing, safety, and responsible travel.',
    button: 'Open Prep Guide',
    image: images.onboardingPrep,
  },
  {
    title: 'Save Your Polar Plan',
    subtitle: 'Save routes, stations, and notes for your future Antarctic journey.',
    button: 'Enter App',
    image: images.onboardingSave,
  },
];

export function OnboardingScreen({navigation}: OnboardingScreenProps) {
  const listRef = useRef<FlatList<(typeof slides)[number]>>(null);
  const [index, setIndex] = useState(0);
  const {width, height} = useWindowDimensions();
  const imageHeight = Math.min(height * 0.48, width * 0.96);

  const enterApp = () => {
    navigation.replace('AppTabs');
  };

  const next = () => {
    if (index === slides.length - 1) {
      enterApp();
      return;
    }

    const nextIndex = index + 1;
    setIndex(nextIndex);
    listRef.current?.scrollToIndex({index: nextIndex, animated: true});
  };

  const onScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const nextIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setIndex(nextIndex);
  };

  return (
    <Screen style={styles.root}>
      <FlatList
        ref={listRef}
        data={slides}
        keyExtractor={item => item.title}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
        renderItem={({item}) => (
          <View style={[styles.slide, {width}]}>
            <View style={[styles.imageWrap, {height: imageHeight}]}>
              <Image source={item.image} style={styles.image} />
            </View>
            <View style={styles.copy}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
          </View>
        )}
      />
      <View style={styles.footer}>
        <View style={styles.dots}>
          {slides.map((slide, dotIndex) => (
            <View
              key={slide.title}
              style={[styles.dot, dotIndex === index && styles.activeDot]}
            />
          ))}
        </View>
        <AppButton title={`${slides[index].button}  ›`} onPress={next} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingBottom: 36,
  },
  slide: {
    flex: 1,
    paddingHorizontal: 24,
    transform: [{translateY: 30}],
  },
  imageWrap: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  copy: {
    marginTop: 28,
    gap: 16,
  },
  title: {
    color: colors.text,
    fontSize: 30,
    lineHeight: 38,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.muted,
    fontSize: 18,
    lineHeight: 29,
    fontWeight: '500',
  },
  footer: {
    paddingHorizontal: 26,
    gap: 22,
    marginBottom: 20,
  },
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(79, 195, 247, 0.34)',
  },
  activeDot: {
    width: 31,
    backgroundColor: colors.cyan,
  },
});
