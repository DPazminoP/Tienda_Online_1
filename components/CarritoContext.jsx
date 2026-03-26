// CarritoContext.js
import React, { createContext, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Agregar un libro al carrito
  const agregarAlCarrito = (libro) => {
    setCarrito([...carrito, libro]);
  };

  // Eliminar un libro del carrito por nombre
  const eliminarDelCarrito = (nombre) => {
    setCarrito((prevCarrito) => prevCarrito.filter(libro => libro.nombre !== nombre));
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};