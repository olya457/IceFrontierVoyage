import React, {useMemo, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Chip} from '../components/Chip';
import {Screen} from '../components/Screen';
import {TourCard} from '../components/TourCard';
import {images} from '../assets/images';
import {expeditionRoutes, tourCategories} from '../data/routes';
import {colors, tabBarSpace} from '../theme';

export function ToursScreen() {
  const navigation = useNavigation<any>();
  const [category, setCategory] = useState(tourCategories[0]);
  const routes = useMemo(
    () => expeditionRoutes.filter(route => route.category === category),
    [category],
  );

  return (
    <Screen topInset={false}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <Image source={images.toursHero} style={styles.heroImage} />
          <View style={styles.heroShade} />
          <View style={styles.heroCopy}>
            <Text style={styles.heroTitle}>Antarctic Expeditions</Text>
            <Text style={styles.heroSubtitle}>Explore the frozen frontier</Text>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chips}>
          {tourCategories.map(item => (
            <Chip
              key={item}
              label={item}
              active={item === category}
              onPress={() => setCategory(item)}
            />
          ))}
        </ScrollView>
        <View style={styles.list}>
          {routes.map(route => (
            <TourCard
              key={route.id}
              route={route}
              onOpen={() =>
                navigation.navigate('TourDetail', {id: route.id})
              }
            />
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: tabBarSpace,
  },
  hero: {
    height: 258,
    width: '100%',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    backgroundColor: colors.navy,
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heroShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(4, 25, 46, 0.28)',
  },
  heroCopy: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 24,
    paddingBottom: 34,
  },
  heroTitle: {
    color: colors.text,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '900',
    textShadowColor: 'rgba(0, 0, 0, 0.45)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 8,
  },
  heroSubtitle: {
    color: colors.muted,
    fontSize: 17,
    lineHeight: 24,
    marginTop: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.45)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 6,
  },
  chips: {
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  list: {
    paddingHorizontal: 16,
  },
});
