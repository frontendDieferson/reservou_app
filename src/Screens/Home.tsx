import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../styles/HomeStyle'



const Home = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text>Página Home</Text>
            <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home