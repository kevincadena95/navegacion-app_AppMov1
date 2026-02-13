import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { stylesGlobal } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { };

interface Persona {
    id: number;
    nombre: string;
    edad: number;
}

export const Pantalla1Screen = ({navigation}: Props) => {
    //console.log(props);

const persona: Persona = {
    id: 1,
    nombre: 'Kevin',
    edad: 20,
} 

    return (
    <View style={stylesGlobal.container}>
        <Text style={stylesGlobal.title}>Pantalla1 Screen</Text>
        <Button title= 'Ir a pantalla 2'
            onPress={()=> navigation.navigate('Pantalla2')}/>    
        <Button title='Ir persona'
            onPress={()=> navigation.navigate('Persona', persona)}/>

        {/* <TouchableOpacity 
            onPress={()=> navigation.navigate('Persona')}>
                <Text>Viviana</Text>
        </TouchableOpacity> */}
        
    </View>
    )
}
