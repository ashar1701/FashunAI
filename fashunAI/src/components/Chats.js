//
// Chats.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Chats() {
  return (
    <View style={styles.chats}>
      <Text>Chats Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chats: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Chats;
