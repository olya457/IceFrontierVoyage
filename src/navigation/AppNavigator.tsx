import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FloatingTabBar} from '../components/FloatingTabBar';
import {LoaderScreen} from '../screens/LoaderScreen';
import {MapScreen} from '../screens/MapScreen';
import {OnboardingScreen} from '../screens/OnboardingScreen';
import {PrepDetailScreen} from '../screens/PrepDetailScreen';
import {PrepScreen} from '../screens/PrepScreen';
import {SavedScreen} from '../screens/SavedScreen';
import {StationDetailScreen} from '../screens/StationDetailScreen';
import {StationsScreen} from '../screens/StationsScreen';
import {TourDetailScreen} from '../screens/TourDetailScreen';
import {ToursScreen} from '../screens/ToursScreen';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import type {RootStackParamList, TabParamList} from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();
const ToursStack = createNativeStackNavigator();
const StationsStack = createNativeStackNavigator();
const MapStack = createNativeStackNavigator();
const PrepStack = createNativeStackNavigator();
const SavedStack = createNativeStackNavigator();

const stackOptions = {
  headerShown: false,
} as const;

const renderTabBar = (props: BottomTabBarProps) => <FloatingTabBar {...props} />;

function ToursNavigator() {
  return (
    <ToursStack.Navigator screenOptions={stackOptions}>
      <ToursStack.Screen name="ToursHome" component={ToursScreen} />
      <ToursStack.Screen name="TourDetail" component={TourDetailScreen} />
    </ToursStack.Navigator>
  );
}

function StationsNavigator() {
  return (
    <StationsStack.Navigator screenOptions={stackOptions}>
      <StationsStack.Screen name="StationsHome" component={StationsScreen} />
      <StationsStack.Screen name="StationDetail" component={StationDetailScreen} />
    </StationsStack.Navigator>
  );
}

function MapNavigator() {
  return (
    <MapStack.Navigator screenOptions={stackOptions}>
      <MapStack.Screen name="MapHome" component={MapScreen} />
      <MapStack.Screen name="StationDetail" component={StationDetailScreen} />
      <MapStack.Screen name="TourDetail" component={TourDetailScreen} />
    </MapStack.Navigator>
  );
}

function PrepNavigator() {
  return (
    <PrepStack.Navigator screenOptions={stackOptions}>
      <PrepStack.Screen name="PrepHome" component={PrepScreen} />
      <PrepStack.Screen name="PrepDetail" component={PrepDetailScreen} />
    </PrepStack.Navigator>
  );
}

function SavedNavigator() {
  return (
    <SavedStack.Navigator screenOptions={stackOptions}>
      <SavedStack.Screen name="SavedHome" component={SavedScreen} />
      <SavedStack.Screen name="TourDetail" component={TourDetailScreen} />
      <SavedStack.Screen name="StationDetail" component={StationDetailScreen} />
      <SavedStack.Screen name="PrepDetail" component={PrepDetailScreen} />
    </SavedStack.Navigator>
  );
}

function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={renderTabBar}>
      <Tab.Screen name="Tours" component={ToursNavigator} />
      <Tab.Screen name="Stations" component={StationsNavigator} />
      <Tab.Screen name="Map" component={MapNavigator} />
      <Tab.Screen name="Prep" component={PrepNavigator} />
      <Tab.Screen name="Saved" component={SavedNavigator} />
    </Tab.Navigator>
  );
}

export function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={stackOptions}>
        <RootStack.Screen name="Loader" component={LoaderScreen} />
        <RootStack.Screen name="Onboarding" component={OnboardingScreen} />
        <RootStack.Screen name="AppTabs" component={AppTabs} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
