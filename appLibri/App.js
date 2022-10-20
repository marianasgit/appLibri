import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Cadastro from './src/telas/Cadastro';
import Listagem from './src/telas/Listagem';
import Detalhes from './src/telas/Detalhes';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>

    </NavigationContainer>

  //   <Stack.Navigator screenOptions={false}>

  //   <Stack.Screen name="Cadastro" component={Cadastro} options={{title: 'CADASTRO DE LIVROS'}} />

  //   <Stack.Screen name="Listagem" component={Listagem} options={{title: 'LISTAGEM DE LIVROS'}} />

  //   </Stack.Navigator>


  //   <Listagem />

  //  <Detalhes />
  
  );
};

export default App;
