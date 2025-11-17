import React from 'react';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/Pages/Home'; 
import LoginScreen from './src/Pages/Login';

export default function App() {
  return (
    <>
      <StatusBar style='light' /> 
       <HomeScreen />   
      {/* <LoginScreen/> */}
      
    </>
  );
}

// Nota: O StyleSheet.create que estava aqui pode ser removido, 
// pois a estilização é tratada dentro de HomeScreen.
