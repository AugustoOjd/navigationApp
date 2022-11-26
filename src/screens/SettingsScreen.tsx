import React, { useContext } from 'react'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

const SettingsScreen = () => {


  const {userState} = useContext(AuthContext)
  const { favoriteIcon } = userState

  return (
    <View>
        <Text>
            {
              JSON.stringify(userState, null, 4)
            }
        </Text>

        <Icon 
            name={ favoriteIcon ? favoriteIcon : '' } 
            size={80} 
            color="#900" 
            />
    </View>
  )
}

export default SettingsScreen