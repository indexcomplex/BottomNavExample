// BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ResultScreen from '../screens/ResultScreen';
import ChoiceScreen from '../screens/ChoiceScreen';
import ImageScrollScreen from '../screens/ImageScrollScreen';
import SelectionScreen from '../screens/SelectionScreen';
import CustomHeader from '../components/CustomHeader';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          header: () => <CustomHeader title="Home" />,
          headerTitle: '',
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="SelectionScreen"
        component={SelectionScreen}
        options={{
          header: () => <CustomHeader title="Selection" />,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="ChoiceScreen"
        component={ChoiceScreen}
        options={{
          header: () => <CustomHeader title="Choice" />,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="ResultScreen"
        component={ResultScreen}
        options={{
          header: () => <CustomHeader title="Result" />,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="ImageScrollScreen"
        component={ImageScrollScreen}
        options={{
          header: () => <CustomHeader title="Images" />,
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'bell' : 'bell';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          display: 'flex',
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
