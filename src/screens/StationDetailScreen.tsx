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
import {getStationById} from '../data/stations';
import {colors, tabBarSpace} from '../theme';
import {formatCoordinate} from '../utils/format';

export function StationDetailScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const insets = useSafeAreaInsets();
  const item = getStationById(route.params?.id);
  const {isSaved, toggle} = useSaved();

  if (!item) {
    return (
      <Screen>
        <View style={styles.missing}>
          <Text style={styles.title}>Station not found</Text>
          <AppButton title="Back" onPress={() => navigation.goBack()} />
        </View>
      </Screen>
    );
  }

  const saved = isSaved('station', item.id);
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
              <Text style={styles.badgeText}>{item.stationType}</Text>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.actions}>
            <AppButton
              title={saved ? 'Saved' : 'Save Station'}
              variant={saved ? 'dark' : 'primary'}
              onPress={() => toggle('station', item.id)}
              style={styles.mainAction}
            />
            <AppButton
              title="View on Map"
              variant="outline"
              onPress={() =>
                navigation.getParent()?.navigate('Map', {
                  screen: 'MapHome',
                  params: {stationId: item.id},
                })
              }
              style={styles.secondaryAction}
            />
          </View>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.metaBlock}>
            <Text style={styles.metaLabel}>Country</Text>
            <Text style={styles.metaValue}>🏢 {item.country}</Text>
            <Text style={styles.metaLabel}>Coordinates</Text>
            <Text style={styles.metaValue}>📍 {formatCoordinate(item.coordinate)}</Text>
          </View>
          <SectionCard title="About">
            <Text style={styles.paragraph}>{item.longDescription}</Text>
          </SectionCard>
          <SectionCard title="Role & Importance">
            <Text style={styles.paragraph}>
              {item.title} supports Antarctic research, logistics, environmental monitoring, and field operations in the {item.location} region.
            </Text>
          </SectionCard>
          <SectionCard title="Key Facts">
            <Text style={styles.fact}>ⓘ Country: {item.country}</Text>
            <Text style={styles.fact}>ⓘ Type: {item.stationType}</Text>
            <Text style={styles.fact}>ⓘ Location: {item.location}</Text>
            <Text style={styles.fact}>ⓘ Region: {item.category}</Text>
          </SectionCard>
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
    height: 292,
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
    paddingBottom: 28,
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
    backgroundColor: colors.red,
    borderRadius: 14,
    paddingHorizontal: 13,
    paddingVertical: 7,
  },
  badgeText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '900',
  },
  body: {
    padding: 16,
    gap: 16,
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
  },
  mainAction: {
    flex: 1.52,
  },
  secondaryAction: {
    flex: 1,
  },
  title: {
    color: colors.text,
    fontSize: 27,
    lineHeight: 34,
    fontWeight: '900',
  },
  metaBlock: {
    gap: 4,
  },
  metaLabel: {
    color: colors.dim,
    fontSize: 12,
    marginTop: 4,
  },
  metaValue: {
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
  fact: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 29,
  },
  missing: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    gap: 18,
  },
});
