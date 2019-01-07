import React from 'react';
import { createAppContainer,createStackNavigator } from 'react-navigation'
import HomeScreen from './screens/Home'

const RootStack = createStackNavigator({
  Home:{
    screen: HomeScreen
  }
},{
  initialRouteName: 'Home'
})

export default createAppContainer(RootStack);