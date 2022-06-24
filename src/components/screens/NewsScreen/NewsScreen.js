import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './NewsScreen.styles';

import useController from './NewsScreen.controller';
import LoadingIndicator from '../../others/LoadingIndicator/LoadingIndicator';
import NewsCard from '../../cards/NewsCard/NewsCard';
import SuperFlatList from '../../extends/SuperFlatList/SuperFlatList';
import HitSlopTouchableOpacity from '../../extends/HitSlopTouchableOpacity/HitSlopTouchableOpacity';
import {t} from 'react-i18nify';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RNCamera} from 'react-native-camera';
import {useNavigator} from '../../../hooks';
import {useSelector} from 'react-redux';
import FallingModal from '../../modals/FallingModal/FallingModal';

const NewsScreen = props => {
  const isFalling = useSelector(s => s.isFalling);
  const {goToPostNews} = useNavigator();

  const {data, refreshing, onRefresh} = useController(props);

  if (!data) {
    return <LoadingIndicator full />;
  }

  const renderItem = ({item}) => {
    return <NewsCard news={item} />;
  };

  return (
    <View style={styles.screen}>
      {isFalling.status && <FallingModal />}
      <View style={styles.section}>
        <SuperFlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          style={styles.list}
          isRefreshing={refreshing}
          onRefresh={onRefresh}
        />
      </View>
      <TouchableOpacity style={styles.buttonAdd} onPress={goToPostNews}>
        <FontAwesome name={'plus'} color={'#ffffff'} size={26} />
      </TouchableOpacity>
    </View>
  );
};

export default NewsScreen;
