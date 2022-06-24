import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    marginVertical: 10,
    marginLeft: 10,
  },
  cardBody: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 15,
    marginVertical: 10,
    paddingBottom: 20,
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
  },
  username: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  actionCountainer: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    position: 'absolute',
    bottom: 20,
    justifyContent: 'space-between',
    width: '100%',
  },
  likeCountainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  countLikes: {
    backgroundColor: 'rgba(241,241,241,0.5)',
    padding: 10,
    marginLeft: 5,
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
  cardText: {
    color: '#565656',
    fontSize: 16,
    marginTop: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  cardPlus: {
    color: 'rgba(86,86,86,0.4)',
    paddingHorizontal: 10,
    fontSize: 12,
    marginBottom: 10,
  },
  created_at: {
    color: '#949EAF',
    fontSize: 13,
    paddingHorizontal: 10,
  },
});

export default styles;
