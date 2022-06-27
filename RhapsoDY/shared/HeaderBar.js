import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-ionicons';


export default function Header() {
    return (
      <View style={styles.header}>

        <View style={styles.leftContainer}>
          <Text style={[styles.headerText, {textAlign:'left'}]}>RhapsoDY</Text>
        </View>

        <View style={styles.rightContainer}>
          <TouchableOpacity style={styles.searchButton}
          onPress={() => { } }>
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileButton}
          onPress={() => { } }>
            <Text style={styles.buttonText}>Profile</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
}

const styles = StyleSheet.create({
  header: {
    height:60,
    width: (Dimensions.get('screen').width),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'darkolivegreen',

  },

  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'darkolivegreen'
  },

  headerText: {
    marginLeft: 20,
    fontSize: 15,
    fontWeight: '700',
    //fontFamily: 'sans-serif',
    letterSpacing: 1,
    color: 'white',
  },

  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  searchButton: {
    width: '8%',
    height: 60,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 50,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 2  ,
    borderColor: 'black',

  },

  searchText: {
    //backgroundColor: 'darkolivegreen',
    color: 'lightgreen',
    fontSize: 15,
    fontWeight: '700',
    //fontFamily: 'sans-serif'
  },

  profileButton: {
    width: '8%',
    marginRight: 30,
    height: 60,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 2,
    borderColor: 'black',

  },

  buttonText: {
    //backgroundColor: 'darkolivegreen',
    color: 'lightgreen',
    fontSize: 15,
    fontWeight: '700',
    //fontFamily: 'sans-serif'
},
})

