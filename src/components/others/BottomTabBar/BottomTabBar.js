import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import useController from './BottomTabBar.controller';

import styles from './BottomTabBar.styles';

const BottomTabBar = ({state, descriptors, navigation}) => {
  const {keyboardVisible} = useController();

  const insets = useSafeAreaInsets();

  const tabBarHeight = 60 + insets.bottom;

  if (keyboardVisible) {
    return null;
  }

  const renderItem = (route, index) => {
    const {options} = descriptors[route.key];

    const isFocused = state.index === index;

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        // The `merge: true` option makes sure that the params inside the tab screen are preserved
        navigation.navigate({name: route.name, merge: true});
      }
    };

    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: route.key,
      });
    };

    return (
      <TouchableOpacity
        key={index}
        accessibilityRole="button"
        accessibilityState={isFocused ? {selected: true} : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.btn}>
        <Image
          source={isFocused ? options.tabBarImageS : options.tabBarImage}
          style={[styles.btnImage, isFocused && styles.btnImageFocused]}
        />
        <Text style={[styles.btnLabel, isFocused && styles.btnLabelFocused]}>
          {options.tabBarLabel}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      colors={['#1DB4C4', '#ECE423']}
      style={{...styles.container, height: tabBarHeight}}>
      {state.routes.map(renderItem)}
    </View>
  );
};

export default BottomTabBar;
