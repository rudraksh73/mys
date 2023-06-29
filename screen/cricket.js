import React from "react"
import { View, StyleSheet, Text } from "react-native"

export default class cricket extends React{
    render(){
        return(
            <View style={styles.Views}>
                <Text style={styles.texts}>
                cricket
                </Text>
                <View>

<Text>Rules</Text>

<Text>Cricket is a game played between two teams made up of eleven players each. There is also a reserve player called a “twelfth man” who is used should a player be injured during play.

The twelfth man is not allowed to bowl, bat, wicket keep or captain the team. His sole duty is to act as a substitute fielder.

The original player is free to return to the game as soon as they have recovered from their injury.


To apply the law and make sure the cricket rules are upheld throughout the game there are two umpires in place during games. Umpires are responsible for making decisions and notifying the scorers of these decisions.

Two umpires are in place on the playing field while there is also a third umpire off the field who is in charge of video decisions.

This is where the call is too close for the on field umpires and they refer it to the third umpire who reviews slow motion video replays to make a decision.
</Text>

<Text>Scoring System</Text>

<Text>The aim of the batsmen is to score runs. One of the main cricket rules is that for batsmen to score runs they must run to each other’s end of the pitch (from one end to the other). In doing this one run is scored. Cricket rules state they may run multiple runs per shot. As well as running they can also score runs by hitting boundaries. A boundary scores the batsmen either 4 or 6 runs. A four is scored by hitting the ball past the boundary after hitting the ground while a six is scored by hitting the ball past the boundary on the full (before it hits the ground). Cricket rules also state that once a 4 or 6 has been scored any runs physically ran by the batsman are null & void. They will only obtain the 4 or 6 runs.

Other ways runs can be scored according to the cricket rules include no balls, wide balls, byes & leg byes. Cricket rules state that all runs scored by these methods are awarded to the batting team but not the individual batters.

A “No Ball” can be declared for many reasons: If the bowler bowls the ball from the wrong place, the ball is declared dangerous (often happens when bowled at the batsmen’s body on the full), bounces more than twice or rolls before reaching the batsman or if fielders are standing in illegal positions. The batsman can hit a no ball and score runs off it but cannot be out from a no ball except if they are ran out, hit the ball twice, handle the ball or obstruct the field. The batsman gains any runs scored off the no ball for his shot while the team also gains one run for the no ball itself.
A “Wide Ball” will be declared if the umpire thinks the batsman did not have a reasonable opportunity to score off the delivery. However if the delivery is bowled over the batsmen’s head it will not be declared a wide but a no ball. Umpires are much stricter on wide deliveries in the shorter format of the game while being much more relaxed in test cricket. A wide delivery will add one run to the batting team and any runs scored by the batsman. The batsman is not able to get out off a wide delivery except if they are stumped, run out, handle the ball, hit their wicket or obstruct the field.
A “Bye” is where a ball that isn’t a no ball or wide passes the striking batsman and runs are scored without the batsman hitting the ball.
A “Leg Bye” is where runs are scored by hitting the batsman, but not the bat and the ball is not a no ball or wide. However no runs can be scored if the striking batsman didn’t attempt to play a shot or if he was avoiding the ball.
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