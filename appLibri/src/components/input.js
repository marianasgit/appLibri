import React from "react";  
import { View, Text, TextInput, StyleSheet } from "react-native";

import COLORS from "../const/colors";

const Input = ({label}) => {

    return (

        <View style= {estilos.formContainer} >
            <Text style= {estilos.inputLabel} >{label}</Text>
        </View>

    );
}

const estilos = StyleSheet.create({

    formContainer: {
        marginBottom: 20,

    },

    inputLabel: {
        marginVertical: 5,
        fontSize: 15,
        color: COLORS.gray,
    },

});

export default Input;