import React, { useState } from "react";

import { View, Text, TextInput, Button, Alert } from 'react-native'

import firebaseConfig from 'firebase/compat'
import 'firebase/compat/auth'

const LoginScreen = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleLogin = () => {
        firebaseConfig
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            //Login success
            Alert.alert('Login realizado com sucesso')
        }).catch((error) => {
            //Error login
            Alert.alert("Erro!", error.message)
        })
        
    }
    const handleCreateAccount = () => {
        firebaseConfig
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            // Registro bem-sucedido
            Alert.alert("Sucesso!", "Registro realizado com sucesso.");
          })
          .catch((error) => {
            // Erro no registro
            Alert.alert("Erro!", error.message);
          });
    }
   


    return (
        <View>
           <TextInput 
            placeholder="e-mail"
            value={email}
            onChangeText={(text) => setEmail(text)}
           />
            <TextInput 
            placeholder="senha"
            value={password}
            onChangeText={(text) => setPassword(text)}
           />
           <Button title="Login" onPress={handleLogin} />
           <Button title="Criar Conta" onPress={handleCreateAccount} />
        </View>
    )
}

export default LoginScreen