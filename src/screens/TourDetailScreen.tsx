import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppButton} from '../components/AppButton';
import {IconButton} from '../components/IconButton';
import {Screen} from '../components/Screen';
import {SectionCard} from '../components/SectionCard';
import {useSaved} from '../context/SavedContext';
import {getRouteById} from '../data/routes';
import {colors, tabBarSpace} from '../theme';
import {formatCoordinate} from '../utils/format';

export function TourDetailScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const insets = useSafeAreaInsets();
  const item = getRouteById(route.params?.id);
  const {isSaved, toggle} = useSaved();

  if (!item) {
    return (
      <Screen>
        <View style={styles.missing}>
          <Text style={styles.title}>Route not found</Text>
          <AppButton title="Back" onPress={() => navigation.goBack()} />
        </View>
      </Screen>
    );
  }

  const saved = isSaved('tour', item.id);
  const top = Platform.OS === 'android' ? 30 : insets.top + 10;

  const share = () => {
    Share.share({
      message: `${item.title}\n${item.shortDescription}`,
    }).catch(() => undefined);
  };

  return (
    <Screen topInset={false}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <Image source={item.image} style={styles.heroImage} />
          <View style={styles.heroShade} />
          <View style={[styles.topActions, {paddingTop: top}]}>
            <IconButton icon="‹" label="Back" onPress={() => navigation.goBack()} />
            <IconButton icon="↗" label="Share" onPress={share} />
          </View>
          <View style={styles.heroCopy}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.category}</Text>
            </View>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.stats}>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Starting Point</Text>
              <Text style={styles.statValue}>🚢 {item.startingPoint}</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Duration</Text>
              <Text style={styles.statValue}>◷ {item.duration}</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Difficulty</Text>
              <Text style={styles.statValue}>↗ {item.difficulty}</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Season</Text>
              <Text style={styles.statValue}>▣ {item.season}</Text>
            </View>
          </View>
          <SectionCard title="Description">
            <Text style={styles.paragraph}>{item.longDescription}</Text>
          </SectionCard>
          <SectionCard title="Route Area">
            <Text style={styles.paragraph}>{item.mainArea}</Text>
            <Text style={styles.paragraph}>{formatCoordinate(item.coordinate)}</Text>
          </SectionCard>
          <AppButton
            title={saved ? 'Saved' : 'Save Tour'}
            variant={saved ? 'dark' : 'primary'}
            onPress={() => toggle('tour', item.id)}
          />
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
    height: 342,
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
    backgroundColor: 'rgba(4, 25, 46, 0.32)',
  },
  heroCopy: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 24,
    paddingBottom: 36,
  },
  topActions: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 18,
    right: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.yellow,
    borderRadius: 14,
    paddingHorizontal: 13,
    paddingVertical: 7,
    marginBottom: 34,
  },
  badgeText: {
    color: colors.dark,
    fontSize: 13,
    fontWeight: '900',
  },
  title: {
    color: colors.text,
    fontSize: 28,
    lineHeight: 35,
    fontWeight: '900',
    textShadowColor: 'rgba(0, 0, 0, 0.45)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 8,
  },
  body: {
    padding: 16,
    gap: 14,
  },
  stats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  stat: {
    width: '47.8%',
  },
  statLabel: {
    color: colors.dim,
    fontSize: 12,
    marginBottom: 4,
  },
  statValue: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '700',
  },
  paragraph: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 27,
  },
  missing: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    gap: 18,
  },
});
