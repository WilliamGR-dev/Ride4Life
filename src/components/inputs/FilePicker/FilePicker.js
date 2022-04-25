import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {t} from 'react-i18nify';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';

import styles from './FilePicker.styles';

import useController from './FilePicker.controller';

const FilePicker = props => {
  const {selectFile, file} = useController(props);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={props.disabled}
        onPress={selectFile}
        style={styles.btn}>
        {!file && (
          <Text style={styles.chooseFile}>{t('file_picker.choose_file')}</Text>
        )}
        {!!file && (
          <Text numberOfLines={1} style={styles.fileName}>
            {file.name}
          </Text>
        )}
        <View style={styles.iconContainer}>
          {props.status === 'pending' && (
            <Feather name={'upload'} size={20} color={'#707070'} />
          )}
          {props.status === 'upload' && (
            <ActivityIndicator size={'small'} color="#5A98BE" />
          )}
          {props.status === 'error' && (
            <MaterialIcons name={'error'} size={22} color={'#ff0000'} />
          )}
          {props.status === 'passed' && (
            <Octicons name={'check'} size={22} color={'#258c00'} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FilePicker;
