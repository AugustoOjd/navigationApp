import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

const ContactsScreen = () => {

  const { signIn, userState, logOut} = useContext(AuthContext)

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>
            Contacts Screen
        </Text>

        {

          userState.isLoggedIn === true
          ?
          <Button
          title='Logout'
          onPress={ ()=> logOut()}
          />
          :
          <Button
          title='SignIn'
          onPress={ ()=> signIn()}
        />

        }

    </View>
  )
}

export default ContactsScreen