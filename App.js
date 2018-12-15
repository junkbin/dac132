import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import {HomeScreen, DetailScreen} from './src';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailScreen
  }, {
    initialRouteName: "Home"
  }
);

const AppContainer =  createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}