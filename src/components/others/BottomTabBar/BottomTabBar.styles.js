import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 9999,
    width: '90%',
    borderRadius: 13,
    bottom: 0,
    margin: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0A111D',
    paddingTop: 15,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
  },
  btnImage: {
    height: 26,
    width: 26,
    tintColor: '#c5c5c5',
  },
  btnImageFocused: {
    tintColor: '#0C57E6',
  },
  btnLabel: {
    color: '#c5c5c5',
    fontSize: 11,
    marginTop: 3,
  },
  btnLabelFocused: {
    color: '#0C57E6',
  },
});
