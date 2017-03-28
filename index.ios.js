import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
registerScreens();

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'example.FirstTabScreen',
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'example.SecondTabScreen',
      title: 'Screen Two'
    }
  ]
});