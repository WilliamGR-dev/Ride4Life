import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderRadius: 32,
  },
  cardBackGround: {
    borderRadius: 32,
    marginVertical: 10,
    overflow: 'hidden',
  },
  linearGradient: {
    padding: 20,
  },
  cardBackGroundGradient: {
    background: 15,
  },
  cardTitle: {
    marginTop: 200,
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '800',
    paddingHorizontal: 20,
  },
  cardSubtitle: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 20,
  },
  roadInformation: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  cardDistance: {
    marginTop: 30,
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 20,
  },
  moreInformation: {
    height: 32,
    width: 32,
  },
});

export default styles;
