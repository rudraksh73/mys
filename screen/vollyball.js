import React from "react"
import { View, StyleSheet, Text } from "react-native"

export default class Vollyball extends React{
    render(){
        return(
            <View style={styles.Views}>
                <Text style={styles.texts}>
                vollyball
                </Text>
                
                <View>

                    <Text>Rules</Text>

                    <Text>Here are the fundamental, must-know rules of a volleyball game:

Only 6 players on the floor at any given time: 3 in the front row and 3 in the back row.
Points are made on every serve for the winning team of the rally (rally-point scoring).
Players may not hit the ball twice in succession (a block is not considered a hit).
Ball may be played off the net during a volley and on a serve.
A ball hitting a boundary line is in.
A ball is out if it hits an antennae, the floor completely outside the court, any of the net or cables outside the antennae, the referee stand or pole, or the ceiling above a non-playable area.
It is legal to contact the ball with any part of a player’s body.
It is illegal to catch, hold or throw the ball.
A player cannot block or attack a serve from on or inside the 10-foot line.
After the serve, front-line players may switch positions at the net.
Matches are made up of sets; the number depends on level of play.</Text>

                    <Text>Scoring System</Text>

                    <Text>A volleyball game consists of two teams of six players each, separated by a net. The six volleyball court positions are setter, middle blocker, outside hitter, opposite hitter, libero and serving specialist.
   
   To start, flip a coin to determine which team serves the ball first.
   
   Then the two teams will rally—or hit the ball back and forth over the net—until a fault occurs. There is a maximum of three hits per side.
   
   The objective is to score points by sending the ball over the net, grounding it into the opponent’s court.
   
   Volleyball matches are made up of sets, typically three or five sets.
   
   Three-set matches are two sets to 25 points and a third set to 15 points. Each set must be won by two points. The first team to win two sets is the winner of the match.
   
   Five-set matches are four sets to 25 points and a fifth set to 15 points. The team must win by two points unless tournament rules dictate otherwise. The first team to win three sets is the winner..</Text>


                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
     Views:{backgroundColor:"white", flex:1},
     texts:{fontSize:30,fontFamily:"comic sans ms",alignSelf:"center"}
})