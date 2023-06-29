import React from "react"
import { View, StyleSheet, Text } from "react-native"

export default class Basketball extends React{
    render(){
        return(
            <View style={styles.Views}>
                <Text style={styles.texts}>
                Basketball
                </Text>

                <View>

<Text>Rules</Text>

<Text>The rules of basketball can vary slightly depending on the level of play (for example professional rules differ from college rules) or where the game is played (international rules are different from USA professional rules). These rule differences, however, are usually just variations on the basic game of basketball and the majority of the rules discussed below can be applied to most any game of basketball played.

The winner of a basketball game is the team with the most points. You get points by throwing the basketball through the opponent's hoop or basket. In regular play a basket made from within the three point line is worth 2 points and a basket shot from outside the three point line is worth three points. When shooting a free throw, each free throw is worth 1 point."</Text>

<Text>Scoring System</Text>

<Text>Points can be accumulated by making field goals (two or three points) or free throws (one point). If a player makes a field goal from within the three-point line, the player scores two points. If the player makes a field goal from beyond the three-point line, the player scores three points.</Text>


</View>

            </View>
        )
    }
}
const styles=StyleSheet.create({
     Views:{backgroundColor:"white", flex:1},
     texts:{fontSize:30,fontFamily:"comic sans ms",alignSelf:"center"}
})