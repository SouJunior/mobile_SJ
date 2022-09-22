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
        tabBarStyle: {position: 'static'},
        tabBarHideOnKeyboard: true,
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
              size={25}
            />
          );
        },
      })}>
      <Tab.Screen name="Home" options={{title: 'Início'}} component={Home} />
      <Tab.Screen
        name="Location"
        options={{title: 'Local'}}
        component={Location}
      />
      <Tab.Screen
        name="Register"
        options={{title: 'Adicionar'}}
        component={Register}
      />
      <Tab.Screen
        name="Profile"
        options={{title: 'Perfil'}}
        component={Profile}
      />
      <Tab.Screen name="Jobs" options={{title: 'Vagas'}} component={Jobs} />
    </Tab.Navigator>
  );
}
