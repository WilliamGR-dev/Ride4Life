import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
  },
  btnImage: {
    height: 26,
    width: 26,
    tintColor: '#FFF',
  },
  btnImageFocused: {
    tintColor: '#FFF',
  },
  btnLabel: {
    color: '#FFF',
    fontSize: 11,
    marginTop: 3,
  },
  btnLabelFocused: {
    color: '#FFF',
  },
});
