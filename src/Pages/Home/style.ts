import { StyleSheet, Dimensions } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 60,
      },
      
    fotobebe:{
      width: 30,
      height: 30,
      borderRadius:15,
      marginRight:10,
    },

  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  filterContainer: {
    
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  filterButton: {
    color: 'white',
    backgroundColor: '#202020',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  filterActive: {
    backgroundColor: 'green',
    color: 'black',
  },

   horizontalCardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  smallCard: {
    width: WINDOW_WIDTH * 0.45, 
    height: 55,
    backgroundColor: '#282828',
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallCardImage: {
    width: 55,
    height: 55,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    marginRight: 8,
    resizeMode: 'cover',
  },
  smallCardText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    flexShrink: 1, 
  },

    sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
});