import React from 'react';
import {View, Text} from 'react-native';
import {DefaultTheme, TextInput} from 'react-native-paper';

import styles from './FormTextInput.styles';

const theme = {
  dark: false,
};

const FormTextInput = props => {
  return (
    <View style={props.style}>
      <TextInput
        ref={props.inputRef}
        mode="flat"
        returnKeyType={'done'}
        underlineColor={'#ffffff'}
        activeUnderlineColor={'#2282e6'}
        selectionColor={'#2282e6'}
        placeholderTextColor={props.error ? 'red' : '#ffffff'}
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
