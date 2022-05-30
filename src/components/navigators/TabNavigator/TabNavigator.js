import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';

import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';

import BottomTabBar from '../../others/BottomTabBar/BottomTabBar';
import MapScreen from '../../screens/MapScreen/MapScreen';
import NewsScreen from '../../screens/NewsScreen/NewsScreen';
import RoadsScreen from '../../screens/RoadsScreen/RoadsScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const session = useSelector(s => s.session);

  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      sceneContainerStyle={{backgroundColor: '#27313d'}}>
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarImage: require('../../../assets/images/tabBar/map.png'),
          tabBarImageS: require('../../../assets/images/tabBar/map-s.png'),
        }}
      />
      <Tab.Screen
        name="Roads"
        component={RoadsScreen}
        options={{
          tabBarImage: require('../../../assets/images/tabBar/route-solid.png'),
          tabBarImageS: require('../../../assets/images/tabBar/route-solid-s.png'),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarImage: require('../../../assets/images/tabBar/news.png'),
          tabBarImageS: require('../../../assets/images/tabBar/news-s.png'),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarImage: require('../../../assets/images/tabBar/profile.png'),
          tabBarImageS: require('../../../assets/images/tabBar/profile-s.png'),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
