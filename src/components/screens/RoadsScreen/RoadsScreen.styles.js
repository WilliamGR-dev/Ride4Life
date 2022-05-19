import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    color: '#000',
    fontSize: 32,
    fontWeight: '500',
    textAlign: 'center',
  },
  section: {
    flex: 1,
    marginVertical: 15,
    paddingHorizontal: 30,
  },
  list: {
    flex: 1,
  },
});

export default styles;
