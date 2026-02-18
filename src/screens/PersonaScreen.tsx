import React from 'react'
import { Button, Text, View } from 'react-native'
import { stylesGlobal } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { RookStackParams } from '../Navigator/StackNavigator';

type Props = StackScreenProps<RookStackParams, 'Persona'>;
//interface Props extends StackScreenProps<any, any>{};
//interface para los parametros de navegación
/* interface RouterParams{
    id: number,
    nombre: string,
    edad: number;
} */

export const PersonaScreen = ({route}: Props) => {
    //console.log(props);
    const params = route.params;
    //console.log(params);

    return (
    <View style={stylesGlobal.container}>
        <Text style={stylesGlobal.title}>Persona Screen</Text>
        <Text>{JSON.stringify(params)}</Text>
    </View>
    )
}
