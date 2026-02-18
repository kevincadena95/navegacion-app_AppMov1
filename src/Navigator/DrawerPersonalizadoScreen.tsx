import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Text } from 'react-native';

const Drawer = createDrawerNavigator();

export const DrawerPersonalizadoNavigator =() =>{
    return (
    <Drawer.Navigator
    drawerContent={(props)=><MenuLateral {...props} />}>
        <Drawer.Screen name="StackNav" options={{title: 'Home'}} component={StackNavigator} />
        <Drawer.Screen name="Setting" options={{title: 'Configuracioness'}} component={SettingsScreen} />
    </Drawer.Navigator>
    );
}

//Componete Menu Lateral
const MenuLateral = (props: DrawerContentComponentProps) =>{
    return(
        <Text>Hola segundo sistemas</Text>
    )
}