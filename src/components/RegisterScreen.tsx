import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native'

import firebaseConfig from 'firebase/compat'
import 'firebase/compat/auth'
import firebase from "firebase/compat";
import { useNavigation } from "@react-navigation/native";

import styles from "../styles/RegisterStyle";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const navigation = useNavigation()


  const handleRegister = () => {
    // Verificar se as senhas coincidem
    if (password !== confirmPassword) {
      Alert.alert("Erro!", "As senhas não coincidem.");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Registro bem-sucedido
        const user = userCredential.user;
        // Atualizar informações adicionais do usuário (como nome e telefone)
        user
          .updateProfile({
            displayName: name,
            phoneNumber: phone,
          })
          .then(() => {
            Alert.alert("Sucesso!", "Registro realizado com sucesso.");
            navigation.navigate("Term")
          })
          .catch((error) => {
            Alert.alert("Erro!", error.message);
          });
      })
      .catch((error) => {
        Alert.alert("Erro!", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.containerLogo} source={require('../assets/images/reservouLogo.png')} />
      <View>
      <Text style={styles.containerLabel}>Nome</Text>
      <TextInput
        style={styles.containerTextInput}
        placeholder="nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />
       <Text style={styles.containerLabel}>E-mail</Text>
      <TextInput
       style={styles.containerTextInput}
        placeholder="e-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
       <Text style={styles.containerLabel}>Telefone</Text>
      <TextInput
       style={styles.containerTextInput}
        placeholder="telefone"
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />
       <Text style={styles.containerLabel}>Criar Senha</Text>
      <TextInput
       style={styles.containerTextInput}
        placeholder="senha"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
       <Text style={styles.containerLabel}>Confirmar senha</Text>
      <TextInput
       style={styles.containerTextInput}
        placeholder="senha"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <TouchableOpacity style={styles.buttonLogin} onPress={handleRegister}>
        <Text>Criar Conta</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;