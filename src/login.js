import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function Login({navigation, route}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Page</Text>
      <Button
        title="로그인"
        onPress={() => {
          navigation.navigate('bottomTab');
          //navigation.navigate('Home');
          /*console.log(navigation); console.log(route);*/
        }}
      />
      <Button title="회원가입" onPress={() => navigation.navigate('signup')} />
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
