import { Alert, FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import catalogo from "../assets/data/catalogo.json";
import Tarjeta from '../components/Tarjeta';
import { cerrarSesionLocal, verificarSesionLocal, obtenerUsuarioPorId } from '../conection/Database';

export default function Catalogos({ navigation }) {
    const [usuarioNombre, setUsuarioNombre] = useState("");

    useEffect(() => {
        const cargarUsuario = async () => {
        const usuarioId = await verificarSesionLocal();
        if (usuarioId === 0) {
            // caso especial admin
            setUsuarioNombre("Administrador");
        } else if (usuarioId) {
            const usuario = await obtenerUsuarioPorId(usuarioId);
            if (usuario) setUsuarioNombre(usuario.nombre);
        }
        };
        cargarUsuario();
    }, []);

    const cerrarSesion = () => {
        Alert.alert(
        "Cerrar Sesión",
        "¿Quieres cerrar tu sesión actual?",
        [
            { text: "Cancelar", style: "cancel" },
            { 
            text: "Sí", 
            onPress: async () => {
                await cerrarSesionLocal(); // borra la sesión en SQLite
                navigation.navigate("Welcome"); // vuelve al inicio
            } 
            }
        ]
        );
    };

    return (
        <ImageBackground 
        source={{ uri: "https://i.pinimg.com/1200x/4f/79/eb/4f79ebb4d16a28911404d20e33a17e75.jpg"}} 
        style={styles.container}
        >
        <View style={styles.row}>
            <Text style={styles.userText}>👤 {usuarioNombre}</Text>
            <TouchableOpacity onPress={cerrarSesion}>
            <Text style={styles.logoutText}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </View>

        <Text style={styles.title}>Catálogo de libros</Text>
        
        <FlatList
            data={catalogo}
            renderItem={({item}) => 
            <Tarjeta informacion={item} navigation={navigation} />
            }
        />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex:1, 
        padding: 20 
    },

    row: { 
        flexDirection: "row", 
        justifyContent: "space-between", 
        marginBottom: 10 
    },

    userText: { 
        fontSize: 18, 
        color: "#fff", 
        fontWeight: "bold" 
    },

    logoutText: { 
        backgroundColor:'#FFFFFF', 
        fontSize: 16, 
        color: '#877523', 
        padding: 5, 
        borderRadius: 5 
    },

    title: { 
        backgroundColor:'#FACC15', 
        borderRadius:20,
        borderColor: "#10B981", 
        fontSize: 28, 
        textAlign:'center', 
        color: '#6a6345', 
        fontWeight: 'bold', 
        marginBottom: 10 
    }
});
