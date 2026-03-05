import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ContactoScreen() {
    return (
        <ImageBackground source={{uri: "https://i.pinimg.com/1200x/4f/79/eb/4f79ebb4d16a28911404d20e33a17e75.jpg"}} style = {styles.container}>
            <TouchableOpacity style = {styles.buttonCon}>
                <Image source={require("../assets/id-card_2002579.png")} style= {styles.imagenCon}></Image>
                <Text style = {styles.butonTxt}>Esteban Rodriguez github: esteban-Rz</Text>

            </TouchableOpacity>

            <TouchableOpacity style = {styles.buttonCon1}>
                <Image source={require("../assets/id-card_2002579.png")} style= {styles.imagenCon}></Image>
                <Text style = {styles.butonTxt}> Dennis Pazmiño  github: DPazminoP</Text>

            </TouchableOpacity>



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
    buttonCon:{
    backgroundColor: "#FACC15",
    width:300,
    height: 150 ,
    borderRadius: 20,
    alignItems: 'center',
    },
    buttonCon1:{
    backgroundColor: "#E5E7EB",
    width:300,
    height: 150 ,
    borderRadius: 20,
    alignItems: 'center',
    
    },
    imagenCon:{
         width:80,
        height:80,
    },
     butonTxt:{
        color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
},
 butonTxt:{
        color: '#101010',
    fontSize: 16,
    fontWeight: 'bold',
}
})