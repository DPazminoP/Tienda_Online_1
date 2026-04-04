import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


export default function InfoPagoScreens() {
  return (
    <ImageBackground source={{
            uri: "https://i.pinimg.com/1200x/4f/79/eb/4f79ebb4d16a28911404d20e33a17e75.jpg"}}
             style = {styles.container}>

        <View>
          <Text style= {styles.titulo}>Metodos de pago </Text>
        </View>
        <TouchableOpacity style = {styles.container1}> 
          <Text style= {styles.texto}>transferencia </Text>
           <Image 
          source={require("../assets/transaction_14172008.png")} 
          style={styles.imagenCon} 
        />

        </TouchableOpacity >
        

        <TouchableOpacity style = {styles.container1}> 
          <Text style= {styles.texto}>efectivo </Text>
           <Image 
          source={require("../assets/money_631149.png")} 
          style={styles.imagenCon} 
        />

        </TouchableOpacity >
        

        <TouchableOpacity style = {styles.container1}> 
          <Text style= {styles.texto}>tarjeta  </Text>

           <Image 
          source={require("../assets/credit-cart_11232989.png")} 
          style={styles.imagenCon} 
        />

        </TouchableOpacity >
     


      
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
        height: 150,
        alignItems:"center",
        justifyContent: "center",
        borderRadius:20,
        borderColor: "#10B981",
        borderWidth: 2,
    },
    imagenCon:{
        width:80,
        height:80,
    },
    texto: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#1E3A8A",
      textAlign: "center"
    },
    titulo: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#f0f1f3",
      textAlign: "center"
    }

})