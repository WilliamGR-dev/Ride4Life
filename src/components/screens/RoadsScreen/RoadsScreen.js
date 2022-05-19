import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {t} from 'react-i18nify';

import styles from './RoadsScreen.styles';

import useController from './RoadsScreen.controller';
import LoadingIndicator from '../../others/LoadingIndicator/LoadingIndicator';
import SuperFlatList from '../../extends/SuperFlatList/SuperFlatList';
import RoadsCard from '../../cards/RoadsCard/RoadsCard';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigator} from '../../../hooks';

const RoadsScreen = props => {
  const {PostRoadTrip} = useNavigator();
  const {data, refreshing, onRefresh} = useController(props);

  if (!data) {
    return <LoadingIndicator full />;
  }

  const renderItem = ({item}) => {
    return <RoadsCard news={item} />;
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity onPress={PostRoadTrip}>
          <FontAwesome name={'plus'} size={16} />
        </TouchableOpacity>
        <Text style={styles.title}>{t('roads_screen.title')}</Text>
        <TouchableOpacity>
          <FontAwesome name={'filter'} size={16} />
        </TouchableOpacity>
      </View>
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
    </View>
  );
};

export default RoadsScreen;
