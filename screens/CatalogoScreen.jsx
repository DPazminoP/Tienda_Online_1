import { Alert, FlatList, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import catalogo from "../assets/data/catalogo.json"
import Tarjeta from '../components/Tarjeta'

const cerrarSesion = (navigation) => {
    Alert.alert(
            "Cerrar Sesión",
            "¿Quieres cerrar tu sesión actual?",
        [
            {text: "Cancelar" },
            { text: "Sí", onPress: () => navigation.navigate("Welcome") }
        ]
    );
};


export default function Catalogos( {informacion,navigation}) {
    return (
        <ImageBackground source={{
            uri: "https://i.pinimg.com/1200x/4f/79/eb/4f79ebb4d16a28911404d20e33a17e75.jpg"}} 
            style = {styles.container}>
            
            
            
            <View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => cerrarSesion(navigation)}>
                        <Text style={{ 
                                backgroundColor:'#FFFFFF', 
                                fontSize: 20, 
                                textAlign:'right', 
                                color: '#877523', 
                        }}>
                            Cerrar Sesión
                        </Text>
                    </TouchableOpacity>
                    
                        
                </View>

                <Text style={{ 
                    backgroundColor:'#FACC15', 
                    borderRadius:20,
                    borderColor: "#10B981", 
                    fontSize: 28, 
                    textAlign:'center', 
                    color: '#6a6345', 
                    fontWeight: 'bold' }}>Catalogo de libros</Text>
        
                <FlatList
                    data={catalogo}
                    renderItem={({item})=> 
                        <Tarjeta informacion={item} navigation={navigation} />
                    }
                    />
            </View>

            <TouchableOpacity 
                style={styles.fab}
                onPress={() => navigation.navigate("Carrito")}
            >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>Cerrar sesion</Text>
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