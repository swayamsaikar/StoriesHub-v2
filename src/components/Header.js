import React, { Component } from "react";
import { Touchable } from "react-native";
import { Text, StyleSheet, View, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Header extends Component {
  render() {
    return (
      <View
        style={[
          styles.HeaderStyle,
          { backgroundColor: this.props.backgroundColor },
        ]}
      >
        <View style={styles.flex}>
          <Text style={[styles.HeaderText, { color: this.props.textColor }]}>
            {this.props.centerText}
          </Text>
          <TouchableOpacity onPress={this.props.onPressForRefresh}>
            {this.props.pressableForRefresh}
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.onPressForDelete}>
            {this.props.pressableForDelete}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  HeaderStyle: {
    marginTop: StatusBar.currentHeight,
  },
  HeaderText: {
    padding: 10,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "900",
  },
  flex: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
