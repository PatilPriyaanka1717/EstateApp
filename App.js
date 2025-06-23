import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeStack from './navigation/HomeStack';
import FilterScreen from './components/FilterScreen';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 30,
            left: 20,
            marginTop:5,
            right: 20,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',            
            borderRadius: 40,
            height: 80,
            borderTopWidth: 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 5,
          },
          tabBarItemStyle: {
            justifyContent: 'center',
            alignItems: 'center',
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Filters') {
              iconName = focused ? 'options' : 'options-outline';
            } else if (route.name === 'Wishlist') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Messages') {
              iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return (
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: focused ? '#DDF40A' : 'transparent',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 45,
                }}
              >
                <Ionicons
                  name={iconName}
                  size={22}
                  color={focused ? '#000' : '#888'}
                />
              </View>
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Filters" component={FilterScreen} />
        <Tab.Screen name="Wishlist" component={FilterScreen} />
        <Tab.Screen name="Messages" component={FilterScreen} />
        <Tab.Screen name="Profile" component={FilterScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
