import { FlatList, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import catalogo from "../assets/data/catalogo.json"
import Tarjeta from '../components/Tarjeta'

export default function Catalogos( {informacion,navigation}) {
    return (
        <ImageBackground source={{
            uri: "https://i.pinimg.com/1200x/4f/79/eb/4f79ebb4d16a28911404d20e33a17e75.jpg"}} 
            style = {styles.container}>
            
            
            
            <View>
                <Text style={{ fontSize: 28, color: '#6a6345', fontWeight: 'bold' }}>Catalogo de libros</Text>
        
                <FlatList
                    data={catalogo}
                    renderItem={({item})=> 
                        <Tarjeta informacion={item} navigation={navigation} />
                    }
                    />
            </View>
    


                    
        
        
        
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
        width:400,
        height: 450,
        alignItems:"center",
        borderRadius:10,
        borderColor: "#10B981",
        borderWidth: 3
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

})