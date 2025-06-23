import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import PropertyDetailsScreen from '../components/PropertyDetailsScreen';
import PropertyOverviewScreen from '../components/PropertyOverviewScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
     <Stack.Screen name="PropertyDetailsScreen" component={PropertyDetailsScreen}options={{ tabBarStyle: { display: 'none' } }} />
      <Stack.Screen name="PropertyOverviewScreen" component={PropertyOverviewScreen} />
    </Stack.Navigator>
  );
}