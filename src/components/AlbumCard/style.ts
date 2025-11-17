import { StyleSheet, Dimensions } from 'react-native';


const CARD_WIDTH = Dimensions.get('window').width / 2 - 20; 

export const cardStyles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  image: {
    width: '100%',
    height: CARD_WIDTH,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
  },
});