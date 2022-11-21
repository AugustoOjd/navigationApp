import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import Tab3Screen from '../screens/Tab3Screen';
import StackNavigator from './StackNavigator';
import { Text } from 'react-native';
import TopTabNavigator from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabsBottom = () => {
  return (
    <Tab.Navigator
        screenOptions={ ({ route }) => ({
            tabBarIcon: ({ color, focused, size })=> {
                
                let iconName: string = ''

                switch (route.name) {
                    case 'Tab1Screen':
                        iconName = 'business-outline'
                        break;
                    
                    case 'TopTabNavigator':
                        iconName = 'call-outline'
                        break;
                    
                    case 'StackNavigator':
                        iconName = 'body-outline'
                        break;
                
                    default:
                        break;
                }
                
                return (<Text> <Icon name={iconName} size={20} color="#900"></Icon></Text>)
            
            },
            tabBarActiveTintColor: 'red',
            tabBarStyle:{
                borderTopColor: 'red',
                backgroundColor: 'white'
            },
        })}
    >
      <Tab.Screen name="Tab1Screen"         options={{ title: 'Tab1'}} component={Tab1Screen} />
      <Tab.Screen name="TopTabNavigator"    options={{ title: 'Tab2'}} component={TopTabNavigator} />
      <Tab.Screen name='StackNavigator'     options={{ title: 'Stack'}} component={StackNavigator}/>
    </Tab.Navigator>
  );
}

export default TabsBottom