import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react'
import StackNavigator from './src/navigator/StackNavigator';
import MenuLateral from './src/navigator/MenuLateral';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      <MenuLateral/>
    </NavigationContainer>

  )
}

export default App