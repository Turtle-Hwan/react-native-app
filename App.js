import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import Tab from './src/tab';

export default function App() {
  return (
    <NavigationContainer>
      <Tab />
    </NavigationContainer>
  );
}

/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello!!</Text>
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
  },
});
*/
