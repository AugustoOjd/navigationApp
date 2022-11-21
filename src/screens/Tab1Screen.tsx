import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab1Screen = () => {

    useEffect(() => {
      
        console.log('Tab1Screen effect')
    }, [])
    
  return (
    <View>
        <Text>
            Tab 1
        </Text>
        
        <Text>
          <Icon name="alarm-outline" size={30} color="#900" />
          <Icon name="aperture-outline" size={30} color="#900" />

        </Text>
    </View>
  )
}

export default Tab1Screen