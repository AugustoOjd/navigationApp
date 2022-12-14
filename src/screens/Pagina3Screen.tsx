import React from 'react'
import { Button, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{

}

const Pagina3Screen = ({navigation}:Props) => {
  return (
    <View
        style={ styles.globalMargin }
    >
        <Text
            style={ styles.title }
        >
            Pagina 3
        </Text>

        <Button
            title='Regresar'
            onPress={ ()=> navigation.pop() }
        />

        <Button
            title='Regresar al Home'
            onPress={ ()=> navigation.popToTop() }
        />
    </View>
  )
}

export default Pagina3Screen