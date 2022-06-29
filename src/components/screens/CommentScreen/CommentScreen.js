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

import styles from './CommentScreen.styles';

import useController from './CommentScreen.controller';
import HeaderBar from '../../others/HeaderBar/HeaderBar';
import LoadingIndicator from '../../others/LoadingIndicator/LoadingIndicator';
import SuperFlatList from '../../extends/SuperFlatList/SuperFlatList';
import RoadsCard from '../../cards/RoadsCard/RoadsCard';
import LinearGradient from 'react-native-linear-gradient';
import BackPressButton from '../../buttons/BackPressButton/BackPressButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import Feather from 'react-native-vector-icons/Feather';
import SubmitButton from '../../buttons/SubmitButton/SubmitButton';
import NewsCard from '../../cards/NewsCard/NewsCard';
import CommentsCard from '../../cards/CommentsCard/CommentsCard';
import FallingModal from '../../modals/FallingModal/FallingModal';
import {useSelector} from 'react-redux';
import AuthTextInput from '../../inputs/AuthTextInput/AuthTextInput';

const CommentScreen = ({route, navigation}) => {
  const {data, refreshing, onRefresh, postComment, comment, setComment} =
    useController(route.params.news_id);

  const isFalling = useSelector(s => s.isFalling);
  if (!data) {
    return <LoadingIndicator full />;
  }

  const renderItem = ({item}) => {
    return <CommentsCard comment={item} />;
  };

  return (
    <View style={styles.screen}>
      {isFalling.status && <FallingModal />}
      <View style={styles.commentHeader}>
        <BackPressButton color={'#ffffff'} />
        <Text style={styles.title}>Commentaires</Text>
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
      <View style={styles.send_message}>
        <Image
          style={styles.profilePicture}
          source={{
            uri: 'https://cafe-racer-only.com/IMG/jpg/casque-moto-vintage-ruroc-atlas-3.0-fujin-2.jpg',
          }}
        />
        <TextInput
          value={comment}
          onChangeText={setComment}
          placeholderTextColor={'#929292'}
          placeholder={'Ecrivez un message...'}
        />
        <SubmitButton
          onPress={postComment}
          label={'Envoyer'}
          width={'40%'}
          light_outline
          text_outline
        />
      </View>
    </View>
  );
};

export default CommentScreen;
