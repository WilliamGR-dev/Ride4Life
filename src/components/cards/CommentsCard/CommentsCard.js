import React from 'react';
import {t} from 'react-i18nify';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';

import styles from './CommentsCard.styles';

import useController from './CommentsCard.controller';
import HitSlopTouchableOpacity from '../../extends/HitSlopTouchableOpacity/HitSlopTouchableOpacity';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigator} from '../../../hooks';

const CommentsCard = props => {
  const {isMore, setIsMore, numOfLines, onTextLayout, isLiked, setIsLiked} =
    useController(props);

  return (
    <View>
      <View style={styles.owner}>
        <Image
          style={styles.profilePicture}
          source={{
            uri: 'https://cafe-racer-only.com/IMG/jpg/casque-moto-vintage-ruroc-atlas-3.0-fujin-2.jpg',
          }}
        />
        <View style={styles.container}>
          <Text style={styles.username}>Spartan_25</Text>
          <Text style={styles.cardText}>
            Integer vitae nunc nisi. Vivamus sollicitudin nisl eu elit
            tristique, id ullamcorper nibh faucibus. Integer egestas in turpis
            at pellentesque. In nec elementum magna, quis rutrum tellus.
          </Text>
          <Text style={styles.created_at}>il y a 2 heures</Text>
        </View>
      </View>
    </View>
  );
};

export default CommentsCard;
