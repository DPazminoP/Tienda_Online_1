import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

export default function BotonAnimado() {
  const [enabled, setEnabled] = useState(true);
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: enabled ? 1 : 0.95 }],
      backgroundColor: enabled ? "#1a5d86" : "#aaa",
    };
  });

  const toggleButton = () => {
    setEnabled(!enabled);
    opacity.value = withTiming(enabled ? 0.5 : 1, { duration: 300 });
  };

  return (
    <Animated.View style={[styles.boton, animatedStyle]}>
      <TouchableOpacity onPress={toggleButton}>
        <Text style={styles.texto}>{enabled ? "Habilitado" : "Deshabilitado"}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  boton: {
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  texto: {
    color: "#fff",
    fontWeight: "bold",
  },
});
