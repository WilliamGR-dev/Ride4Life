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
    borderRadius: 27,
    paddingVertical: 20,
    marginTop: 20,
    marginLeft: 75,
  },
  sectionText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: 15,
  },
  forgotPasswordText: {
    color: '#ffffff',
    textDecorationLine: 'underline',
    alignSelf: 'center',
    marginLeft: -75,
  },
  forgotPasswordBtn: {
    marginTop: 15,
  },
  registerText: {
    color: '#ffffff',
    textDecorationLine: 'underline',
  },
  registerBtn: {
    marginTop: 20,
  },
  input: {
    width: '80%',
    marginBottom: 15,
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
});

export default styles;
