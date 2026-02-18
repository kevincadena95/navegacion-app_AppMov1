import React from 'react'
import { Button, Text, View } from 'react-native'
import { stylesGlobal } from '../theme/appTheme'
import { CommonActions, useNavigation } from '@react-navigation/native'

interface Persona {
    id: number;
    nombre: string;
    edad: number;
}

export const Pantalla2Screen = () => {
 //hook useNavigation: permite navegar de una pantalla a otra
const navigation = useNavigation();
//crear objeto
const persona: Persona = {
    id: 3,
    nombre: 'Leon',
    edad: 51,
} 

    return (
    <View style={stylesGlobal.container}>
        <Text style={stylesGlobal.title}>Pantalla2 Screen</Text>
        <Button title='Ir a la pantalla 3'
            onPress={()=>navigation.dispatch(CommonActions.navigate({name: 'Pantalla3'}))}/>
        <Button title='Ir a la persona 2'
            onPress={()=>navigation.dispatch(CommonActions.navigate({name: 'Persona2', params: persona}))}/>
    </View>
    )
}
