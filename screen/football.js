import React from "react"
import { View, StyleSheet, Text } from "react-native"

export default class football extends React{
    render(){
        return(
            <View style={styles.Views}>
                <Text style={styles.texts}>
                football
                </Text>
                <View>

<Text>Rules</Text>

<Text>
Football (Soccer) is one of the oldest sports in the world and with that; it’s also one of the most recognised. The pinnacle of the international game comes in the form the Football World Cup. There are also tournament such as the Euro Championships, Copa America and the African Cup of Nations. Domestically the strongest leagues come from England (English Premier League), Spain (La Liga), Italy (Serie A) and Germany (Bundesliga). In parts of the world the sport is also known as Soccer.
</Text>

<Text>Scoring System</Text>

<Text>
To score the ball must go into your opponent’s goal. The whole ball needs to be over the line for it to be a legitimate goal. A goal can be scored with any part of the body apart from the hand or arm up to the shoulder. The goal itself consists of a frame measuring 8 feet high and 8 yards wide.
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