import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#242D3C',
    height: '100%',
  },
  owner: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 9,
  },
  profilePicture: {
    height: 48,
    width: 48,
    borderRadius: 32,
  },
  username: {
    fontSize: 16,
    color: 'white',
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
    flexWrap: 'wrap',
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
    width: '100%',
    height: '100%',
  },
  cardText: {
    color: '#ffffff',
    fontSize: 16,
    marginTop: 5,
    paddingHorizontal: 10,
  },
  created_at: {
    color: 'rgba(255,255,255,1)',
    fontSize: 12,
    paddingHorizontal: 10,
  },
  description: {
    width: '100%',
    marginTop: 20,
  },

  linearGradient: {height: '30%', flex: 1},
});

export default styles;
