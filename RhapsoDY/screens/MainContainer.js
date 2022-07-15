import * as React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import ListingHomeScreen from '../screens/menuBarScreens/ListingHomeScreen.js';
import ForumScreen from '../screens/menuBarScreens/ForumScreen.js';
import DirectMessageContainer from './menuBarScreens/DirectMessageContainer.js';
import PublishListingScreen from '../screens/menuBarScreens/PublishListingScreen.js';

//headerTitle
import Header from '../shared/HeaderBar.js';

// Screen Name
const listingHomeName = "Home";
const forumName = "Forum";
const directMessageName = "DM";
const publishListingName = "Publish";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
      <Tab.Navigator
        initialRouteName={listingHomeName}
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'darkolivegreen',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
          tabBarStyle: { padding: 10, height: 70},
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === listingHomeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === directMessageName) {
              iconName = focused ? 'mail' : 'mail-outline';

            } else if (rn === forumName) {
              iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';

            } else if (rn === publishListingName) {
              iconName = focused ? 'share' : 'share-outline';
            }
            
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name={listingHomeName} 
        component={ListingHomeScreen} 
        options= {{ header: () => <Header />}}/>
        <Tab.Screen name={directMessageName} component={DirectMessageContainer} options= {{ header: () => <Header />}}/>
        <Tab.Screen name={forumName} component={ForumScreen} options= {{ header: () => <Header />}}/>
        <Tab.Screen name={publishListingName} component={PublishListingScreen} options= {{ header: () => <Header />}}/>
      </Tab.Navigator>
  );
}

export default MainContainer;
