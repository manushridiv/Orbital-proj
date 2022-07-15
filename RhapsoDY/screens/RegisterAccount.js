import { useNavigation } from '@react-navigation/core'
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { app, auth, db, } from '../firebase'
import { addUserData } from './AddUserDatabase'


export default function RegisterAccount({ navigation }) {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /*
    Sign user up and log in if they click on register an account
    */
    const handleSignup = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password).then(async ({user}) => {
                await sendEmailVerification(auth.currentUser);
            })
            console.log(auth.currentUser.emailVerified);
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    //console.log('Registered in with', user)
                    navigation.navigate("Login")
                    const userId = user.uid;
                    console.log('Registered in with', userId);
                    addUserData(userId, email, displayName,"")
                }
            })
            
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <KeyboardAvoidingView
        style={[styles.container, {backgroundColor: 'mediumaquamarine', flex:1}]}
        behavior="padding"
        >
        <View style = {styles.logoContainer}> 
            <Text style = {styles.logoText}>
                RhapsoDY
            </Text>
        </View>
    
        <View style={styles.inputContainer}>
            <TextInput
            placeholder="Display Name"
            value={displayName}
            onChangeText={text => setDisplayName(text)}
            style={styles.input}
            />
            <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
            />
            <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry //hide the input typed out
            />
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={handleSignup}
                style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Register Account</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {[styles.returnButtonOutline, styles.returnButton]}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={styles.returnButtonText}>Return</Text>    
            </TouchableOpacity>
        </View>
    
        </KeyboardAvoidingView>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    inputContainer: {
        width: '80%'
    },

    input: {
        backgroundColor: 'mistyrose',
        paddingHorizontal: 15,
        paddingVertical: 20,
        fontSize: 18,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        // borderRadius: '15',
        marginTop: 5,
        // overflow: 'hidden'
        borderWidth: 1,
        borderColor: 'black',
    },

    buttonContainer: {
        width: '60%',
        //justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },

    button: {
        backgroundColor: '#0782F9',
        width: '50%',
        padding: 15,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: 5,
        alignItems: 'center'
    },

    buttonOutline: {
        backgroundColor: '#0782F9',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderColor: '#0782F9',
        borderWidth: 2
    },

    buttonOutlineText: {
        fontSize: 15,
        fontWeight: '700',
        color: 'white'
    },

    returnButton: {
        backgroundColor: 'white',
        width: '50%',
        padding: 15,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: 5,
        alignItems: 'center'
    },

    returnButtonOutline: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderColor: '#0782F9',
        borderWidth: 2
    },

    returnButtonText: {
        fontSize: 15,
        fontWeight: '700',
        color: '#0782F9'
    }


})