import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

const Tab3Screen = () => {

    useEffect(() => {
      
        console.log('Tab3Screen effect')
    }, [])
    
  return (
    <View>
        <Text>
            Tab 3
        </Text>
    </View>
  )
}

export default Tab3Screen