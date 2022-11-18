import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{
    
}

const Pagina2Screen = ({navigation}: Props) => {

  return (
    <View
        style={ styles.globalMargin }
    >
        <Text>
            Pagina 3
        </Text>

        <Button
            title='Ir pagina 3'
            onPress={ ()=> navigation.navigate('Pagina3Screen')} 
        />
    </View>
  )
}

export default Pagina2Screen