import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btn: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#AAA9A9',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    width: '100%',
  },
  chooseFile: {
    color: '#AAA9A9',
    flex: 1,
    marginHorizontal: 15,
  },
  fileName: {
    color: '#000',
    flex: 1,
    marginHorizontal: 15,
  },
  iconContainer: {
    height: 45,
    width: 45,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
