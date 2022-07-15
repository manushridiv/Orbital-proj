import * as React from 'react';
import { TextInput, View, Text, TouchableOpacity, FlatList} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SendMessage, ReceiveMessage } from "./MessageFunction";
import { auth } from '../../firebase';
import { useState } from 'react';
import { RetrieveDatabaseMessage } from './RetrieveDatabaseMessages';

const Stack = createNativeStackNavigator();
const MessageData = RetrieveDatabaseMessage();

export default function DMConversations({ route, navigation }) {
  const [text, setText] = useState('');
  const { DisplayName, receiver } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        inverted
        style={{ marginBottom: 60 }}
        data={MessageData}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 5, maxWidth: Dimensions.get('window').width / 2 + 10, alignSelf: auth.currentUser.uid === item.sendBy ? 'flex-end' : 'flex-start' }}>
            <View style={{ borderRadius: 20, backgroundColor: auth.currentUser.currentUid === item.sendBy ? '#fff' : '#ccc' }}>
              <Text style= {{ padding: 10, fontSize: 16, fontWeight: 'bold'}}>
                {item.msg}
              </Text>
            </View>
          </View>
        )}
      />

      <View style={{ bottom: 0, height: 50, width: '100%', position: 'absolute', flexDirection: 'row' }}>
        <TouchableOpacity 
        style={{ width: '10%', justifyContent: 'center', alignItems: 'center', marginRight: 5 }} 
        onPress={() => {/* camera fn */}}>
            <Ionicons name="camera" size={30} color="#fff" />
        </TouchableOpacity>
        <View style={{ width: '70%', justifyContent: 'center' }}>
          <TextInput 
          placeholder='Enter Message' 
          placeholderTextColor="#000" 
          onChangeText={newText => setText(newText)} 
          defaultValue={text}
          style={{ height: 40, borderRadius: 10, backgroundColor: '#ccc'}}/>
        </View>
        <TouchableOpacity 
        style={{ width: '10%', justifyContent: 'center', alignItems: 'center', marginLeft: 5 }} 
        onPress={() => { SendMessage(auth.currentUser.uid, receiver, text).then(setText('')), ReceiveMessage(auth.currentUser.uid, receiver, text).then(setText(''))}}>
          <Ionicons name="send" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
  }