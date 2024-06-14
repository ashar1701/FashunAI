//React-native app code
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

function Header({ backButton }) {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      {backButton ? (
        <TouchableOpacity onPress={() => navigation.navigate(backButton)}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <MaterialIcons name="person" size={24} color="black" />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image source={require('./tinder-logo.png')} style={styles.logo} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
        <MaterialIcons name="forum" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
};

export default Header;
