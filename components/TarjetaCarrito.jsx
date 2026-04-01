import { Alert, Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { CarritoContext } from '../components/CarritoContext';

export default function TarjetaCarrito(props ) {
    
    const [ocultar, setocultar] = useState(false);
    const  navigation = useNavigation () ;
    const { agregarAlCarrito } = useContext(CarritoContext);
    const { eliminarDelCarrito } = useContext(CarritoContext);


    const handleEliminar = () => {
        eliminarDelCarrito(props.informacion.nombre);
    };

    const handleComprar = () => {
    agregarAlCarrito({
        
        nombre: props.informacion.nombre,
        autor: props.informacion.autor,
        precio: props.informacion.precio,
    });
    navigation.navigate("Carrito");
    };

    return (
        <View style={styles.container}>
            <Text>{props.informacion.nombre}</Text>
            <Text>Autor: {props.informacion.autor}</Text>
            <View style={styles.row}>
                <Text>Precio: $ {props.informacion.precio}</Text>
                <TouchableOpacity style={styles.botonEliminar} onPress={handleEliminar}>
                    <Text style={styles.botonTxt}>🗑️</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer:{

        
        width:"90%",
        backgroundColor:"#10B981",
        padding:40,
        borderRadius:20,
        gap: 15
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 5
        },

    botonEliminar: {
        backgroundColor: "#DC2626", // rojo
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5
        },




    modal:{
        backgroundColor:"#54c2ce67",
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    container:{
        backgroundColor: "#FACC15",
        margin:5,
        borderRadius: 10,
        borderColor: "#10B981",
        borderWidth: 3,
        padding: 15,
        
        justifyContent: 'center'
    },
    
    img:{
        width:150,
        height:150,
        resizeMode:'contain',
        alignSelf: 'center',
        marginVertical: '20'
    }

})