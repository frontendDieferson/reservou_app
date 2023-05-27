import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React, {useEffect} from 'react';
import firebase from 'firebase/compat';
import firebaseConfig from './firebaseConfig'
import  { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import AppNavigator from './src/navigation/AppNavigator';

firebase.initializeApp(firebaseConfig)

const App = () => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        console.log("Usuário autenticado", user)
      } else {
        console.log("Usuário não autenticado")
      }
    })
  }, [])
  return <AppNavigator />
}

export default App