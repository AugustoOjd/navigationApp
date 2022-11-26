import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TouchableIcon from '../components/TouchableIcon';

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
          <TouchableIcon name="alarm-outline" />
          <TouchableIcon name="aperture-outline" />
          <TouchableIcon name="boat-outline"/>
          <TouchableIcon name="calculator-outline"/>
          <TouchableIcon name="cash-outline"/>
        </Text>
    </View>
  )
}

export default Tab1Screen