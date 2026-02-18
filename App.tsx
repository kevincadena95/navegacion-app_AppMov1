import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { StackNavigator } from './src/Navigator/StackNavigator';
import { DrawerNavigator } from './src/Navigator/DrawerNavigation';
import { DrawerPersonalizadoNavigator } from './src/Navigator/DrawerPersonalizadoScreen';

const App = () => {
  return (
    <NavigationContainer >
      {/* <StackNavigator/> */}
      {/* <DrawerNavigator/> */}
      <DrawerPersonalizadoNavigator/>
    </NavigationContainer>
  )
}
export default App;
