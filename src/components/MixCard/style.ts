import { StyleSheet, Dimensions } from 'react-native';

const JanelaCard = Dimensions.get('window').width * 0.4; 

export const mixCardStyles = StyleSheet.create({
  card: {
    width: JanelaCard,
    marginRight: 15, 
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1, 
    marginBottom: 8,
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    resizeMode: 'cover',
  },
  mixTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  mixSubtitle: {
    color: '#A7A7A7',
    fontSize: 12,
    marginTop: 4,
  },
  overlayText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  }
});