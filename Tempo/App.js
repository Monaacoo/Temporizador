import React, {useState, useEffect} from "react"
import {SafeAreaView,StatusBar, View, Text, } from "react-native"

import Temporizador from "./src/components/Temporizador"
import CaixaTempo from "./src/components/CaixaTempo"

export default function App(){

  const [tempo, mudarTempo] = useState(60)
  const [entrada, definirEntrada] = useState(null)

  useEffect(function(){
    const contador = tempo > 0 && setInterval(function(){
      
      mudarTempo(tempo - 1)

    },1000)
    return function(){
      clearInterval(contador)
    }
  },[tempo])

  return <SafeAreaView style={{
    alignItems: "center",
    backgroundColor: "#222",
    height: "100%"
  }}>

    <StatusBar barStyle= "light-content" backgroundColor="#222" />

    <View>
      <Temporizador tempo={tempo} tempoUnidade="segundos"/>

      <CaixaTempo 
        entrada={entrada} 
        definirEntrada={definirEntrada}
        mudarTempo={mudarTempo}/>
    </View>

  </SafeAreaView>
}