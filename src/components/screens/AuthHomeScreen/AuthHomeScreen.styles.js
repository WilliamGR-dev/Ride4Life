import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {},
  logo: {
    alignSelf: 'center',
    marginTop: 100,
    width: 177,
    height: 100,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  section: {
    width: '90%',
    marginBottom: 80,
    alignItems: 'center',
    paddingVertical: 40,
  },
  sectionText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: 10,
  },
});

export default styles;
