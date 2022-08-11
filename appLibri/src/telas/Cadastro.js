import React, {useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import COLORS from '../const/colors';

import Input from '../components/input';
import Button from '../components/button';

const Cadastro = () => {
  //const nome = 'Tela de Cadastro';

  // CRIAÇÃO DA ESTRUTURA DE STATE QUE ARMAZENARA OS DADOS
  const [inputs, setInputs] = useState({
    titulo: '',
    descricao: '',
    capa: '',
  });

  //FUNCAO QUE MANIPULA A ENTRADA DE DADOS NA STATE NO METODO ONCHANGETEXT
  const handlerOnChange = (text, input) => {

    setInputs((prevState)=>{
      //console.log(prevState)
      //console.log(input + ' ' + text)

      //injecao de dados na state
      console.log({...prevState, [input] : text})
      return {...prevState, [input] : text};
      
    });
  }

  /** VALIDACAO DOS DADOS DE CADASTRO **/

  //FUNCAO DE VALIDACAO
  const validate = () => {
    let validate = true;

    if (!inputs.titulo) {
      validate = false;
      console.log('Titulo em branco');
    }
    if (!inputs.descricao) {
      validate = false;
      console.log('Descrição em branco');
    }
    if (!inputs.capa) {
      validate = false;
      console.log('Capa em branco');
    }
  }

  return (
    <SafeAreaView style={estilos.safe} >
      <ScrollView style={estilos.scroll}>

        <Text style={estilos.textTitle}>CADASTRO DE LIVROS</Text>

        <View style={estilos.viewForm}>

          <Input label="TITULO" onChangeText={(text) => handlerOnChange(text, 'titulo')}/>
          <Input label="DESCRIÇÃO" onChangeText={(text) => handlerOnChange(text, 'descricao')}/>
          <Input label="CAPA" onChangeText={(text) => handlerOnChange(text, 'capa')}/>
          <Button title="CADASTRAR" onPress={validate} />

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

  viewForm: {
    marginVertical: 20,

  },

});

export default Cadastro;
