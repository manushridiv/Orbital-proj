import * as React from 'react';
import { View, Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function ListingHomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
            onPress={() => navigation.navigate('Listing Home')}
            style={{fontSize: 26, fontWeight: 'bold'}}>Listing Home Screen</Text>
      </View>
    );
  }