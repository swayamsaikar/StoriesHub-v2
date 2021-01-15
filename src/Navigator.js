import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import ReadStoryScreen from "./Screens/ReadStoryScreen";
import WriteStoryScreen from "./Screens/WriteStoryScreen";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

export default class Navigator extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createBottomTabNavigator(
  {
    WriteStoryScreen: {
      screen: WriteStoryScreen,
      navigationOptions: {
        tabBarIcon: () => (
          <MaterialCommunityIcons name="pencil-plus" size={28} color="black" />
        ),
        title: "Write Stories",
      },
    },
    ReadStoryScreen: {
      screen: ReadStoryScreen,
      navigationOptions: {
        tabBarIcon: () => (
          <FontAwesome5 name="book-reader" size={28} color="tomato" />
        ),
        title: "Read Stories",
      },
    },
  },

  {
    initialRouteName: "WriteStoryScreen",
    tabBarOptions: {
      activeTintColor: "#000",
      inactiveTintColor: "#626661",
      labelStyle: {
        fontWeight: "bold",
        fontSize: 14,
      },
      style: { height: 60 },
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);
