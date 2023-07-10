import { ButtonProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface Props extends ButtonProps{
    children: React.ReactNode,
    size: "small" | "big",
    type: "outline" | "primary" | "review"
}

export default function Button({children, size, type, ...rest}: Props) {
  return (
    <TouchableOpacity>
      <Text>Button</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})