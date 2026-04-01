import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen({navigation}) {
    return (
        <ImageBackground source={{uri: "https://i.pinimg.com/1200x/4f/79/eb/4f79ebb4d16a28911404d20e33a17e75.jpg"}} style={styles.container}>

        <View style={styles.saludos}>
            

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.butonTxt}> Comenzar</Text>
                    
                </TouchableOpacity>
                    <Image 
                        source={require("../assets/pet_5319063.png")} 
                        style= {styles.imagenInicio}>
                        

                        </Image>
                
                <Text> Hola, Bienvenido a la biblioteca MovilCat. En nuestra tienda encontrarás todo tipo de títulos. Ven y explora un mundo en tus manos.
                </Text>
        
        </View>
            
        
        

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"



    },
    saludos :{
        flex:2,
        flexDirection: "column-reverse",
        justifyContent : "center",
        alignItems:"center",
        backgroundColor:"#FACC15",
        width:150,
        height:250,
        borderRadius: 30,
        padding:2


    },
    imagenInicio:{
        width:80,
        height:80,
    
        
        

    },
    button: {
    backgroundColor: '#1E3A8A',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
},
    butonTxt:{
        color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',

    },


})