import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
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
    backgroundColor: '#0C57E6',
  },
  light_outline: {
    backgroundColor: 'rgba(255,255,255,0)',
    borderColor: '#0C57E6',
    borderWidth: 1,
  },
  dark: {
    backgroundColor: '#000000',
  },
  red: {
    backgroundColor: '#ec2323',
  },
  road_trip: {
    backgroundColor: '#0C57E6',
    borderRadius: 12,
  },
  text_road_trip: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
