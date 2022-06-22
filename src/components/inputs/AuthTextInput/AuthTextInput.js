import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';

import styles from './AuthTextInput.styles';

const theme = {
  colors: {
    primary: '#1EB4C4',
  },
  dark: false,
};

const AuthTextInput = props => {
  const [secureTextEntry, setSecureTextEntry] = useState(props.secureTextEntry);

  return (
    <TextInput
      ref={props.inputRef}
      mode="outlined"
      returnKeyType={'done'}
      outlineColor={props.error ? 'red' : '#ffffff'}
      placeholderTextColor={props.error ? 'red' : '#ffffff'}
      dense
      theme={theme}
      right={
        props.secureTextEntry && (
          <TextInput.Icon
            name={secureTextEntry ? 'eye' : 'eye-off'}
            onPress={() => setSecureTextEntry(!secureTextEntry)}
          />
        )
      }
      {...props}
      style={[styles.input, props.style]}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default AuthTextInput;
