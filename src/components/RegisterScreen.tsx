import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from 'react-native'

import firebaseConfig from 'firebase/compat'
import 'firebase/compat/auth'

const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleRegister = () => {
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
    };
  
    return (
      <View>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Registrar" onPress={handleRegister} />
      </View>
    );
  };

export default RegisterScreen