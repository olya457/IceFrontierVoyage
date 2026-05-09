import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors, tabBarGap, tabBarHeight} from '../theme';

const tabMeta: Record<string, {label: string; icon: string}> = {
  Tours: {label: 'Tours', icon: '🚢'},
  Stations: {label: 'Stations', icon: '🏢'},
  Map: {label: 'Map', icon: '🗺️'},
  Prep: {label: 'Prep', icon: '🎒'},
  Saved: {label: 'Saved', icon: '🔖'},
};

export function FloatingTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  return (
    <View pointerEvents="box-none" style={styles.wrap}>
      <View style={styles.bar}>
        {state.routes.map((route, index) => {
          const focused = state.index === index;
          const {options} = descriptors[route.key];
          const meta = tabMeta[route.name];

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!focused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable
              key={route.key}
              accessibilityRole="button"
              accessibilityState={focused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              style={({pressed}) => [
                styles.item,
                pressed && styles.pressed,
              ]}>
              <View style={[styles.iconBubble, focused && styles.activeIcon]}>
                <Text style={styles.icon}>{meta.icon}</Text>
              </View>
              <Text style={[styles.label, focused && styles.activeLabel]}>
                {meta.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: tabBarGap,
  },
  bar: {
    height: tabBarHeight,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(112, 207, 255, 0.24)',
    backgroundColor: 'rgba(5, 53, 96, 0.94)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.24,
    shadowRadius: 20,
    elevation: 18,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  iconBubble: {
    width: 38,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIcon: {
    backgroundColor: 'rgba(79, 195, 247, 0.22)',
  },
  icon: {
    fontSize: 20,
    lineHeight: 25,
  },
  label: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '700',
  },
  activeLabel: {
    color: colors.cyan,
  },
  pressed: {
    opacity: 0.72,
  },
});
