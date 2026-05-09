import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PrepCard} from '../components/PrepCard';
import {Screen} from '../components/Screen';
import {images} from '../assets/images';
import {prepArticles} from '../data/prep';
import {colors, tabBarSpace} from '../theme';

export function PrepScreen() {
  const navigation = useNavigation<any>();

  return (
    <Screen topInset={false}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <Image source={images.onboardingPrep} style={styles.heroImage} />
          <View style={styles.heroCopy}>
            <Text style={styles.title}>Expedition Prep</Text>
            <Text style={styles.subtitle}>Prepare for your Antarctic journey</Text>
          </View>
        </View>
        <View style={styles.list}>
          {prepArticles.map(article => (
            <PrepCard
              key={article.id}
              article={article}
              onOpen={() =>
                navigation.navigate('PrepDetail', {id: article.id})
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
    height: 250,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    backgroundColor: colors.navy,
  },
  heroImage: {
    position: 'absolute',
    right: -26,
    top: 20,
    width: 310,
    height: 250,
    opacity: 0.44,
    resizeMode: 'contain',
  },
  heroCopy: {
    paddingHorizontal: 24,
    paddingBottom: 36,
  },
  title: {
    color: colors.text,
    fontSize: 31,
    lineHeight: 38,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.muted,
    fontSize: 17,
    lineHeight: 24,
    marginTop: 8,
  },
  list: {
    paddingHorizontal: 16,
    paddingTop: 18,
  },
});
