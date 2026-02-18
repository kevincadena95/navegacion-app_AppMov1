import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { stylesGlobal } from '../theme/appTheme';

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
        <DrawerContentScrollView>
            <View style={stylesGlobal.containerAvatar}>
                <Image source={{uri: 'https://i.postimg.cc/KjVCnnD7/icon-Drewer.webp'}}
                style={stylesGlobal.avatar}/>
            </View>
            <View style={stylesGlobal.menu}>
                <TouchableOpacity style={stylesGlobal.menuButton}>
                    <Text style={stylesGlobal.menuText}>Navigación</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesGlobal.menuButton}>
                    <Text style={stylesGlobal.menuText}>Ajustes</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}