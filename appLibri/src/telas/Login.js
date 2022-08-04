import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Login = () => {

    const nome = 'Tela de Login';
  
    return (
      <View>
        <Text style = {estilo.titulo}>{nome}</Text>
      </View>    
    );
}

const estilo = StyleSheet.create({

  titulo: {
    width: "100%",
    backgroundColor: "#f00",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "#fff",
    fontWeight: "bold",
    padding: 16,
  },
});


export default Login;

