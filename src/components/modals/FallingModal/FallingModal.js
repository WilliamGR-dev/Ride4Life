import React from 'react';
import {View, Text, Modal} from 'react-native';
import styles from './FallingModal.styles';
import HitSlopTouchableOpacity from '../../extends/HitSlopTouchableOpacity/HitSlopTouchableOpacity';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useController from '../../modals/FallingModal/FallingModal.controller';

const FallingModal = props => {
  const {noProblem, gotProblem, remainingTime} = useController(props);
  return (
    <View>
      <Modal transparent={true}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Accident détecté</Text>
          <View style={styles.timerContainer}>
            <Text style={styles.timer}>{remainingTime} s</Text>
            <Text style={styles.preventions}>Avant alerte automatique</Text>
          </View>
          <View style={styles.buttonContainer}>
            <HitSlopTouchableOpacity
              style={styles.buttonContainerAlert}
              onPress={() => gotProblem()}>
              <View style={styles.iconContainer}>
                <MaterialIcons
                  name={'local-phone'}
                  size={22}
                  color={'#ffffff'}
                />
              </View>
              <Text style={styles.textButton}>J'appele le 112</Text>
            </HitSlopTouchableOpacity>
            <HitSlopTouchableOpacity
              style={styles.buttonContainerGood}
              onPress={() => noProblem()}>
              <View style={styles.iconContainer}>
                <MaterialIcons name={'check'} size={22} color={'#ffffff'} />
              </View>
              <Text style={styles.textButton}>Je vais bien</Text>
            </HitSlopTouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FallingModal;
