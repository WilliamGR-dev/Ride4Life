import React from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';

import styles from './FormTextInput.styles';

const theme = {
  colors: {
    primary: '#757575',
  },
  dark: false,
};

const FormTextInput = props => {
  return (
    <View style={props.style}>
      <TextInput
        ref={props.inputRef}
        mode="outlined"
        returnKeyType={'done'}
        underlineColor={'transparent'}
        placeholderTextColor={props.error ? 'red' : '#707070'}
        dense
        theme={theme}
        {...props}
        style={[styles.input, props.inputStyle]}
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

export default FormTextInput;
