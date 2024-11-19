import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { styles } from '../../theme'

export const FullScreenLoader = () => {
  return (
    <View style={styles.loaderStyle}>
        <ActivityIndicator size='large' color={'indigo'}/>
    </View>
  )
}
