import React, {useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

import COLORS from '../const/colors';

import Input from '../components/input';
import Button from '../components/button';
import apiLivraria from '../service/apiLivraria';

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
    setInputs(
      prevState => (
        //console.log(prevState)
        //console.log(input + ' ' + text)

        //injecao de dados na state
        console.log(prevState), {...prevState, [input]: text}
      ),
    );
  };

  /** VALIDACAO DOS DADOS DE CADASTRO **/

  //STATE DE ERRO DE PREENCHIMENTO
  const [errors, setErrors] = React.useState({});

  //FUNÇÀO HANDLER QUE CONFIGURA AS MENSAGENS DE ERRO NA STATE
  const handlerErrors = (errorMessage, input) => {
    setErrors(prevSate => ({...prevSate, [input]: errorMessage}));
  };

  //FUNCAO DE VALIDACAO
  const validate = () => {
    let validate = true;

    if (!inputs.titulo) {
      validate = false;
      handlerErrors('Informe o título do livro', 'titulo');
      // console.log('Titulo em branco');
    }
    if (!inputs.descricao) {
      validate = false;
      handlerErrors('Informe a descrição do livro', 'descricao');
      // console.log('Descrição em branco');
    }
    if (!inputs.capa) {
      validate = false;
      handlerErrors('Informe a capa do livro', 'capa');
      //console.log('Capa em branco', 'titulo');
    }

    if (validate) {
      // ENVIAR OS DAOS PARA A API CADASTRAR
      cadastrar();
      console.log('Cadastrado!');
    }

    console.log(errors);

    
  };
  
  const cadastrar = () => {
    try{
      const response = apiLivraria.post('/cadastrarLivros', 
      {
        titulo: inputs.titulo,
        descricao: inputs.descricao,
        imagem: inputs.capa
      })

    } catch(error){}
  }
  
  return (
    <SafeAreaView style={estilos.safe}>
      <ScrollView style={estilos.scroll}>
        <Text style={estilos.textTitle}>CADASTRO DE LIVROS</Text>

        <View style={estilos.viewForm}>
          <Input
            label="TITULO"
            iconName="book-outline"
            error={errors.titulo}
            onFocus={() => {handlerErrors(null, 'titulo')}}
            onChangeText={text => handlerOnChange(text, 'titulo')}
          />
          <Input
            label="DESCRIÇÃO"
            iconName="card-text-outline"
            error={errors.descricao}
            onFocus={() => {handlerErrors(null, 'descricao')}}
            onChangeText={text => handlerOnChange(text, 'descricao')}
          />
          <Input
            label="CAPA"
            iconName="image-outline"
            error={errors.capa}
            onFocus={() => {handlerErrors(null, 'capa')}}
            onChangeText={text => handlerOnChange(text, 'capa')}
          />
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
