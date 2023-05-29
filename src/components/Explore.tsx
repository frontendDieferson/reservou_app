import React from "react"
import { Image, View, Text, FlatList } from "react-native"



const Explore = () => {
    const data = [
        { id: "1", title: "Pizzaria", image: require("../assets/images/pizza.png") },
        { id: "2", title: "Restaurantes", image: require("../assets/images/restaurante.png") },
        { id: "3", title: "Esportes", image: require("../assets/images/esportes.png") },
         ]


const renderItem = ({ item }:any) => {
    return (
      <View style={{ margin: 10, }}>
        <Image source={item.image} style={{  width: 108, height: 68 }} />
        <Text style={{ fontSize: 14, fontWeight: '500', color: '#222D5B', textAlign: 'center', marginTop: 5}}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
};

export default Explore