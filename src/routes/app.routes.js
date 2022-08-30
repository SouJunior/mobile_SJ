import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../pages/Home';
import Jobs from '../pages/Jobs';
import Location from '../pages/Location';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Jobs') {
            iconName = 'ios-briefcase-outline';
          } else if (route.name === 'Location') {
            iconName = 'ios-location-outline';
          } else if (route.name === 'Profile') {
            iconName = 'ios-person-outline';
          } else if (route.name === 'Register') {
            iconName = 'add-circle-outline';
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? '#1165BA' : '#898989'}
              size={30}
            />
          );
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Location" component={Location} />
      <Tab.Screen name="Register" component={Register} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Jobs" component={Jobs} />
    </Tab.Navigator>
  );
}
