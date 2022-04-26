import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  section: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 27,
    marginTop: 20,
    alignItems: 'center',
  },
  sectionText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 10,
  },
  goBackBtn: {
    alignItems: 'flex-start',
    width: '90%',
  },
  input: {
    width: '80%',
    marginTop: 7,
    marginBottom: 15,
  },
  infoText: {
    color: '#656363',
    fontSize: 13,
    marginHorizontal: 50,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default styles;
