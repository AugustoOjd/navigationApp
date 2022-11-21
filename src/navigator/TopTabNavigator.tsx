import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={({route})=> ({

            tabBarIcon: ({color}) => {

                let iconName: string = ''
                switch (route.name) {
                    case 'ChatScreen':
                        iconName = "chatbubble-outline"
                        break;
                    case 'ContactsScreen':
                        iconName = 'call-outline'
                        break;
                    case 'AlbumsScreen':
                        iconName = 'albums-outline'
                        break;
                    default:
                        break;
                }
                
                return( <Text><Icon name={iconName} size={20} color="#900"></Icon></Text>)
            }

        })}
    >
      <Tab.Screen name="ChatScreen"     options={{title: 'Chat'}}       component={ChatScreen} />
      <Tab.Screen name="ContactsScreen" options={{title: 'Contacts'}}   component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen"   options={{title: 'Albums'}}      component={AlbumsScreen} />
    </Tab.Navigator>
  );
}

export default TopTabNavigator