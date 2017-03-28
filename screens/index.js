import { Navigation } from 'react-native-navigation';

import React from 'react';
import {View, Text} from 'react-native';
import Map from './Map';

const SecondTabScreen = () => <View><Text>seconds</Text></View>;
const PushedScreen = () => <View><Text>push</Text></View>;

export function registerScreens() {
  Navigation.registerComponent('uber.MapScreen', () => Map);
  Navigation.registerComponent('uber.menu', () => SecondTabScreen);
  Navigation.registerComponent('example.PushedScreen', () => PushedScreen);
}