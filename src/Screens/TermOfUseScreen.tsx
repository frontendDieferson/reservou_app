import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from "@react-navigation/native";

const TermOfUseScreen = () => {
  const navigation = useNavigation()
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleContinue = () => {
    if (isChecked) {
    navigation.navigate('Home')
    } else {
      // Usuário não marcou a caixa, exiba um aviso
      // ...
    }
  };

  return (
    <View>
      <Text>Contrato de Usuário do Reservou</Text>
      <Text>
            Ao selecionar a caixa de permissão abaixo,
            você concorda com os Termos de Serviço e
            com a Política de Privacidade, incluindo o
            processamento de seus dados pessoais pela
            Reservou. Por favor , observe
            que você pode revogar sua permissão
            quando quiser, enviando um e-mail para reservou@gmail.com.

            Por favor , tenha em mente que se você
            revogar a permissão, você não poderá usar a
            funcionalidade principal do aplicativo.</Text>
      <CheckBox
        value={isChecked}
        onValueChange={handleCheckboxChange}
        
        title="Por meio deste , concordo com a
        Política de Privacidade e com os
        Termos de Serviço."
      />
      <Button title="Continuar" onPress={handleContinue} />
    </View>
  );
};

export default TermOfUseScreen;
