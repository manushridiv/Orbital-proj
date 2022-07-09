import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import MainContainer from './screens/MainContainer';
import ProductInfo from './screens/MenuBarScreens/ProductInfo';
import MyFave from './screens/menuBarScreens/MyFave';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options= {{ headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen options = {{ headerShown: false}} name="Home" component={MainContainer} />
        <Stack.Screen name = "ProductInfo" component = {ProductInfo} />
        <Stack.Screen name= "MyFave" component= {MyFave} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}