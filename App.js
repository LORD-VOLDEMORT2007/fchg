import { Text, View } from 'react-native'
import React, { Component } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import BottomTabNavigator from './navigation/BottomTabNavigator_c81'
import DrawerNavigator from './navigation/DrawerNavigator'

export default class App extends Component {
  render() {
    return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
    )
  }
}