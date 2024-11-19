import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { colors, styles } from '../../theme'

interface Options{
    label?: string,
    color?: string,
    doubleSize?: boolean;
    blackText?: boolean;
    onPress: ()=>void
}

export const CustomButton = ({label, color=colors.darkGray, doubleSize = false, blackText = false, onPress}: Options) => {
  return (
    <Pressable
    onPress={() => onPress()}
    style={({ pressed }) => ({
        ...styles.button,
        ...styles.backButtonText,
        backgroundColor: color,
        width: doubleSize ? 180 : 100,
        opacity: pressed ? 0.8 : 1,
    })}
>
    <Text
        style={{
            ...styles.buttonText,
            color: blackText ? "black" : "white",
        }}
    >
        {label}
    </Text>
</Pressable>
  )
}
