import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { useWindowDimensions} from 'react-native';
import TabsBottom from './TabsBottom';

const Drawer = createDrawerNavigator();

const MenuLateral = () => {

    const { width } = useWindowDimensions()

    const isLargeScreen = width >= 768;

  return (
    <Drawer.Navigator
        initialRouteName='StackNavigator'
        screenOptions={{
            drawerType: isLargeScreen ? 'permanent' : 'front'
        }}
    >
      {/* <Drawer.Screen name="StackNavigator"  component={StackNavigator} /> */}
      <Drawer.Screen name='TabsBottom'      component={TabsBottom}/>
      <Drawer.Screen name="SettingsScreen"  component={SettingsScreen} />
    </Drawer.Navigator>
  )
}


export default MenuLateral