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
    width: '90%',
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
    marginTop: 15,
  },
  goBackText: {
    color: '#000000',
    textDecorationLine: 'underline',
  },
});

export default styles;
