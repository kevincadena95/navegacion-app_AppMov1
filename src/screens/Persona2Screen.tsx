import React from 'react'
import { Button, Text, View } from 'react-native'
import { stylesGlobal } from '../theme/appTheme'
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native'

interface RouterParams {
    id: number,
    nombre: string,
    edad: number
}

export const Perasona2Screen = () => {

 //hook useRoute: permite capturara los parametros
 const route = useRoute();

 const params = route.params as RouterParams;


    return (
    <View style={stylesGlobal.container}>
        <Text style={stylesGlobal.title}>Pantalla2 Screen</Text>
        <Text >{params.id}</Text>
        <Text >{params.nombre}</Text>
        <Text >{params.edad}</Text>
        
    </View>
    )
}
