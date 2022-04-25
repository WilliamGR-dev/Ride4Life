import React from 'react';
import {TouchableOpacity} from 'react-native';

const HitSlopTouchableOpacity = props => {
  const hitSlop = props.hitSlop || 10;

  return (
    <TouchableOpacity
      {...props}
      hitSlop={{top: hitSlop, bottom: hitSlop, left: hitSlop, right: hitSlop}}
    />
  );
};

export default HitSlopTouchableOpacity;
