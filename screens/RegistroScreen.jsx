import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { initDB, registrarUsuarioLocal, verificarUsuarioOCorreo } from '../conection/Database';

export default function RegistroScreen({ navigation }) {
    const [nombre, setNombre] = useState("");
    const [usuario, setUsuario] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [telefono, setTelefono] = useState("");

    useEffect(() => {
        const startDB = async () => {
        await initDB(); // inicializa la base local al cargar la pantalla
        };
        startDB();
    }, []);
        
    const handleRegistro = async () => {
        // Validación de campos vacíos
        if (!nombre || !usuario || !correo || !contrasena || !telefono) {
        Alert.alert("Por favor completa todos los campos");
        return;
        }

        // Verificar duplicados
        const existe = await verificarUsuarioOCorreo(usuario, correo);
        if (existe) {
        Alert.alert("El nombre de usuario o correo ya está registrado.");
        } else {
        await registrarUsuarioLocal(nombre, usuario, correo, contrasena, telefono);
        Alert.alert("Usuario guardado en el dispositivo");
        navigation.navigate("Login");
        }
    };

    return (
        <ImageBackground 
        source={{ uri: "https://i.pinimg.com/1200x/4f/79/eb/4f79ebb4d16a28911404d20e33a17e75.jpg"}} 
        style={styles.container}
        >
        <View style={styles.container1}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput   
            placeholder='Nombre completo' 
            style={styles.input}
            value={nombre}
            onChangeText={setNombre}    
            />

            <Text style={styles.label}>Usuario</Text>
            <TextInput   
            placeholder='Nombre de usuario' 
            style={styles.input}
            value={usuario}
            onChangeText={setUsuario}    
            />
            
            <Text style={styles.label}>Correo</Text>
            <TextInput  
            placeholder='Correo'
            style={styles.input}
            value={correo}
            onChangeText={setCorreo}
            keyboardType="email-address"
            />

            <Text style={styles.label}>Contraseña</Text>
            <TextInput 
            placeholder='Contraseña' 
            style={styles.input}
            secureTextEntry
            value={contrasena}
            onChangeText={setContrasena}
            />
            
            <Text style={styles.label}>Teléfono</Text>
            <TextInput 
            placeholder='Número de teléfono' 
            style={styles.input}
            value={telefono}
            onChangeText={setTelefono}
            keyboardType="phone-pad"
            />

            <TouchableOpacity style={styles.button} onPress={handleRegistro}>
            <Text style={styles.butonTxt}>Registrarse</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.box}>
            <Text style={{fontSize:15, textAlign:'center'}}>¿Ya estás registrado?</Text>
            <Text>_______________________________________________</Text>
            <Button 
            title='Iniciar Sesión'
            color={'green'}
            onPress={() => navigation.navigate('Login')}
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
        width:400,
        height: 450,
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
    butonTxt:{
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
    box:{
        backgroundColor: "#FACC15", 
        width: 350, 
        height: 170,
        borderColor: "#10B981",  
        borderWidth: 3,           
        borderRadius: 10,
        justifyContent:"center",
        alignItems:"center",
        padding: 10
    }
});