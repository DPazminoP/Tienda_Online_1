import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CarritoProvider } from '../components/CarritoContext';

// Ventanas
import WelcomeScreen from "../screens/WelcomeScreen";
import RegistroScreen from "../screens/RegistroScreen";
import LoginScreen from "../screens/LoginScreen";
import ContactoScreen from "../screens/ContactoScreen";
import CatalogoScreen from "../screens/CatalogoScreen";
import CarritoScreen from "../screens/CarritoScreen";
import InfoPagoScreens from '../screens/InfoPagoScreens';
import { NavigationContainer } from "@react-navigation/native";

// Iconos
import AntDesign from '@expo/vector-icons/AntDesign';

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

function MyBottom() {
    return (
        <Bottom.Navigator initialRouteName="Catalogo">
            <Bottom.Screen 
                name="Catalogo" 
                component={CatalogoScreen}
                options={{ tabBarIcon: () => <AntDesign name="book" size={24} color="#1a5d86" /> }}
            />
            <Bottom.Screen 
                name="Carrito" 
                component={CarritoScreen}
                options={{ tabBarIcon: () => <AntDesign name="shoppingcart" size={24} color="#1a5d86" /> }}
            />  
            <Bottom.Screen 
                name="pasarela" 
                component={InfoPagoScreens} 
                options={{ tabBarButton: () => null }}
            />
            </Bottom.Navigator>
        );
    }

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name='Welcome' component={WelcomeScreen}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Registro' component={RegistroScreen}/>
        <Stack.Screen name='Contactos' component={ContactoScreen}/>
        <Stack.Screen 
            name='Bottom' 
            component={MyBottom}
            options={{ headerShown: false }}
        />
        </Stack.Navigator>
    );
}

export function Navegador() {
    return (
        <CarritoProvider>
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
        </CarritoProvider>
    );
}
