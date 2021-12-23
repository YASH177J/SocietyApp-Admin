import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Screens/HomeScreen';

import AddAnnouncementsScreen from '../Screens/AddAnnouncementsScreen'
export const HomeStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: { headerShown: false },
    },
    AddAnnouncementsScreen: {
      screen: AddAnnouncementsScreen,
      navigationOptions: { headerShown: false },
    },
  },
  {
    initialRouteName: 'HomeScreen',
  }
);
