//React-native app code
import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const SwipeButtons = () => {
  return (
    <View style={styles.swipeButtons}>
      <TouchableOpacity style={styles.swipeButton}>
        <MaterialIcons name="replay" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.swipeButton}>
        <MaterialIcons name="close" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.swipeButton}>
        <MaterialIcons name="star" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.swipeButton}>
        <MaterialIcons name="favorite" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.swipeButton}>
        <MaterialIcons name="flash-on" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  swipeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  swipeButton: {
    padding: 10,
  },
});

export default SwipeButtons;