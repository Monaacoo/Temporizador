import React from "react"
import {View, TextInput, Pressable, Text} from "react-native"
import estilo from "../styles/CaixaTempo"

export default function CaixaTempo(props){
    return <View style={estilo.organizar}>

        <TextInput
        style={estilo.caixa}
            keyboardType="numeric"
            maxLength={3}
            placeholder="enter the time"
            value={props.entrada}
            onChangeText={props.definirEntrada}/>

        <Pressable onPress={() => props.mudarTempo(props.entrada)}>
            <View style={estilo.botao}>
                <Text style={estilo.textoBotao}>Resetar</Text>
            </View>
        </Pressable>
    </View>
}