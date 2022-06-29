import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import {t} from 'react-i18nify';

import styles from './MemberRoadScreen.styles';

import useController from './MemberRoadScreen.controller';
import LoadingIndicator from '../../others/LoadingIndicator/LoadingIndicator';
import SuperFlatList from '../../extends/SuperFlatList/SuperFlatList';
import BackPressButton from '../../buttons/BackPressButton/BackPressButton';
import FallingModal from '../../modals/FallingModal/FallingModal';
import {useSelector} from 'react-redux';

const MemberRoadScreen = ({route, navigation}) => {
  const {data, refreshing, onRefresh} = useController(route.params.road_id);

  const isFalling = useSelector(s => s.isFalling);
  if (!data) {
    return <LoadingIndicator full />;
  }

  const renderItem = ({item}) => {
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
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      {isFalling.status && <FallingModal />}
      <View style={styles.commentHeader}>
        <BackPressButton color={'#ffffff'} />
        <Text style={styles.title}>Participants</Text>
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

export default MemberRoadScreen;
