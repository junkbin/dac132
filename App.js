import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import AppContainer from './src/HomeScreen';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}