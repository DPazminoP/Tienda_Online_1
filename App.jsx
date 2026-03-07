import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import ContactoScreen from './screens/ContactoScreen';
import LoginScreen from './screens/LoginScreen';
import { Bottom } from './navigations/BottomNavigator';

export default function App() {
  return (
    <Bottom/>
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
