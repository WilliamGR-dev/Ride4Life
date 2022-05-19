import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {},
  card: {},
  cardBackGround: {
    height: '100%',
  },
  linearGradient: {
    padding: 10,
    height: '100%',
  },
  cardBackGroundGradient: {
    background: 15,
  },
  cardTitle: {
    marginTop: 300,
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '800',
    paddingHorizontal: 20,
  },
  cardSubtitle: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  roadInformation: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingLeft: 15,
  },
  cardDistance: {
    marginTop: 15,
    marginBottom: 15,
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 5,
  },
  moreInformation: {
    height: 32,
    width: 32,
  },
  entrantCountainer: {
    marginTop: 10,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  entrants: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilePicture: {
    height: 32,
    width: 32,
    borderRadius: 20,
    marginLeft: -5,
  },
  otherEntrants: {
    height: 32,
    width: 32,
    borderRadius: 20,
    backgroundColor: '#282a2e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  entrantsText: {
    color: '#ffffff',
    fontSize: 8,
  },
});

export default styles;
