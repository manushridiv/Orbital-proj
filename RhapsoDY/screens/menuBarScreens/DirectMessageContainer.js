import * as React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DMContacts from './DMContacts';
import DMConversations from './DMConversations';
import DirectMessageHome from './DirectMessageHome';

const DMStack = createNativeStackNavigator();

export default function DirectMessageContainer({ navigation }) {
  return (
    <DMStack.Navigator>
      <DMStack.Screen options= {{ headerShown: false}} name="DirectMessageHome" component={DirectMessageHome} />
      <DMStack.Screen options= {{ headerShown: false}} name="DMContacts" component={DMContacts} />
      <DMStack.Screen options = {({ route }) => ({ title: route.params.DisplayName })} name="DMConversations" component={DMConversations} />
    </DMStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8fbc8f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});