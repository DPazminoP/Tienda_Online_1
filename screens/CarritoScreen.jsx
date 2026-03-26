import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useContext } from "react";
import { CarritoContext } from "../components/CarritoContext";
import Tarjeta from '../components/Tarjeta';
import TarjetaCarrito from '../components/TarjetaCarrito';


export default function Carrito(informacion, navigation) {
    const { carrito } = useContext(CarritoContext);
    const [precio, setprecio] = useState(0);
    const [iva, setiva] = useState(0);
    const total = carrito.reduce((acc, libro) => acc + libro.precio, 0);




    return (
        <ImageBackground source={{
            uri: "https://i.pinimg.com/1200x/4f/79/eb/4f79ebb4d16a28911404d20e33a17e75.jpg"}} 
            style = {styles.container}>
            
        <ScrollView>
            <View style = {styles.container1}>
                <Text style = {styles.total}>Carrito de compras 🛒🛒🛒</Text>
            </View>
            {carrito.map((libro, index) => (
            <View key={index} >
                <TarjetaCarrito informacion={libro} navigation={navigation} />
            
        </View>
        ))}
        <View style={styles.container1}>
            <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
        </View>
        

    </ScrollView>

            
                    
        
        
        
                </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        
    },
    container1: {
        backgroundColor:"#FACC15", 
        width:250,
        height: 100,
        alignItems:"center",
        justifyContent: "center",
        borderRadius:10,
        borderColor: "#10B981",
        borderWidth: 3,
    },

    input: {
    height: 40,
    backgroundColor:"#E5E7EB",
    borderColor: "#1E3A8A",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 10,
    width: 200},
    button: {
    backgroundColor: '#1E3A8A',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20
},
butonTxt:{
        color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
},

total: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E3A8A",
    textAlign: "center" 
    }


})