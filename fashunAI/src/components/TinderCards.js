//React-native app code
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import database from './firebase';

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Steve Jobs",
      url: require('./stevejobs.jpg')
    },
    {
      name: "Bill Gates",
      url: require('./bill-gates.jpg')
    }
  ]);

  useEffect(() => {
    const unsubscribe = database.collection('people').onSnapshot(snapshot => {
      setPeople(snapshot.docs.map(doc => doc.data()));
    });

    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <View style={styles.cardContainer}>
      {people.map((person) => (
        <Swipeable key={person.name}>
          <View style={styles.card}>
            <Image source={person.url} style={styles.cardImage} />
            <Text>{person.name}</Text>
          </View>
        </Swipeable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 300,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 10,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  }
});

export default TinderCards;
