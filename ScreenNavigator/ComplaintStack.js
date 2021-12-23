import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import YourComplaints from '../Screens/YourComplaints';
import ViewComplaintScreen from '../Screens/ViewComplaintScreen';
export const ComplaintStack = createStackNavigator(
  {
    YourComplaints: {
      screen: YourComplaints,
      navigationOptions: { headerShown: false },
    },
     ViewComplaintScreen: {
      screen: ViewComplaintScreen,
      navigationOptions: { headerShown: false },
    },
    
  },
  {
    initialRouteName: 'YourComplaints',
  }
);
