import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
  container: {
    flex: 1, 
    backgroundColor: '#000000', 
    paddingHorizontal: 30,
    paddingTop: 80,
    alignItems: 'center',
    paddingBottom: 40,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 4,
    
  },
  title: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  
  inputLabel: {
    color: '#d3cbcbff', 
    alignSelf: 'flex-start', 
    marginBottom: 10,
    marginLeft: 12,
    fontSize: 14,
    fontWeight: 700,

  },
  inputField: {
    width: 350,
    height: 50,
    backgroundColor: 'black', 
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 18,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#737373', 
  },

  primaryButton: {
    width: 350,
    height: 60,
    backgroundColor: '#1DB954', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50, 
    marginBottom: 10,
  },
  primaryButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  separator: {
    color: 'white', 
    fontSize: 14,
    marginBottom: 16,
  },
  
  socialButton: {
    width: 380,
    height: 60,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#A7A7A7',
    marginBottom: 6,
   
  },
  socialButtonText: {
    color: '#f8f4f4ff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 60,
  },
  
  signupText: {
    color: '#f1ececff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 10,
  },
  noAccountText: {
    color: '#A7A7A7',
    fontSize: 16,
    marginTop: 50, 
  },
  
  footerText: {
    color: '#adaaaaff',
    fontSize: 8,
    textAlign: 'center',
    paddingHorizontal: 15,
    marginTop: 20,
  },
  footerLink: {
    color: '#A7A7A7',
    textDecorationLine: 'underline',
  }
});