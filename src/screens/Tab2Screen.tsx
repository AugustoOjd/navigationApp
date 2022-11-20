import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

const Tab2Screen = () => {

    useEffect(() => {
      
        console.log('Tab2Screen effect')
    }, [])
  return (
    <View>
        <Text>
            Tab 2
        </Text>
    </View>
  )
}

export default Tab2Screen