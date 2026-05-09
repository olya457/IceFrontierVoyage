import React, {useMemo, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Chip} from '../components/Chip';
import {HeaderBlock} from '../components/HeaderBlock';
import {Screen} from '../components/Screen';
import {StationCard} from '../components/StationCard';
import {stationCategories, stations} from '../data/stations';
import {tabBarSpace} from '../theme';

export function StationsScreen() {
  const navigation = useNavigation<any>();
  const [category, setCategory] = useState(stationCategories[0]);
  const filtered = useMemo(
    () => stations.filter(station => station.category === category),
    [category],
  );

  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <HeaderBlock
          title="Polar Stations"
          subtitle="Research bases across Antarctica"
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chips}>
          {stationCategories.map(item => (
            <Chip
              key={item}
              label={item}
              active={item === category}
              onPress={() => setCategory(item)}
            />
          ))}
        </ScrollView>
        <View style={styles.list}>
          {filtered.map(station => (
            <StationCard
              key={station.id}
              station={station}
              onOpen={() =>
                navigation.navigate('StationDetail', {id: station.id})
              }
              onMap={() =>
                navigation.getParent()?.navigate('Map', {
                  screen: 'MapHome',
                  params: {stationId: station.id},
                })
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
  chips: {
    gap: 10,
    paddingHorizontal: 16,
    paddingBottom: 22,
  },
  list: {
    paddingHorizontal: 16,
  },
});
