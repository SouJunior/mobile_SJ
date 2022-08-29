import React from 'react';
import Home from '../pages/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Location') {
            iconName = focused ? 'location' : 'location-outline';
          } else if (route.name === 'Add') {
            iconName = focused ? 'add' : 'add-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Jobs') {
            iconName = focused ? 'bag' : 'bag-outline';
          }
          return <Icon name={iconName} size={25} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}
