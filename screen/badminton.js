import React from "react"
import { View, StyleSheet, Text } from "react-native"

export default class Badminton extends React {
    render() {
        return (
            <View style={styles.Views}>
                <Text style={styles.texts}>
                    Badminton
                </Text>

                <View>

                    <Text>Rules</Text>

                    <Text>A player must wait until his opponent is ready before serving. If the opponent attempts a return then he is ruled having been ready.
                        The feet of both players must remain in a stationary position until the serve is made. Your feet can not be touching the line at this time.
                        It is not a fault if you miss the shuttle while serving.The shuttle cannot be caught and slung with the racket.
                        A player cannot hold his racket near the net to ward off a downward stroke by his opponent or to interfere with his racket.</Text>

                    <Text>Scoring System</Text>

                    <Text>A match consists of the best of 3 games of 21 pointsEvery time there is a serve – there is a point scored.
                        The side winning a rally adds a point to its score.
                        At 20 all, the side which gains a 2 point lead first, wins that game.
                        At 29 all, the side scoring the 30th point, wins that game.
                        The side winning a game serves first in the next game.</Text>


                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Views: { backgroundColor: "white", flex: 1 },
    texts: { fontSize: 30, fontFamily: "comic sans ms", alignSelf: "center" }
})