import React from "react";
import { StyleSheet } from "react-native";

// import Login from "./src/telas/Login";
import Cadastro from "./src/telas/Cadastro";

const App = () => {

  //const nome = 'SENAI - JANDIRA';

  return (
    // <View>
    //    <Text style = {estilo.titulo}>{nome}</Text>
    // </View>  
    // <Login />  
    <Cadastro />
  );
}

const estilo = StyleSheet.create({

  container: {},

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

export default App;