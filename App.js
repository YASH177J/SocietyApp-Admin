import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './Screens/LoginScreen';
import { AppTabNavigator } from './ScreenNavigator/bottomTabNavigator';
import db from "./config"

export default function App() {
  return <AppContainer />;
} 

const switchNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Tabs: { screen: AppTabNavigator },
});

const AppContainer = createAppContainer(switchNavigator);
