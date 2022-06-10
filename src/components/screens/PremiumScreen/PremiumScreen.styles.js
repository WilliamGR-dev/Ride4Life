import {StyleSheet} from 'react-native';

const avatarWidth = 150;

const styles = StyleSheet.create({
  screen: {flex: 1, height: '100%', backgroundColor: '#27313d'},
  section: {flex: 1},
  send_message: {flexDirection: 'row', alignItems: 'center'},
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'rgba(0,0,0,0.10)',
    borderBottomWidth: 2,
    paddingRight: 15,
  },
  check: {},
  container: {marginHorizontal: 15},
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  form: {
    marginHorizontal: 20,
    marginVertical: 5,
  },
  text: {},
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  card: {
    backgroundColor: '#FFFFFF',
  },
  owner: {
    marginVertical: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profilePicture: {
    height: 128,
    width: 128,
    borderRadius: 60,
    marginLeft: 10,
  },
  picture: {
    width: '95%',
    height: 380,
    margin: 10,
    borderRadius: 15,
  },
  cancel: {
    position: 'absolute',
    right: 35,
    top: 35,
    backgroundColor: '#ff6262',
    borderRadius: 60,
    padding: 15,
  },
});

export default styles;
