import { StyleSheet } from 'react-native';

export const barStyles = StyleSheet.create({
  container: {
    position: 'absolute', 
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#181818', 
    paddingVertical: 10,
    paddingBottom: 25, 
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: 'gray',
    fontSize: 10,
    marginTop: 4,
  },
  activeText: {
    color: 'white',
    fontWeight: 'bold',
  }
});