import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import styles from './Checkbox.styles';

const Checkbox = props => {
  return (
    <BouncyCheckbox
      size={20}
      fillColor="#1EB4C4"
      unfillColor="#FFFFFF"
      disableBuiltInState
      disableText
      {...props}
      iconStyle={[styles.icon, props.iconStyle]}
    />
  );
};

export default Checkbox;
