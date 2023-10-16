/**
 * @format
 */

import { Navigation } from 'react-native-navigation';

import MainMenuScreen from './src/screen/MainMenu.tsx';
import WvScreen from './src/screen/Wv.tsx';

Navigation.registerComponent(MainMenuScreen.name, () => MainMenuScreen);
Navigation.registerComponent(WvScreen.name, () => WvScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: MainMenuScreen.name,
            },
          },
        ],
      },
    },
  });
});
