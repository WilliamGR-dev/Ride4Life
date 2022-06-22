import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#242D3C',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  section: {
    width: '80%',
    backgroundColor: '#242D3C',
    borderRadius: 27,
    marginTop: 50,
    alignItems: 'center',
    paddingVertical: 40,
  },
  sectionText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: 10,
  },
  goBackBtn: {
    marginTop: 15,
  },
  goBackText: {
    color: '#ffffff',
    textDecorationLine: 'underline',
  },
  input: {
    width: '80%',
    marginTop: 7,
    marginBottom: 15,
  },
  infoText: {
    color: '#ffffff',
    fontSize: 13,
    marginHorizontal: 50,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default styles;
