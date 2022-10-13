import React from "react";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Cadastro from "./src/telas/Cadastro";
import Listagem from "./src/telas/Listagem";
import Detalhes from "./src/telas/Detalhes";

const App = () => {

  return (
    // <NavigationContainer>

    //   <Stack.Navigator screenOptions={false}>

    //     <Stack.Screen name="Cadastro" component={Cadastro} options={{title: 'CADASTRO DE LIVROS'}} />

    //     <Stack.Screen name="Listagem" component={Listagem} options={{title: 'LISTAGEM DE LIVROS'}} />

    //   </Stack.Navigator>

    // </NavigationContainer>

    // <Listagem />

    <Detalhes />
  );
}

export default App;