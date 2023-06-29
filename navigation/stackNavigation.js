import *as React from "react";
import Badminton from "../screen/badminton";
import Basketball from "../screen/basketball";
import Cricket from "../screen/cricket";
import Football from "../screen/football";
import Hockey from "../screen/hockey";
import Vollyball from "../screen/vollyball";
import HomeScreen from "../screen/HomeScreen";
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();


export default class StackNavigation extends React.Component{
    render(){
        return(
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="Badminton" component={Badminton}/>
            <Stack.Screen name="Basketball" component={Basketball}/>
            <Stack.Screen name="Cricket" component={Cricket}/>
            <Stack.Screen name="Football" component={Football}/>
            <Stack.Screen name="Hockey" component={Hockey}/>
            <Stack.Screen name="Vollyball" component={Vollyball}/>
            
          </Stack.Navigator>
        )
    }
}