import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'uber.MapScreen',
    title: 'Map',
  },
  drawer: {
    left: {
      screen: 'uber.menu',
    }
  },
});