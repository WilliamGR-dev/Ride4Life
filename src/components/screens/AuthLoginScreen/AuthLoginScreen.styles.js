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
    marginBottom: 15,
  },
  forgotPasswordText: {
    color: '#000000',
    textDecorationLine: 'underline',
  },
  forgotPasswordBtn: {
    marginTop: 15,
  },
  registerText: {
    color: '#000000',
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
    alignItems: 'flex-start',
    width: '90%',
  },
});

export default styles;
