import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MapView, {
  Marker,
  Polyline,
  PROVIDER_DEFAULT,
  Region,
} from 'react-native-maps';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppButton} from '../components/AppButton';
import {Screen} from '../components/Screen';
import {useSaved} from '../context/SavedContext';
import {stations} from '../data/stations';
import {expeditionRoutes} from '../data/routes';
import {androidEdge, colors, tabBarGap, tabBarHeight} from '../theme';

const initialRegion: Region = {
  latitude: -64.9,
  longitude: -61.8,
  latitudeDelta: 20,
  longitudeDelta: 34,
};

export function MapScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const insets = useSafeAreaInsets();
  const {isSaved, toggle} = useSaved();
  const mapRef = useRef<MapView>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [region, setRegion] = useState<Region>(initialRegion);
  const [mapType, setMapType] = useState<'satellite' | 'standard'>('satellite');
  const selected = stations.find(station => station.id === selectedId);
  const top = Platform.OS === 'android' ? androidEdge : insets.top;
  const bottom = tabBarHeight + tabBarGap + 18;

  const routeLine = useMemo(
    () =>
      expeditionRoutes
        .filter(item => item.category === 'Classic Peninsula')
        .slice(0, 5)
        .map(item => item.coordinate),
    [],
  );

  const animateToRegion = useCallback((nextRegion: Region) => {
    setRegion(nextRegion);
    mapRef.current?.animateToRegion(nextRegion, 300);
  }, []);

  const openStation = useCallback((id: string) => {
    const next = stations.find(station => station.id === id);
    if (!next) {
      return;
    }

    setSelectedId(id);
    animateToRegion({
      latitude: next.coordinate.latitude,
      longitude: next.coordinate.longitude,
      latitudeDelta: 12,
      longitudeDelta: 18,
    });
  }, [animateToRegion]);

  useEffect(() => {
    if (route.params?.stationId) {
      const next = stations.find(station => station.id === route.params.stationId);
      if (next) {
        openStation(next.id);
      }
    }
  }, [openStation, route.params?.stationId]);

  const zoom = (factor: number) => {
    animateToRegion({
      ...region,
      latitudeDelta: Math.max(1.8, Math.min(45, region.latitudeDelta * factor)),
      longitudeDelta: Math.max(3, Math.min(70, region.longitudeDelta * factor)),
    });
  };

  const reset = () => {
    setSelectedId(null);
    animateToRegion(initialRegion);
  };

  return (
    <Screen topInset={false}>
      <View style={styles.root}>
        <MapView
          ref={mapRef}
          provider={PROVIDER_DEFAULT}
          style={StyleSheet.absoluteFill}
          mapType={mapType}
          initialRegion={initialRegion}
          onRegionChangeComplete={setRegion}
          customMapStyle={mapType === 'standard' ? mapStyle : undefined}>
          <Polyline
            coordinates={routeLine}
            strokeColor={colors.cyan}
            strokeWidth={4}
            lineDashPattern={[1, 8]}
          />
          {stations.slice(0, 12).map(station => {
            const active = station.id === selectedId;
            return (
              <Marker
                key={station.id}
                coordinate={station.coordinate}
                onPress={() => openStation(station.id)}>
                <View style={[styles.marker, active && styles.markerActive]}>
                  <Text style={styles.markerText}>❄️</Text>
                </View>
              </Marker>
            );
          })}
        </MapView>
        <View style={styles.mapTint} pointerEvents="none" />
        <View style={[styles.header, {top: top + 18}]}>
          <Text style={styles.headerTitle}>Ice Map</Text>
          <Text style={styles.headerSubtitle}>Interactive Antarctica exploration</Text>
        </View>
        <View style={[styles.controls, {top: top + 104}]}>
          <ControlButton label="Zoom in" title="＋" onPress={() => zoom(0.55)} />
          <ControlButton label="Zoom out" title="−" onPress={() => zoom(1.65)} />
          <ControlButton label="Reset" title="⌖" onPress={reset} />
          <ControlButton
            label="Layers"
            title="▧"
            onPress={() =>
              setMapType(current =>
                current === 'satellite' ? 'standard' : 'satellite',
              )
            }
          />
        </View>
        {selected ? (
          <View style={styles.centerWrap} pointerEvents="box-none">
            <View style={styles.preview}>
              <Pressable
                accessibilityLabel="Close station preview"
                onPress={() => setSelectedId(null)}
                style={styles.closeButton}>
                <Text style={styles.closeText}>×</Text>
              </Pressable>
            <Image source={selected.image} style={styles.previewImage} />
            <View style={styles.previewCopy}>
              <Text style={styles.previewType}>{selected.stationType}</Text>
              <Text style={styles.previewTitle}>{selected.title}</Text>
              <Text style={styles.previewText}>{selected.shortDescription}</Text>
            </View>
            <View style={styles.previewActions}>
              <AppButton
                title="View Details"
                onPress={() =>
                  navigation.navigate('StationDetail', {id: selected.id})
                }
                style={styles.previewMain}
              />
              <AppButton
                title={isSaved('station', selected.id) ? 'Saved' : 'Save'}
                variant={isSaved('station', selected.id) ? 'dark' : 'outline'}
                onPress={() => toggle('station', selected.id)}
                style={styles.previewSave}
              />
            </View>
          </View>
          </View>
        ) : null}
        <View style={[styles.bottomFade, {height: bottom}]} pointerEvents="none" />
      </View>
    </Screen>
  );
}

type ControlButtonProps = {
  title: string;
  label: string;
  onPress: () => void;
};

function ControlButton({title, label, onPress}: ControlButtonProps) {
  return (
    <Pressable
      accessibilityLabel={label}
      onPress={onPress}
      style={({pressed}) => [styles.controlButton, pressed && styles.pressed]}>
      <Text style={styles.controlText}>{title}</Text>
    </Pressable>
  );
}

const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [{color: '#0a3158'}],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [{color: '#9bd7ef'}],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [{color: '#061b32'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#06233f'}],
  },
];

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  mapTint: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(5, 46, 86, 0.16)',
  },
  header: {
    position: 'absolute',
    left: 20,
    right: 92,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.lineSoft,
    backgroundColor: 'rgba(4, 25, 46, 0.76)',
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  headerTitle: {
    color: colors.text,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '900',
  },
  headerSubtitle: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 2,
  },
  controls: {
    position: 'absolute',
    right: 18,
    gap: 10,
  },
  controlButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: colors.lineSoft,
    backgroundColor: 'rgba(4, 25, 46, 0.82)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlText: {
    color: colors.cyan,
    fontSize: 28,
    lineHeight: 31,
    fontWeight: '900',
  },
  pressed: {
    opacity: 0.75,
  },
  marker: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: colors.cyan,
    backgroundColor: 'rgba(4, 25, 46, 0.84)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerActive: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: colors.cyan,
    borderColor: colors.cyan,
  },
  markerText: {
    fontSize: 19,
  },
  centerWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  preview: {
    width: '100%',
    maxWidth: 390,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.lineSoft,
    backgroundColor: 'rgba(4, 25, 46, 0.96)',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 18},
    shadowOpacity: 0.28,
    shadowRadius: 26,
    elevation: 16,
  },
  closeButton: {
    position: 'absolute',
    zIndex: 2,
    right: 12,
    top: 12,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(79, 195, 247, 0.18)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    color: colors.cyan,
    fontSize: 25,
    lineHeight: 29,
    fontWeight: '700',
  },
  previewImage: {
    width: 82,
    height: 82,
    borderRadius: 14,
    position: 'absolute',
    left: 14,
    top: 14,
  },
  previewCopy: {
    minHeight: 82,
    paddingLeft: 96,
    paddingRight: 4,
    gap: 5,
  },
  previewType: {
    color: colors.yellow,
    fontSize: 12,
    fontWeight: '900',
  },
  previewTitle: {
    color: colors.text,
    fontSize: 19,
    lineHeight: 24,
    fontWeight: '900',
    paddingRight: 34,
  },
  previewText: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 18,
  },
  previewActions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 12,
  },
  previewMain: {
    flex: 1,
  },
  previewSave: {
    width: 82,
  },
  bottomFade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(4, 25, 46, 0.38)',
  },
});
