import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  bottomLoaderContainer: {
    height: 30,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightLoaderContainer: {
    width: 50,
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: '#888888',
  },
});
