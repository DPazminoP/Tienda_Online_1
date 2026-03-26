import { Alert, Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { CarritoContext } from '../components/CarritoContext';

export default function Tarjeta(props ) {
    //console.log(props.informacion.strCategoryThumb);
    const [ocultar, setocultar] = useState(false);
    const  navigation = useNavigation () ;
    const { agregarAlCarrito } = useContext(CarritoContext);
    

    const handleComprar = () => {
    agregarAlCarrito({
        nombre: props.informacion.nombre,
        autor: props.informacion.autor,
        precio: props.informacion.precio,
    });
    navigation.navigate("Carrito");
    };



    return (
    <TouchableOpacity 
        style={styles.container}
        onPress={()=>setocultar(true)}>
        
        <Text>{props.informacion.nombre}</Text>
        <Image
            style={styles.img}
            source={{uri:props.informacion.imagen_url}} 
        />
        <Text>Autor: {props.informacion.autor}</Text>
        <Text>Año: {props.informacion.año}</Text>
        <Text>Editorial: {props.informacion.editorial}</Text>
        <Text>Precio: $ {props.informacion.precio}</Text>

        <Modal visible={ocultar} transparent={true} >
            <View style={styles.modal}>
                <View style={styles.modalContainer}>
                    <Text>{props.informacion.nombre}</Text>
                    <Image 
                        width={250}
                        height={250}
                        source={{uri: props.informacion.imagen_url}}
                    />
                    <Text>{props.informacion.descripcion}</Text>
                    <Button 
                        title='cerrar'
                        onPress={()=>setocultar(false)}
                    />
                    
                    <Button 
                    title='comprar'
                    onPress={ handleComprar}
                    >

                    </Button>
                </View>
            </View>
        </Modal>

    </TouchableOpacity>
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