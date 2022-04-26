import {StyleSheet} from 'react-native';

const avatarWidth = 180;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  profile: {
    padding: 40,
    alignItems: 'center',
  },
  container_picture: {
    marginBottom: 20,
    justifyItems: 'center',
    alignItems: 'center',
    width: 64,
    height: 64,
    backgroundColor: '#b3b3b3',
    justifyContent: 'center',
    borderRadius: 50,
  },
  profile_picture: {
    fontSize: 32,
    fontWeight: '500',
  },
  name: {
    textAlign: 'center',
    marginBottom: 5
  },
  join_date: {
    textAlign: 'center',
    marginBottom: 5
  },
  account_container: {
    borderWidth: 1,
    borderColor: "rgba(83,83,83,0.4)",
    paddingHorizontal: 20,
  },
  button_container: {
    paddingVertical: 10,
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
  },
  title_container: {
    paddingVertical: 10,
    fontSize: 18,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: avatarWidth / -2,
    marginBottom: 30,
  },
  modalItemBtn: {
    width: '80%',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  modalItemText: {
    color: '#535252',
    fontSize: 18,
    fontWeight: '300',
    textAlign: 'center',
  },
  modalItemTextRed: {
    color: '#D60101',
  },
  separator: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#707070',
    width: '80%',
  },
  sectionContainer: {
    flexDirection: 'row',
    width: '90%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  sectionKeyText: {
    fontSize: 18,
    color: '#535252',
  },
  sectionValueText: {
    marginTop: 5,
    fontSize: 18,
    color: '#1EB4C4',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#707070',
    alignItems: 'center',
    paddingVertical: 10,
  },
  headerContainer: {
    width: '100%',
    height: '30%',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 10,
  },
  headerLogo: {
    height: 60,
    width: 150,
    resizeMode: 'contain',
  },
  headerMenuBtn: {
    marginRight: 30,
    marginTop: 10,
  },
  headerMenuImg: {
    height: 40,
    width: 40,
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
});

export default styles;
