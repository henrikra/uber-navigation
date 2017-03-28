import { Navigation } from 'react-native-navigation';

import React from 'react';
import {View, Text} from 'react-native';

const FirstTabScreen = () => <View><Text>first</Text></View>;
const SecondTabScreen = () => <View><Text>seconds</Text></View>;
const PushedScreen = () => <View><Text>push</Text></View>;

export function registerScreens() {
  Navigation.registerComponent('uber.MapScreen', () => FirstTabScreen);
  Navigation.registerComponent('uber.menu', () => SecondTabScreen);
  Navigation.registerComponent('example.PushedScreen', () => PushedScreen);
}