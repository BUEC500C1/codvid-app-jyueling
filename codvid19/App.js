import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class App extends React.Component {
  render() {
    return (
      <MapView
         style={{ flex: 1 }}
         provider={PROVIDER_GOOGLE}
         initialRegion={{
         latitude: 42.3505,
         longitude: -71.1054,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421}}
         showsUserLocation
      />
    );
  }
}

export default App;