import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1d2635',
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
