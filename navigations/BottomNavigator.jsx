import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Ventanas:
import WelcomeScreen from "../screens/WelcomeScreen";
import RegistroScreen from "../screens/RegistroScreen";
import LoginScreen from "../screens/LoginScreen";
import ContactoScreen from "../screens/ContactoScreen";
import CatalogoScreen from "../screens/CatalogoScreen";
import CarritoScreen from "../screens/CarritoScreen";
import { NavigationContainer } from "@react-navigation/native";

//Iconos
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { CarritoProvider } from "../components/CarritoContext";

    const Tab=createBottomTabNavigator()
    
    function MyTabs(){
        return(
            <Tab.Navigator initialRouteName="Welcome">
                <Tab.Screen 
                    name="Welcome" 
                    component={WelcomeScreen} 
                    options={{tabBarIcon:()=><Entypo name="home" size={35} color="#1a5d86" />}}
                    />

                <Tab.Screen 
                    name="Registro" 
                    component={RegistroScreen}
                    options={{tabBarIcon:()=><AntDesign name="unordered-list" size={24} color="#1a5d86" />}}
                    />

                    <Tab.Screen 
                    name="Login" 
                    component={LoginScreen}
                    options={{tabBarIcon:()=><AntDesign name="unordered-list" size={24} color="#1a5d86" />}}
                    />

                    <Tab.Screen 
                    name="Contacto" 
                    component={ContactoScreen}
                    options={{tabBarIcon:()=><AntDesign name="unordered-list" size={24} color="#1a5d86" />}}
                    />

                    <Tab.Screen 
                    name="Catalogo" 
                    component={CatalogoScreen}
                    options={{tabBarIcon:()=><AntDesign name="unordered-list" size={24} color="#1a5d86" />}}
                    />

                    <Tab.Screen 
                    name="Carrito" 
                    component={CarritoScreen}
                    options={{tabBarIcon:()=><AntDesign name="unordered-list" size={24} color="#1a5d86" />}}
                    />
            
            </Tab.Navigator>
        )

    }

    export function Bottom(){
        return (
            <CarritoProvider>
                <NavigationContainer>
                <MyTabs/>
             </NavigationContainer>

            </CarritoProvider>
            
        )
    }
