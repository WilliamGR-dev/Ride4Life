import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {flex: 1, backgroundColor: '#242D3C'},
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
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  username: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  card: {
    borderRadius: 15,
    marginVertical: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  cardBody: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 15,
    marginVertical: 10,
    paddingBottom: 20,
  },
  profilePicture: {
    height: 48,
    width: 48,
    borderRadius: 32,
  },
  actionCountainer: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    position: 'absolute',
    bottom: 10,
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
    width: '100%',
    height: 380,
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
    color: '#000000',
    fontSize: 16,
    marginTop: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  cardPlus: {
    color: '#949EAFx',
    paddingHorizontal: 10,
    fontSize: 14,
    paddingBottom: 10,
  },
  created_at: {
    color: '#949EAF',
    fontSize: 12,
    paddingHorizontal: 10,
  },
});

export default styles;
