/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import { WebView } from "react-native-webview";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 20, backgroundColor: "red" }}>
          <Text>Blah</Text>
        </View>
        <View style={{ flex: 1, overflow: "hidden" }}>
          <WebView
            style={{ height: 100 }}
            source={{ html: "<h1 style='font-size: 50px'>Hello World</h1>" }}
            originWhitelist={["*"]}
          />
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ height: 2000, backgroundColor: "red" }}>
            <Text>Blah</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
