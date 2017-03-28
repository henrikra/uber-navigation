import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';

const Map = ({navigator}) => {
  return (
    <MapView
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }} 
      style={styles.map}
    >
      <TouchableOpacity style={styles.menu} onPress={() => {
        navigator.toggleDrawer();  
      }}>
      </TouchableOpacity>
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  menu: {
    position: 'absolute',
    top: 20,
    left: 10,
    padding: 10,
    width: 40,
    height: 40,
    backgroundColor: '#000000',
  },
});

export default Map;