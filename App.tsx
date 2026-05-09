import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SavedProvider} from './src/context/SavedContext';
import {AppNavigator} from './src/navigation/AppNavigator';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <SavedProvider>
        <AppNavigator />
      </SavedProvider>
    </SafeAreaProvider>
  );
}

export default App;
