import React from 'react';
import {View, Text, Modal} from 'react-native';
import styles from './RoadFilterModal.styles';
import HitSlopTouchableOpacity from '../../extends/HitSlopTouchableOpacity/HitSlopTouchableOpacity';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useController from '../../modals/FallingModal/FallingModal.controller';
import FormDropDown from '../../inputs/FormDropDown/FormDropDown';

const RoadFilterModal = props => {
  const {choice, setChoice, choiceList} = useController(props);
  return (
    <View>
      <Modal transparent={true}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Filtre</Text>
          <FormDropDown
            label={'DropDown'}
            value={choice}
            setValue={setChoice}
            list={choiceList}
          />
        </View>
      </Modal>
    </View>
  );
};

export default RoadFilterModal;
