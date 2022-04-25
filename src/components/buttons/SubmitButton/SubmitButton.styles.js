import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
    marginVertical: 7,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
  },
  text_outline: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  disabled: {
    backgroundColor: 'rgba(196,196,196,0.5)',
  },
  light: {
    backgroundColor: '#ffffff',
  },
  light_outline: {
    backgroundColor: 'rgba(255,255,255,0)',
    borderColor: '#ffffff',
    borderWidth: 4,
  },
  dark: {
    backgroundColor: '#000000',
  },
  red: {
    backgroundColor: '#ec2323',
  },
});

export default styles;
