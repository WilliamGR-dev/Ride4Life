import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {t} from 'react-i18nify';

import styles from './UpdateProfileScreen.styles';

import useController from './UpdateProfileScreen.controller';
import BackPressButton from '../../buttons/BackPressButton/BackPressButton';
import Feather from 'react-native-vector-icons/Feather';
import SubmitButton from '../../buttons/SubmitButton/SubmitButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FormTextInput from '../../inputs/FormTextInput/FormTextInput';
import FallingModal from '../../modals/FallingModal/FallingModal';
import {useSelector} from 'react-redux';

const UpdateProfileScreen = props => {
  const {
    picture,
    deletePicture,
    addPicture,
    username,
    setUsername,
    firstname,
    setFirstname,
    lastname,
    setLastName,
    email,
    setEmail,
    submit,
  } = useController(props);

  const isFalling = useSelector(s => s.isFalling);

  const renderImagePicker = () => {
    if (picture) {
      return (
        <View style={styles.card}>
          <View style={styles.owner}>
            <Image
              style={styles.profilePicture}
              source={{
                uri: 'https://cafe-racer-only.com/IMG/jpg/casque-moto-vintage-ruroc-atlas-3.0-fujin-2.jpg',
              }}
            />
            <View>
              <Text style={styles.username}>{username}</Text>
              <Text style={styles.created_at}>il y a 2 heures</Text>
            </View>
          </View>
          <View>
            <View style={styles.proofImageContainer}>
              <Image source={{uri: picture.path}} style={styles.picture} />
              <TouchableOpacity onPress={deletePicture} style={styles.cancel}>
                <FontAwesome name={'close'} size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.card}>
        <View style={styles.owner}>
          <Image
            style={styles.profilePicture}
            source={{
              uri: 'https://cafe-racer-only.com/IMG/jpg/casque-moto-vintage-ruroc-atlas-3.0-fujin-2.jpg',
            }}
          />
          <View>
            <Text style={styles.username}>{username}</Text>
          </View>
        </View>
        <View>
          <View style={styles.proofActionContainer}>
            <SubmitButton
              label={t('close_session_screen.from_camera')}
              onPress={() => addPicture('camera')}
              light
            />
            <SubmitButton
              label={'Ajouter depuis la galerie'}
              onPress={() => addPicture('gallery')}
              light
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      {isFalling.status && <FallingModal />}
      <View style={styles.postHeader}>
        <BackPressButton color={'#ffffff'} />
        <Text style={styles.title}>Modifier mon profile</Text>
        <TouchableOpacity style={styles.check}>
          <Feather onPress={submit} name={'save'} size={32} color={'#ffffff'} />
        </TouchableOpacity>
      </View>
      {renderImagePicker()}
      <FormTextInput
        style={styles.form}
        value={firstname}
        onChangeText={value => {
          setFirstname(value);
        }}
        placeholder="Votre prénom"
        label="Prénom"
      />
      <FormTextInput
        style={styles.form}
        value={lastname}
        onChangeText={value => {
          setLastName(value);
        }}
        placeholder="Votre nom"
        label="Nom"
      />
      <FormTextInput
        style={styles.form}
        value={email}
        onChangeText={value => {
          setEmail(value);
        }}
        placeholder="Votre email"
        label="Email"
      />
      <FormTextInput
        style={styles.form}
        value={username}
        onChangeText={value => {
          setUsername(value);
        }}
        placeholder="Votre pseudo"
        label="Pseudo"
      />
    </View>
  );
};

export default UpdateProfileScreen;
