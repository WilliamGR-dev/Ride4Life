import React from 'react';
import {View, Text, Modal, TouchableWithoutFeedback} from 'react-native';
import styles from './RoadFilterModal.styles';
import HitSlopTouchableOpacity from '../../extends/HitSlopTouchableOpacity/HitSlopTouchableOpacity';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useController from '../../modals/FallingModal/FallingModal.controller';
import FormDropDown from '../../inputs/FormDropDown/FormDropDown';

const RoadFilterModal = props => {
  const {choice, setChoice, choiceList} = useController(props);
  return (
    <View style={styles.modal}>
      <TouchableWithoutFeedback>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Filtre</Text>
          <FormDropDown
            style={styles.inputContainer}
            label={'DropDown'}
            value={choice}
            setValue={setChoice}
            list={choiceList}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default RoadFilterModal;
