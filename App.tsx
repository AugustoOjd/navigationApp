import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react'
import StackNavigatior from './src/navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigatior/>
    </NavigationContainer>

  )
}

export default App