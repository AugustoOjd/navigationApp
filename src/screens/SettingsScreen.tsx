import React, { useContext } from 'react'
import { Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const SettingsScreen = () => {


  const {userState} = useContext(AuthContext)

  return (
    <View>
        <Text>
            {
              JSON.stringify(userState, null, 4)
            }
        </Text>
    </View>
  )
}

export default SettingsScreen