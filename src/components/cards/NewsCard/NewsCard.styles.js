import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 15,
    marginVertical: 10,
    paddingVertical: 20,
    marginLeft: 10,
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
  username: {
    fontSize: 16,
    fontWeight: 'bold',
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
  likeCountainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionUnlike: {
    backgroundColor: '#FC0B7B',
    padding: 5,
    borderRadius: 32,
  },
  actionLike: {
    backgroundColor: '#f1f1f1',
    padding: 5,
    borderRadius: 32,
  },
  countLikes: {
    backgroundColor: 'rgba(241,241,241,0.5)',
    padding: 5,
    marginLeft: 5,
    borderRadius: 32,
  },
  actionComment: {
    backgroundColor: '#f1f1f1',
    padding: 5,
    borderRadius: 32,
  },
  picture: {
    width: '95%',
    height: 380,
    margin: 10,
    borderRadius: 15,
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
