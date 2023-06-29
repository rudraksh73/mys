import React from "react"
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import Badminton from "./badminton"
import Basketball from "./basketball"
import cricket from "./cricket"
import football from "./football"
import hockey from "./hockey"
import vollyball from "./vollyball"

export default class HomeScreen extends React{
    render(){
        return(
            <View style={styles.Views}>
                <TouchableOpacity style={styles.button} onPress={()=>{
                  this.props.navigation.navigate("Badminton")
                }}>
                    <Text style={styles.texts}>
                      Badminton
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{
                  this.props.navigation.navigate("Basketball")
                }}>
                    <Text style={styles.texts}>
                      Basketball
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{
                  this.props.navigation.navigate("Cricket")
                }}>
                    <Text style={styles.texts}>
                      Cricket
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{
                  this.props.navigation.navigate("Football")
                }}>
                    <Text style={styles.texts}>
                      Football
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{
                  this.props.navigation.navigate("Hockey")
                }}>
                    <Text style={styles.texts}>
                      Hockey
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{
                  this.props.navigation.navigate("Vollyball")
                }}>
                    <Text style={styles.texts}>
                      Vollyball
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles=StyleSheet.create({
     Views:{backgroundColor:"white", flex:1},
     texts:{fontSize:30,fontFamily:"comic sans ms",alignSelf:"center",color:"white"},
     button:{alignSelf:"center", justifyContent:"center", width:'70%', height:50, borderRadius:40, backgroundColor:"maroon", marginTop:40}
})