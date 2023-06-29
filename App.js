import *as React from 'react'
import {NaviagtionContainer} from '@react-navigation/native'
import StackNavigation from './navigation/stackNavigation'

export default class App extends React.Component{
 render(){
  return(
    <NavigationContainer>
      <StackNavigation/>
      
    </NavigationContainer>
  )
 } 
}