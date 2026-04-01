import { Button, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function LoginScreen({navigation}) {
    return (
        <ImageBackground source={{
            uri: "https://i.pinimg.com/1200x/4f/79/eb/4f79ebb4d16a28911404d20e33a17e75.jpg"}} 
            style = {styles.container}>
            <View style = {styles.container1}>
                <Text style = {styles.butonTxt}>Nombre</Text>
                    <TextInput   placeholder='Nombre completo' style= {styles.input}/>

                <Text style = {styles.butonTxt}>Usuario</Text>
                    <TextInput   placeholder='Nombre de usuario' style= {styles.input}/>
                
                <Text style = {styles.butonTxt}>Correo</Text>
                    <TextInput   placeholder='Correo' style= {styles.input}/>

                <Text style = {styles.butonTxt}>contraseña</Text>
                    <TextInput   placeholder='Contraseña' style= {styles.input}/>
                
                <Text style = {styles.butonTxt}>Teléfono</Text>
                    <TextInput   placeholder='Número de teléfono' style= {styles.input}/>

                <TouchableOpacity style= {styles.button}>
                    <Text style = {styles.butonTxt}> Registrarse </Text>
                </TouchableOpacity>

            </View>

            <View style={{
                backgroundColor: "#FACC15", 
                width: 350, 
                height: 170,
                borderColor: "#10B981",  
                borderWidth: 3,           
                borderRadius: 10 
            }}>
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