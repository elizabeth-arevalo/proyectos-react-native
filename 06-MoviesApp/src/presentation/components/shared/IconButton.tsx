import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { colors, styles } from '../../theme'
import { IonIcon } from './IonIcon';

interface Options{
    icon: string,
    color?: string,
    doubleSize?: boolean;
    blackText?: boolean;
    onPress: ()=>void
}

export const IconButton = ({icon, color=colors.darkGray, doubleSize = false, blackText = false, onPress}: Options) => {
  return (
    <Pressable
    onPress={() => onPress()}
    style={({ pressed }) => ({
        ...styles.button,
        backgroundColor: color,
        width: doubleSize ? 180 : 70,
        opacity: pressed ? 0.8 : 1,
    })}
>
    <IonIcon name={icon} color={colors.textSecondary} size={10}/>
</Pressable>
  )
}
