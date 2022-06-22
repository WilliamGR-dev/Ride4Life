import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {flex: 1, backgroundColor: '#242D3C'},
  section: {flex: 1},
  send_message: {flexDirection: 'row', alignItems: 'center'},
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'rgba(0,0,0,0.10)',
    borderBottomWidth: 2,
  },
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
    color: '#ffffff',
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
    color: 'white',
  },
});

export default styles;
