import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

import Input from '../components/input';
import COLORS from '../const/colors';

const Cadastro = () => {
  const nome = 'Tela de Cadastro';

  return (
    <SafeAreaView style= {estilos.safe} >
      <ScrollView style= {estilos.scroll}>

        <Text style= {estilos.textTitle}>CADASTRO DE LIVROS</Text>

        <View>

          <Input label="TITULO" />
          <Input label="DESCRIÇÃO" />
          <Input label="CAPA" />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({

  safe: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  scroll: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  textTitle: {
    color: COLORS.black,
    fontSize: 25,
    fontWeight: 'bold',
  },

  viewForm: {},

});

export default Cadastro;
