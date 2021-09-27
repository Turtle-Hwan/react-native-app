import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import Tab from './tab';
import Home from './Home';
import Feed from './Feed';

const Btab = createBottomTabNavigator();

export default function bottomTab() {
  return (
    <Btab.Navigator>
      <Btab.Screen name="Home" component={Home} />
      <Btab.Screen name="Feed" component={Feed} />
    </Btab.Navigator>
  );
}
