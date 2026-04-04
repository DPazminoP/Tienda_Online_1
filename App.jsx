import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { initDB, verificarSesionLocal } from './conection/Database';
import { Navegador } from './navigations/MainNavigator';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const startDB = async () => {
      await initDB();
      // verificamos si hay sesión activa
      await verificarSesionLocal();
      setLoading(false);
    };
    startDB();
  }, []);

  if (loading) {
    // Mientras se inicializa la DB, mostramos un loader
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#1E3A8A" />
        <StatusBar style="auto" />
      </View>
    );
  }

  return <Navegador />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
