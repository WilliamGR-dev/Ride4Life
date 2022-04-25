import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';

import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';

import BottomTabBar from '../../others/BottomTabBar/BottomTabBar';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const session = useSelector(s => s.session);

  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarImage: require('../../../assets/images/tabBar/profile.png'),
          tabBarImageS: require('../../../assets/images/tabBar/profile-s.png'),
          tabBarLabel: 'Profil',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
