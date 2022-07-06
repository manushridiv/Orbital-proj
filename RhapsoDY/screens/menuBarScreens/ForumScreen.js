import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Comment from './Comment';
//refer to Comment.js file for the latest changes
export default function App() {
  const [comment, setComment] = useState();
  const [commentItems, setCommentItems] = useState([]);

  const handleAddComment = () => {
    Keyboard.dismiss();
    setCommentItems([...commentItems, comment])
    setComment(null);
  }

  const completeComment = (index) => {
    let itemsCopy = [...commentItems];
    itemsCopy.splice(index, 1);
    setCommentItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when user wants to input more comments*/}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's comments */}
      <View style={styles.commentsWrapper}>
        <Text style={styles.sectionTitle}>Discussion Panel</Text>
        <View style={styles.items}>
          {/* Comments input will be displayed here */}
          {
            commentItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeComment(index)}>
                  <Comment text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      {/* Write a comment */}
      {/* Ensure keyboard does not cover anything */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.writeCommentWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a comment'} value={comment} onChangeText={text => setComment(text)} />
        <TouchableOpacity onPress={() => handleAddComment()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8fbc8f',
  },
  commentsWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeCommentWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});


    