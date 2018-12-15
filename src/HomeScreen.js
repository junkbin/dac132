import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

export class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor:'royalblue', flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{fontSize:60, color:'ghostwhite', fontFamily:'cursive'}}>Hello Home</Text>

        <Button title="DETAILS HERE" onPress={() => this.props.navigation.navigate('Details')}></Button>
      </View>
    );
  }
}
