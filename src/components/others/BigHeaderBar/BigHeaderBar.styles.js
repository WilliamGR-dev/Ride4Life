import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderBottomLeftRadius: Dimensions.get('window').width / 3,
    borderBottomRightRadius: Dimensions.get('window').width / 3,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  logo: {
    height: 120,
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: 32,
    color: 'white',
  },
});
