import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import styles from '../styles/HomeStyle'
import Explore from '../components/Explore';



const Home = () => {

    const navigation = useNavigation()

    return (
        <ScrollView>

        <View style={styles.container}>
           <View style={styles.content}>
            <Image source={require('../assets/images/menu.png')} />
            <Image source={require('../assets/images/reservouLogo2.png')} />
            <Image source={require('../assets/images/Filtro.png')} />
           </View>
            <View>
                <Text style={styles.location}>Localização</Text>
            </View>
                <Image source={require('../assets/images/googleMaps.png')} />
                <TouchableOpacity style={styles.locationBtn}>
                    <Text style={styles.locationBtnText}>Ativar o GPS</Text>
                </TouchableOpacity>
                <View style={{ width:'100%', margin: 22, borderWidth: 0.2, backgroundColor: '#D9D9D9'}}></View>
                <View>
                    <Text style={styles.contentsubTitle}>Serviços e Reservas Próximos</Text>
                </View>
                <View style={styles.services}>
                <View style={{padding: 10, borderRadius: 8, backgroundColor: '#E1B12C',}}>
                    <Image source={require('../assets/images/pratopronto.png')} />
                    <Text style={{fontSize: 16, color: '#222D5B', fontWeight: 'bold'}}>Prato Pronto</Text>
                    <Text style={{color: '#FFF'}}>Ver mais</Text>
                </View>
                <View style={{backgroundColor: '#F8F8F8'}}>
                    <Image source={require('../assets/images/salao.png')} />
                    <Text style={{fontSize: 16, color: '#222D5B', fontWeight: 'bold'}}>Prato Pronto</Text>
                    <Text style={{color: '#E1B12C'}}>Ver mais</Text>
                </View>
                </View>
                <View style={{ width:'100%', margin: 22, borderWidth: 0.2, backgroundColor: '#D9D9D9'}}></View>
         
                
        <Text style={styles.explore}>Explore</Text>
        </View>
        <View>
                <Explore />
        </View>
        </ScrollView>
    )
}

export default Home