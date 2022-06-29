import {StyleSheet} from 'react-native';

const avatarWidth = 180;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#242D3C',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: '#ffffff',
    fontSize: 22,
  },
  profile: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container_picture: {
    justifyItems: 'center',
    alignItems: 'center',
    width: 128,
    height: 128,
    justifyContent: 'center',
    borderRadius: 50,
  },
  profile_picture: {
    width: 102,
    height: 102,
    borderRadius: 80,
    padding: 20,
  },
  stat: {
    marginHorizontal: 10,
  },
  list: {
    flex: 1,
  },
  stat_text: {
    textAlign: 'center',
    marginBottom: 5,
    color: '#ffffff',
  },
  join_date: {
    textAlign: 'center',
    marginBottom: 5,
    color: '#ffffff',
  },
  account_container: {
    flex: 1,
  },
  news: {
    marginTop: 40,
    width: '32.5%',
    height: 140,
    margin: 1,
  },
  news_image: {
    flex: 1,
  },
  button_container: {
    paddingVertical: 10,
    paddingLeft: 50,
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title_container: {
    marginLeft: 20,
    paddingVertical: 10,
    fontSize: 18,
    color: '#ffffff',
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
