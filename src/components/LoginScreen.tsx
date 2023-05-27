import React, { useState } from "react";

import { View, Text, TextInput, Alert, Image, TouchableOpacity } from 'react-native'
import firebaseConfig from 'firebase/compat'
import 'firebase/compat/auth'
import styles from "../styles/LoginStyle";

import reservouLogo from '../assets/images/reservouLogo.png';
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const navigation = useNavigation()

    const handleLogin = () => {
        firebaseConfig
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            //Login success
            Alert.alert('Login realizado com sucesso')
            navigation.navigate("Home")
        }).catch((error) => {
            //Error login
            Alert.alert("Erro!", error.message)
        })
        
    }
    const handleButton = () => {
        navigation.navigate('Register')
    }
    

    return (
        <View style={styles.container}>
            <Image style={styles.containerLogo} source={reservouLogo} />
           
       

          <Text style={styles.textLabel}>E-mail</Text>
           <TextInput 
            style={styles.textInput} 
            placeholder="e-mail"
            value={email}
            onChangeText={(text) => setEmail(text)}
            />
            <Text style={styles.textLabel}>Senha</Text>
            <TextInput 
            style={styles.textInput} 
            placeholder="senha"
            value={password}
            onChangeText={(text) => setPassword(text)}
            />
            <View style={styles.content}>
            <Text>Esqueceu sua senha?  
                <TouchableOpacity><Text>Clique aqui</Text>
                </TouchableOpacity></Text>
           
           
         
           <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.buttonCreate} onPress={handleButton}>
            <Text style={styles.buttonTextCreate}>Criar Conta</Text>
           </TouchableOpacity>
           
            </View>
        </View>
    )
}

export default LoginScreen