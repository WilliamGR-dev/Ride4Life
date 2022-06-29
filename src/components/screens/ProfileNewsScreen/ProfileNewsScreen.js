import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';

import styles from './ProfileNewsScreen.styles';

import {useNavigator} from '../../../hooks';

import useController from './ProfileNewsScreen.controller';
import SubmitButton from '../../buttons/SubmitButton/SubmitButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FallingModal from '../../modals/FallingModal/FallingModal';
import {useSelector} from 'react-redux';
import BackPressButton from '../../buttons/BackPressButton/BackPressButton';
import SuperFlatList from '../../extends/SuperFlatList/SuperFlatList';
import CommentsCard from '../../cards/CommentsCard/CommentsCard';

const ProfileNewsScreen = ({route, navigation}) => {
  const isFalling = useSelector(s => s.isFalling);

  const {data, refreshing, onRefresh} = useController(route.params.user_id);

  const {goToNew, goToUpdatePassword} = useNavigator();

  const renderItem = ({item}) => {
    console.log(item);
    return (
      <TouchableOpacity style={styles.news} onPress={() => goToNew(item.id)}>
        <Image
          style={styles.news_image}
          source={{
            uri: item.picture,
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      {isFalling.status && <FallingModal />}
      <View style={styles.header}>
        <BackPressButton color={'white'} />
        {data && <Text style={styles.name}>{data.author.username}</Text>}
      </View>
      <View style={styles.profile}>
        <View style={styles.container_picture}>
          {data && (
            <Image
              style={styles.profile_picture}
              source={{
                uri: data.author.profile_picture,
              }}
            />
          )}
        </View>
        <View style={styles.stat}>
          {data && <Text style={styles.stat_text}>{data.publications}</Text>}
          <Text style={styles.stat_text}>Publication</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.stat_text}>3</Text>
          <Text style={styles.stat_text}>Abonnés</Text>
        </View>
        <View style={styles.stat}>
          {data && <Text style={styles.stat_text}>{data.likes}</Text>}
          <Text style={styles.stat_text}>Like</Text>
        </View>
      </View>
      <View style={styles.account_container}>
        {data && (
          <SuperFlatList
            data={data.results}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            style={styles.list}
            isRefreshing={refreshing}
            onRefresh={onRefresh}
          />
        )}
      </View>
    </View>
  );
};

export default ProfileNewsScreen;
