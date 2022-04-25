import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';

import styles from './SubmitButton.styles';

const SubmitButton = props => {
  let style = styles.dark;
  let text = styles.text;
  if (props.text_outline) {
    text = styles.text_outline;
  }
  if (props.disabled) {
    style = styles.disabled;
  } else if (props.light) {
    style = styles.light;
  } else if (props.light_outline) {
    style = styles.light_outline;
  } else if (props.red) {
    style = styles.red;
  }
  return (
    <TouchableOpacity
      {...props}
      disabled={props.disabled || props.isSubmitting}
      style={[
        styles.container,
        {width: props.width || '100%'},
        style,
        props.style,
      ]}>
      {!props.isSubmitting && <Text style={text}>{props.label}</Text>}
      {props.isSubmitting && (
        <ActivityIndicator size={'small'} color={'#FFF'} />
      )}
    </TouchableOpacity>
  );
};

export default SubmitButton;
