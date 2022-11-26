import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';


interface Props {
    name: string
}

const TouchableIcon = ({ name }: Props) => {

    const { changeFavoriteIcon } = useContext(AuthContext)

  return (
    <TouchableOpacity
        onPress={ () => changeFavoriteIcon( name )}
    >
        <Icon 
            name={name} 
            size={80} 
            color="#900" 
            />
    </TouchableOpacity>
  )
}

export default TouchableIcon