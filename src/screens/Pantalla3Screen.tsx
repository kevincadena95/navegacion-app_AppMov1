import React from 'react'
import { Button, Text, View } from 'react-native'
import { stylesGlobal } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any> { };

export const Pantalla3Screen = ({navigation}: Props) => {
  return (
    <View style={stylesGlobal.container}>
        <Text style={stylesGlobal.title}>Pantalla3 Screen</Text>
        <Button title='Regresar'
          onPress={()=> navigation.goBack()}/>
        <Button title='Ir home'
          onPress={()=> navigation.popToTop()}/>
    </View>
  )
}
