import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import Tab3Screen from '../screens/Tab3Screen';
import StackNavigator from './StackNavigator';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const TabsBottom = () => {
  return (
    <Tab.Navigator
        screenOptions={ ({ route }) => ({
            tabBarIcon: ({ color, focused, size })=> {
                
                let iconName: string = ''

                switch (route.name) {
                    case 'Tab1Screen':
                        iconName = 'T1'
                        break;
                    
                    case 'Tab2Screen':
                        iconName = 'T2'
                        break;
                    
                    case 'StackNavigator':
                        iconName = 'St'
                        break;
                
                    default:
                        break;
                }
                
                return (<Text style={{ color }}> {iconName}</Text>)
            
            },
            tabBarActiveTintColor: 'red',
            tabBarStyle:{
                borderTopColor: 'red',
                backgroundColor: 'white'
            },
        })}
    >
      {/* <Tab.Screen name="Tab1Screen"     
        options={{ title: 'Tab1', tabBarIcon: (props)=> <Text style={ {color: props.color } }>T1</Text>}} 
        component={Tab1Screen} /> */}
      <Tab.Screen name="Tab1Screen"         options={{ title: 'Tab1'}} component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen"         options={{ title: 'Tab2'}} component={Tab2Screen} />
      <Tab.Screen name='StackNavigator'     options={{ title: 'Stack'}} component={StackNavigator}/>
    </Tab.Navigator>
  );
}

export default TabsBottom