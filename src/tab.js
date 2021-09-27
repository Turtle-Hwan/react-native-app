import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Feed from './Feed';
import Home from './Home';
import login from './login';
import signup from './signup';

import bottomTab from './bottomTab';

const Stack = createStackNavigator();

const Tab = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          //height: 100,
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="signup" component={signup} />
      <Stack.Screen name="bottomTab" component={bottomTab} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
};

export default Tab;

/*
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default HomeScreen;
*/
