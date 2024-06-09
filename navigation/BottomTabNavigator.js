import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen'; // Updated to the new SearchScreen
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ResultScreen from '../screens/ResultScreen';
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
          headerTitle: '', // Hide default header title
          headerLeft: () => null, // Hide the back button for the initial screen
        }}
      />
      <Stack.Screen
        name="ResultScreen"
        component={ResultScreen}
        options={{
          header: () => <CustomHeader title="Result" />,
          headerTitle: '', // Hide default header title
        }}
      />
    </Stack.Navigator>
  );
}

function SearchStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen} // Updated to the new SearchScreen
        options={{
          header: () => <CustomHeader title="Search" />,
          headerTitle: '', // Hide default header title
          headerLeft: () => null, // Hide the back button for the initial screen
        }}
      />
      <Stack.Screen
        name="ResultScreen"
        component={ResultScreen}
        options={{
          header: () => <CustomHeader title="Result" />,
          headerTitle: '', // Hide default header title
        }}
      />
    </Stack.Navigator>
  );
}

function BottomTabNavigator() {
  return (
    <NavigationContainer>
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
        <Tab.Screen name="Search" component={SearchStackNavigator} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabNavigator;
