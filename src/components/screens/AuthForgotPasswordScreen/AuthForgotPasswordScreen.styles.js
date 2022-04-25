import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  section: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 27,
    marginTop: 50,
    alignItems: 'center',
    paddingVertical: 40,
  },
  sectionText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 10,
  },
  goBackBtn: {
    marginTop: 15,
  },
  goBackText: {
    color: '#000000',
    textDecorationLine: 'underline',
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
