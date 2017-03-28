import { Navigation } from 'react-native-navigation';

import Map from './Map';
import Menu from './Menu';
import Payment from './Payment';
import AddCard from './AddCard';

export function registerScreens() {
  Navigation.registerComponent('uber.MapScreen', () => Map);
  Navigation.registerComponent('uber.menu', () => Menu);
  Navigation.registerComponent('uber.Payment', () => Payment);
  Navigation.registerComponent('uber.AddCard', () => AddCard);
}