jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('react-native-maps', () => {
  const React = require('react');
  const {View} = require('react-native');
  const createComponent = name =>
    function MockMapComponent({children, ...props}) {
      return React.createElement(View, {...props, testID: name}, children);
    };

  return {
    __esModule: true,
    default: createComponent('MapView'),
    Marker: createComponent('Marker'),
    Polyline: createComponent('Polyline'),
    PROVIDER_DEFAULT: 'default',
  };
});
