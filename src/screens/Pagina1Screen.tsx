import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{

}

const Pagina1Screen = ({ navigation }: Props) => {


  return (
    <View
        style={ styles.globalMargin }
        >
        <Text
          style={ styles.title }
        >
            Pagina 1
        </Text>

        <View
          style={ styles.btnBox}
        >
          <Button
              title='Ir a pagina 2'
              onPress={()=> navigation.navigate('Pagina2Screen')}

          />

          {/* <Button
            title='Ir a persona'
            onPress={ ()=> navigation.navigate('PersonaScreen')}
          /> */}

          <Text>
            Navegar con argumentos
          </Text>

          <TouchableOpacity
            style={{
              ...styles.btn,
              backgroundColor: 'green'
            }}
            onPress={ ()=> navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'pedro'
            })}
          >

            <Text
              style={ styles.btnText }
            >
              Pedro
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              ...styles.btn,
              backgroundColor: 'orange'
            }}
            onPress={ ()=> navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'maria'
            })}
          >

            <Text
              style={ styles.btnText }
            >
              Maria
            </Text>
          </TouchableOpacity>

        </View>

    </View>
  )
}

export default Pagina1Screen