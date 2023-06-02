import React from "react"
import {View, TextInput, Pressable, Text} from "react-native"
import estilo from "../styles/Temporizador"

export default function Temporizador(props){
    return <View style={estilo.espaco}>

        <Text style={estilo.tempo}> {props.tempo} </Text>
        <Text style={estilo.tempoUnidade}> {props.tempoUnidade} </Text>
    </View>
}