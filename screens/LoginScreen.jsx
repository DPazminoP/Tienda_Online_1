import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function LoginScreen({navigation}) {

    const [usuario, setusuario] = useState()
    const [contrasenia, setcontrasenia] = useState()

    let nick="admin"
    let pass="12345"

    useEffect(() => {
        if(usuario==nick && contrasenia==pass){
            navigation.navigate('Tabs')
        }
    }, [usuario, contrasenia])


    return (
        <ImageBackground source={{uri: "https://i.pinimg.com/1200x/4f/79/eb/4f79ebb4d16a28911404d20e33a17e75.jpg"}} style = {styles.container}>
            <View style = {styles.container1}>
                <Text style = {styles.butonTxt}>Usuario</Text>
                    <TextInput   
                        placeholder='Usuario' 
                        style= {styles.input}
                        onChangeText={setusuario}
                    />

                <Text style = {styles.butonTxt}>contraseña</Text>
                    <TextInput   
                        placeholder='Contraseña' 
                        style= {styles.input}
                        onChangeText={setcontrasenia}
                        value={contrasenia}
                        keyboardType='numeric'
                    />

                <TouchableOpacity style= {styles.button}>
                    <Text style = {styles.butonTxt}> Ingresar  </Text>
                    
                </TouchableOpacity>

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
        width:250,
        height: 250,
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