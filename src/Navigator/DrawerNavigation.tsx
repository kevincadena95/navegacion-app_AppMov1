import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigator =() =>{
    return (
    <Drawer.Navigator>
        <Drawer.Screen name="StackNav" options={{title: 'Home'}} component={StackNavigator} />
        <Drawer.Screen name="Setting" options={{title: 'Configuracioness'}} component={SettingsScreen} />
    </Drawer.Navigator>
    );
}