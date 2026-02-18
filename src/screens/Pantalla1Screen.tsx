import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { stylesGlobal } from '../theme/appTheme';
import { RookStackParams } from '../Navigator/StackNavigator';

type Props = StackScreenProps<RookStackParams, 'Pantalla1'>;

interface Persona {
    id: number;
    nombre: string;
    edad: number;
}

export const Pantalla1Screen = ({navigation}: Props) => {
    //console.log(props);

const persona1: Persona = {
    id: 1,
    nombre: 'Kevin',
    edad: 20,
} 

const persona2: Persona = {
    id: 2,
    nombre: 'Steve',
    edad: 30,
} 

    return (
    <View style={stylesGlobal.container}>
        <Text style={stylesGlobal.title}>Pantalla1 Screen</Text>
        <Button title= 'Ir a pantalla 2'
            onPress={()=> navigation.navigate('Pantalla2')}/>   
        <Button title='Ir persona'
            onPress={()=> navigation.navigate('Persona', persona1)}/>
        
        <Button title='Ir persona 2'
            onPress={()=> navigation.navigate('Persona', persona2)}/>

        {/* <TouchableOpacity 
            onPress={()=> navigation.navigate('Persona')}>
                <Text>Viviana</Text>
        </TouchableOpacity> */}
        
    </View>
    )
}
