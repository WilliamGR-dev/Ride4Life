import {StyleSheet} from 'react-native';

const avatarWidth = 150;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  scroll: {
    flex: 1,
  },
  title: {
    color: '#000',
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
    paddingHorizontal: 50,
    marginBottom: 5,
  },
  warningIncompleteText: {
    color: '#e01e1e',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    paddingHorizontal: 50,
  },
  contactToUpdateText: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 50,
    marginBottom: 20,
  },
  form: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 15,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  countryPickerContainer: {
    position: 'absolute',
    height: '100%',
    paddingTop: 13,
    paddingLeft: 7,
  },
  phoneNumberInput: {
    flex: 1,
  },
  phoneNumberFlagIcon: {
    paddingLeft: 50,
  },
  outsideNavigator: {
    height: 30,
  },
  avatarImg: {
    width: avatarWidth,
    height: avatarWidth,
    borderRadius: avatarWidth / 2,
    backgroundColor: '#eeefef',
  },
  noAvatarContainer: {
    width: avatarWidth,
    height: avatarWidth,
    borderRadius: avatarWidth / 2,
    overflow: 'hidden',
  },
  noAvatarImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    tintColor: '#cdcdcd',
    backgroundColor: 'grey',
  },
  avatarAddBtn: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: '#1EB4C4',
    borderRadius: 15,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 2,
  },
  avatarContainer: {
    marginBottom: 20,
  },
  profile_picture_info: {
    fontSize: 12,
    color: '#000',
    marginHorizontal: 30,
    marginBottom: 30,
    textAlign: 'justify',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  isVehiculedLabel: {
    color: '#000',
    marginLeft: 10,
    fontSize: 14,
  },
  checkboxIcon: {
    borderColor: '#7C7C7C',
  },
  maxDistanceLabel: {
    color: '#000',
    fontSize: 14,
  },
  sliderContainer: {},
});

export default styles;
