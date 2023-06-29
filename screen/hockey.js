import React from "react"
import { View, StyleSheet, Text } from "react-native"

export default class Hockey extends React{
    render(){
        return(
            <View style={styles.Views}>
                <Text style={styles.texts}>
                hockey
                </Text>
                <View>

<Text>Rules</Text>

<Text>
Hockey players can only hit the ball with the flat side of their stick.
    Hockey players (other than the goalkeeper) are not allowed to use their feet, or any other parts of the body, to control the ball at any time.
    A goal can only be scored either from a field goal, a penalty corner, or from a penalty stroke. A field goal is a goal scored from open play, and can only be scored from inside the ‘striking circle’, in front of the opponent's goal. If the hockey ball is hit from outside the circle and goes into the goal, it does not count as a goal.
    Hockey players may not trip, push, charge, interfere with, or physically handle an opponent in any way. Hockey is a non-contact sport and all fouls result in a free hit or a ‘penalty corner’ for the non-offending team depending on where the infringement took place and the severity of the foul.
</Text>

<Text>Scoring System</Text>

<Text>
A number of different types of foul may be punished in a game of hockey. Some of the basic ones to watch out for include.

    Obstruction. This is awarded against a hockey player who uses their body or stick to prevent an opponent from reaching the ball.
    Third-party obstruction. This is awarded when a hockey player positions themselves between the ball and an opponent, allowing a team-mate an unobstructed play on the ball.
    Advancing. This is awarded against a player who shoves, pushes, or advances the ball in any way, using any part of their body.
    Backsticks. This is awarded against a player who strikes the ball with the rounded back of the hockey stick.
    Hockey stick interference. This is awarded against a player who uses their stick to hit an opponent’s stick, either intentionally or unintentionally.
    Undercutting. This is awarded against a player who lifts the ball in a dangerous manner.
    Sticks. This is awarded against a player who raises their stick dangerously near another player.
</Text>
            </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
     Views:{backgroundColor:"white", flex:1},
     texts:{fontSize:30,fontFamily:"comic sans ms",alignSelf:"center"}
})