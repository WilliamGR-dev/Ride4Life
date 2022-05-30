import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderRadius: 32,
  },
  cardBackGround: {
    borderRadius: 32,
    marginVertical: 10,
  },
  linearGradient: {
    padding: 20,
    borderRadius: 32,
    overflow: 'visible',
    marginVertical: 20,
  },
  cardBackGroundGradient: {
    background: 15,
  },
  cardTitle: {
    marginTop: 50,
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '800',
    paddingHorizontal: 20,
  },
  cardSubtitle: {
    color: '#C5C5C5',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 20,
  },
  roadInformation: {
    flexDirection: 'row',
    alignItems: 'space-around',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: -50,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingVertical: 20,
  },
  cardDistance: {
    color: 'rgba(62,62,62,0.56)',
    fontSize: 15,
    paddingHorizontal: 10,
    fontWeight: '400',
  },
  moreInformation: {
    height: 32,
    width: 32,
  },
});

export default styles;
