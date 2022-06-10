import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0F5959',
    margin: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  timerContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  timer: {
    fontSize: 18,
    padding: 20,
    borderRadius: 60,
    marginBottom: 30,
    backgroundColor: '#1D7373',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  preventions: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  buttonContainer: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainerAlert: {
    backgroundColor: '#F23030',
    borderRadius: 16,
    width: '80%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  buttonContainerGood: {
    backgroundColor: '#107361',
    borderRadius: 16,
    width: '80%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 60,
    borderColor: '#ffffff',
    borderWidth: 1,
    marginBottom: 20,
  },
});

export default styles;
