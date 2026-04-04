import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { iniciarSesionLocal, initDB, obtenerUsuarios } from '../conection/Database';

export default function LoginScreen({ navigation }) {
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");

    useEffect(() => {
        const startDB = async () => {
        await initDB(); // inicializa la base local al cargar la pantalla
        };
        startDB();
    }, []);

    const handleLogin = async () => {
        if (!usuario || !contrasena) {
            Alert.alert("Por favor ingresa usuario y contraseña");
            return;
        }

        // Caso especial: admin
        if (usuario === "admin" && contrasena === "12345") {
            await iniciarSesionLocal(0); // guardamos sesión con id 0 para admin
            Alert.alert("Bienvenido administrador");
            navigation.navigate("Bottom");
            return;
        }

        // Buscar usuario en SQLite
        const usuarios = await obtenerUsuarios();
        const encontrado = usuarios.find(
            u => u.usuario === usuario && u.contrasena === contrasena
        );

        if (encontrado) {
        await iniciarSesionLocal(encontrado.id); // guardamos sesión con id real
            Alert.alert("Inicio de sesión exitoso");
            navigation.navigate("Bottom");
            } else {
            Alert.alert("Usuario o contraseña incorrectos");
            }
        };

    return (
        <ImageBackground 
        source={{ uri: "https://i.pinimg.com/1200x/4f/79/eb/4f79ebb4d16a28911404d20e33a17e75.jpg"}} 
        style={styles.container}
        >
        <View style={styles.container1}>
            <Text style={styles.label}>Usuario</Text>
            <TextInput   
            placeholder='Nombre de usuario' 
            style={styles.input}
            value={usuario}
            onChangeText={setUsuario}
            />

            <Text style={styles.label}>Contraseña</Text>
            <TextInput   
            placeholder='Contraseña' 
            style={styles.input}
            secureTextEntry
            value={contrasena}
            onChangeText={setContrasena}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonTxt}>Iniciar Sesión</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.extraBox}>
            <Text style={{fontSize:15, textAlign:'center'}}>¿Aún no estás registrado?</Text>
            <Text>_______________________________________________</Text>
            <Button 
            title='Registrarse'
            color={'green'}
            onPress={() => navigation.navigate('Registro')}
            />
            <Text>_______________________________________________</Text>
            <Text style={{fontSize:15, textAlign:'center'}}>Contáctanos:</Text>
            <Button 
            title='Contactos'
            color={'green'}
            onPress={() => navigation.navigate('Contactos')}
            />
        </View>
        </ImageBackground>
    );
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
        borderWidth: 3,
        padding: 10
    },
    input: {
        height: 40,
        backgroundColor:"#E5E7EB",
        borderColor: "#1E3A8A",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginTop: 10,
        width: 200
    },
    button: {
        backgroundColor: '#1E3A8A',
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20
    },
    buttonTxt:{
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    label:{
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10
    },
    extraBox:{
        backgroundColor: "#FACC15", 
        width: 350, 
        height: 170,
        borderColor: "#10B981",  
        borderWidth: 3,           
        borderRadius: 10,
        padding: 10,
        justifyContent: "space-evenly"
    }
});