import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import { Input } from "react-native-elements";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import database from "../config/firebase_Config";
import firebase from "firebase";

export default class WriteStoryScreen extends Component {
  constructor() {
    super();
    this.state = {
      Title: "",
      Author: "",
      Story: "",
    };
  }

  submitData = async (title, author, story) => {
    this.props.navigation.navigate("ReadStoryScreen");
    database.collection("Stories").add({
      Title: title,
      Author: author,
      Story: story,
      PublishedAt: new firebase.firestore.Timestamp.now().toDate(),
    });
  };

  render() {
    return (
      <View>
        <Header
          backgroundColor="tomato"
          centerText="Write Stories"
          textColor="white"
        />
        <View style={styles.inputView}>
          <View style={{ marginTop: 50, width: "60%" }}>
            <Input
              placeholder="Title Of The Story"
              leftIcon={
                <MaterialIcons name="title" size={24} color="#86939E" />
              }
              value={this.state.Title}
              onChangeText={(Title) => this.setState({ Title: Title })}
              style={{ outline: "none" }}
            />
          </View>

          <View style={{ marginTop: 30, width: "60%" }}>
            <Input
              placeholder="Author Of The Story"
              leftIcon={
                <Ionicons name="person-add-sharp" size={24} color="#86939E" />
              }
              value={this.state.Author}
              onChangeText={(Author) => this.setState({ Author: Author })}
              style={{ outline: "none" }}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 30,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="Write Your Story Here !"
            multiline={true}
            style={{
              fontSize: 18,
              flexWrap: "wrap",
              width: "60%",
              height: 200,
              borderColor: "#86939E",
              borderWidth: 2,
              borderRadius: 10,
              outline: "none",
            }}
            value={this.state.Story}
            onChangeText={(Story) => this.setState({ Story: Story })}
          />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              this.submitData(
                this.state.Title,
                this.state.Author,
                this.state.Story
              );

              this.setState({ Title: "", Author: "", Story: "" });
            }}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputView: {
    flex: 1,
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: "#FBC02D",
    width: 100,
    height: 50,
    borderRadius: 10,
    marginTop: 20,
  },
  submitButtonText: {
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
