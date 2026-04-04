import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { verificarSesionLocal, obtenerUsuarioPorId } from '../conection/Database';

export default function WelcomeScreen({ navigation }) {
    const [usuarioNombre, setUsuarioNombre] = useState("");

    useEffect(() => {
        const cargarUsuario = async () => {
        const usuarioId = await verificarSesionLocal();
        if (usuarioId === 0) {
            setUsuarioNombre("Administrador");
        } else if (usuarioId) {
            const usuario = await obtenerUsuarioPorId(usuarioId);
            if (usuario) setUsuarioNombre(usuario.nombre);
        }
        };
        cargarUsuario();
    }, []);

    return (
        <ImageBackground 
        source={{ uri: "https://i.pinimg.com/1200x/4f/79/eb/4f79ebb4d16a28911404d20e33a17e75.jpg"}} 
        style={styles.container}
        >
        <View style={styles.saludos}>
            <Text style={styles.bienvenida}>
            {usuarioNombre 
                ? `Hola ${usuarioNombre}, bienvenido a la biblioteca MovilCat.` 
                : "Hola, bienvenido a la biblioteca MovilCat."}
            </Text>

            <Text style={styles.descripcion}>
            En nuestra tienda encontrarás todo tipo de títulos. Ven y explora un mundo en tus manos.
            </Text>

            <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
            >
            <Text style={styles.butonTxt}>Comenzar</Text>
            </TouchableOpacity>

            <Image 
            source={require("../assets/pet_5319063.png")} 
            style={styles.imagenInicio}
            />
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    saludos: {
        flex:2,
        flexDirection: "column",
        justifyContent : "center",
        alignItems:"center",
        backgroundColor:"#FACC15",
        width:250,
        height:300,
        borderRadius: 30,
        padding:10
    },
    bienvenida: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#1E3A8A",
        marginBottom: 10,
        textAlign: "center"
    },
    descripcion: {
        fontSize: 14,
        color: "#333",
        marginBottom: 15,
        textAlign: "center"
    },
    imagenInicio:{
        width:80,
        height:80,
        marginTop: 10
    },
    button: {
        backgroundColor: '#1E3A8A',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 10
    },
    butonTxt:{
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
