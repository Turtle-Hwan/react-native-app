import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function Login({navigation, route}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Page</Text>
      <Button title="로그인" />
      <Button title="회원가입" />
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
