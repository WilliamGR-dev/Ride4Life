import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {flex: 1},
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
  owner: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '80%',
    marginHorizontal: 20,
  },
  container: {marginHorizontal: 15},
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  text: {},
  profilePicture: {
    height: 32,
    width: 32,
    marginHorizontal: 10,
    borderRadius: 32,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginVertical: 10,
    paddingVertical: 20,
    marginHorizontal: 10,
  },
  owner: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profilePicture: {
    height: 48,
    width: 48,
    borderRadius: 32,
    marginLeft: 10,
  },
  actionCountainer: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    position: 'absolute',
    bottom: 40,
    justifyContent: 'space-between',
    width: '100%',
  },
  actionUnlike: {
    backgroundColor: '#FC0B7B',
    padding: 10,
    borderRadius: 32,
  },
  actionLike: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 32,
  },
  actionComment: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 32,
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
  cardText: {
    color: '#565656',
    fontSize: 16,
    marginTop: 5,
    paddingHorizontal: 10,
  },
  cardPlus: {
    color: 'rgba(86,86,86,0.4)',
    paddingHorizontal: 10,
    fontSize: 12,
    paddingBottom: 10,
  },
  created_at: {
    color: 'rgba(86,86,86,0.2)',
    fontSize: 12,
    paddingHorizontal: 10,
  },
});

export default styles;
