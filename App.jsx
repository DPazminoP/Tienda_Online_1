import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import ContactoScreen from './screens/ContactoScreen';
import LoginScreen from './screens/LoginScreen';
import { Bottom, Navegador } from './navigations/MainNavigator';

export default function App() {
  return (
    <Navegador/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
