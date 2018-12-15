import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

export class DetailScreen extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor:'royalblue', flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{fontSize:60, color:'ghostwhite', fontFamily:'cursive'}}>Detail Screen</Text>

        <Button title="HOME HERE" onPress={() => this.props.navigation.navigate('Home')}></Button>
      </View>
    );
  }
}
