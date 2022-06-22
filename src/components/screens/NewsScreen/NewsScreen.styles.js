import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  noPermissionContainer: {
    flex: 1,
    backgroundColor: '#242D3C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noPermissionText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  waitingContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  screen: {
    width: '100%',
    height: '100%',
  },
  title: {
    marginTop: 50,
    color: '#000',
    fontSize: 38,
    fontWeight: '500',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  section: {
    flex: 1,
    paddingHorizontal: 10,
  },
  list: {
    flex: 1,
  },
  buttonAdd: {
    position: 'absolute',
    bottom: 20,
    right: 32,
    backgroundColor: '#5597c7',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 64,
  },
  actionComment: {
    padding: 10,
    borderRadius: 32,
  },
  commentCountainer: {
    zIndex: 99,
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
  },
});

export default styles;
