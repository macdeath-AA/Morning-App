import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './screenheader.style'
import { signOut } from 'firebase/auth'
import { FIREBASE_AUTH } from '../../../firebaseConfig'

const ScreenHeaderBtn = ({text, dimension, handlePress}) => {
  return (
    <TouchableOpacity style = {[styles.btnContainer, {width: dimension}]} 
    onPress={handlePress}>
  
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn