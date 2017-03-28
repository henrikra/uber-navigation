import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Menu = () => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.avatar} />
        <Text style={styles.name}>Henrik Raitasola</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000000',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    backgroundColor: '#F9F9F9',
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  name: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default Menu;