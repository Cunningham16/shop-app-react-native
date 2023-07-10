import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { DefaultPalette, Metropolis } from '../../types/constants'

interface Props {
    children: React.ReactNode
    color?: DefaultPalette
}

export const H1: FC<Props> = (props) => {
  return (
    <View>
      <Text style={[styles.headline1, {color: props.color || DefaultPalette.BLACK}]}>{props.children}</Text>
    </View>
  )
}

export const H2: FC<Props> = (props) => {
    return (
      <View>
        <Text style={[styles.headline2, {color: props.color || DefaultPalette.BLACK}]}>{props.children}</Text>
      </View>
    )
  }

  export const H3: FC<Props> = (props) => {
    return (
      <View>
        <Text style={[styles.headline3, {color: props.color || DefaultPalette.BLACK}]}>{props.children}</Text>
      </View>
    )
  }

  export const P: FC<Props> = (props) => {
    return (
      <View>
        <Text style={[styles.defaultText, {color: props.color || DefaultPalette.BLACK}]}>{props.children}</Text>
      </View>
    )
  }
  export const DescriptionHeader: FC<Props> = (props) => {
    return (
      <View>
        <Text style={[styles.descriptiveItems, {color: props.color || DefaultPalette.BLACK}]}>{props.children}</Text>
      </View>
    )
  }

  export const DescriptionText: FC<Props> = (props) => {
    return (
      <View>
        <Text style={[styles.descriptiveText, {color: props.color || DefaultPalette.BLACK}]}>{props.children}</Text>
      </View>
    )
  }

  export const HelperText: FC<Props> = (props) => {
    return (
      <View>
        <Text style={[styles.helperText, {color: props.color || DefaultPalette.GRAY}]}>{props.children}</Text>
      </View>
    )
  }

const styles = StyleSheet.create({
    headline1: {
        fontFamily: Metropolis.BOLD,
        fontSize: 34,
        lineHeight: 34
    },
    headline2: {
        fontFamily: Metropolis.REGULAR,
        fontSize: 24,
        lineHeight: 28.8
    },
    headline3: {
        fontFamily: Metropolis.REGULAR,
        fontSize: 18,
        lineHeight: 22
    },
    defaultText: {
        fontFamily: Metropolis.REGULAR,
        fontSize: 16,
        lineHeight: 16
    },
    descriptiveItems: {
        fontFamily: Metropolis.MEDIUM,
        fontSize: 14,
        lineHeight: 20
    },
    descriptiveText: {
        fontFamily: Metropolis.REGULAR,
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: -0.15,
    },
    helperText: {
        fontFamily: Metropolis.REGULAR,
        fontSize: 11,
        lineHeight: 11,
    }
})