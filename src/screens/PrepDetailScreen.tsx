import React from 'react';
import {
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
import {getPrepById} from '../data/prep';
import {colors, tabBarSpace} from '../theme';

export function PrepDetailScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const insets = useSafeAreaInsets();
  const item = getPrepById(route.params?.id);
  const {isSaved, toggle} = useSaved();

  if (!item) {
    return (
      <Screen>
        <View style={styles.missing}>
          <Text style={styles.title}>Article not found</Text>
          <AppButton title="Back" onPress={() => navigation.goBack()} />
        </View>
      </Screen>
    );
  }

  const saved = isSaved('prep', item.id);
  const top = Platform.OS === 'android' ? 30 : insets.top + 10;

  const share = () => {
    Share.share({
      message: `${item.title}\n${item.subtitle}`,
    }).catch(() => undefined);
  };

  return (
    <Screen topInset={false}>
      <View style={[styles.topActions, {paddingTop: top}]}>
        <IconButton icon="‹" label="Back" onPress={() => navigation.goBack()} />
        <IconButton icon="↗" label="Share" onPress={share} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.content, {paddingTop: top + 74}]}>
        <SectionCard style={styles.articleCard}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.paragraph}>{item.longText}</Text>
        </SectionCard>
        <AppButton
          title={saved ? 'Saved' : 'Save Article'}
          variant={saved ? 'dark' : 'primary'}
          onPress={() => toggle('prep', item.id)}
        />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  topActions: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 18,
    right: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: tabBarSpace,
    gap: 20,
  },
  articleCard: {
    padding: 22,
  },
  title: {
    color: colors.text,
    fontSize: 21,
    lineHeight: 28,
    fontWeight: '900',
    marginBottom: 14,
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
