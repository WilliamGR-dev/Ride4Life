import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DropDown from '../../extends/DropDown/DropDown';

import styles from './FormDropDown.styles';

const theme = {
  colors: {
    primary: '#757575',
  },
  dark: false,
};

const FormDropDown = props => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={props.style}>
      <DropDown
        mode={'outlined'}
        dense
        theme={theme}
        underlineColor={'transparent'}
        inputProps={{
          underlineColor: 'transparent',
          placeholderTextColor: props.error ? 'red' : '#707070',
          dense: true,
          multiline: props.multiline,
          style: [styles.input, props.inputStyle],
          error: props.error,
          autoCorrect: false,
          disabled: props.disabled,
        }}
        visible={isVisible}
        showDropDown={() => setIsVisible(true)}
        onDismiss={() => setIsVisible(false)}
        {...props}
      />
      {!props.error ||
      (typeof props.error !== 'string' &&
        !Array.isArray(props.error)) ? null : (
        <Text style={styles.errorText}>
          {Array.isArray(props.error) ? props.error.join('\n') : props.error}
        </Text>
      )}
    </View>
  );
};

export default FormDropDown;
