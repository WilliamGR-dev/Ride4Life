import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff'
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
  },
  btnImage: {
    height: 26,
    width: 26,
    tintColor: '#c5c5c5',
  },
  btnImageFocused: {
    tintColor: '#5597c7',
  },
  btnLabel: {
    color: '#c5c5c5',
    fontSize: 11,
    marginTop: 3,
  },
  btnLabelFocused: {
    color: '#5597c7',
  },
});
