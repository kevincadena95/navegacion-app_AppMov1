import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { stylesGlobal } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { };

export const Pantalla1Screen = ({navigation}: Props) => {
    //console.log(props);

    return (
    <View style={stylesGlobal.container}>
        <Text style={stylesGlobal.title}>Pantalla1 Screen</Text>
        <Button title= 'Ir a pantalla 2'
            onPress={()=> navigation.navigate('Pantalla2')}/>
    </View>
    )
}
