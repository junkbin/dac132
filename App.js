import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import {HomeScreen} from './src/HomeScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer =  createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}