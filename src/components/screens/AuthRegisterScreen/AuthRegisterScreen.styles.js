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
    width: '100%',
    backgroundColor: '#242D3C',
    borderRadius: 27,
    marginTop: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  sectionText: {
    alignSelf: 'flex-start',
    marginLeft: 40,
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: 10,
  },
  goBackBtn: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '90%',
  },
  logo: {
    alignSelf: 'center',
    width: 129,
    height: 15,
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
