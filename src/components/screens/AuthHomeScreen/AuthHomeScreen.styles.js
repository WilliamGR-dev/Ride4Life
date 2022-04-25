import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
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
    color: '#000000',
    marginBottom: 10,
  },
});

export default styles;
