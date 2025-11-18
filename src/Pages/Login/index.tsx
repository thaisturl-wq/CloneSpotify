
import React from 'react';
import { View, Text, TextInput, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { FontAwesome5, } from '@expo/vector-icons';
import { styles } from './style'; 

const LoginScreen: React.FC = () => {

  return (
   
    <ScrollView  style={{flex: 1, backgroundColor: '#000'}}
    
      ><View style={styles.container}>
          
       <Image 
          source={require('../../assets/LogoSpotifyBranco.png')} 
          style={styles.logo} 
        />
         <Text style={styles.title}>Olá de novo</Text>
          <Text style={styles.inputLabel}>E-mail ou nome de usuário</Text>
           <TextInput
             style={styles.inputField}
             placeholder="" 
             placeholderTextColor="#A7A7A7"
             keyboardType="email-address"
             />
             
               <TouchableOpacity 
                  style={styles.primaryButton}
                >
                  <Text style={styles.primaryButtonText}>Continuar</Text>
               </TouchableOpacity>
               <Text style={styles.separator}>ou</Text>
        
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome5 name="mobile-alt" size={20} color="white" />
          <Text style={styles.socialButtonText}>Continuar com um número de {'\n'}               telefone</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome5 name="google" size={20} color="green"  />
          <Text style={styles.socialButtonText}>  
                             Continuar com o Google</Text>
        </TouchableOpacity>
         
        <TouchableOpacity style={styles.socialButton} >
          <FontAwesome5 name="facebook" size={20} color="blue"  />
          <Text style={styles.socialButtonText}>Continuar com o Facebook</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome5 name="apple" size={20} color="white" />
          <Text style={styles.socialButtonText}>      Continuar com a Apple</Text>
        </TouchableOpacity>

        <Text style={styles.noAccountText}>Não tem uma conta?</Text>
        <TouchableOpacity>
          <Text style={styles.signupText}>Inscrever-se</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>
          Este site é protegido pelo reCAPTCHA e está sujeito à{' '}
          <Text style={styles.footerLink} onPress={() => Linking.openURL('https://policies.google.com/privacy')}>Política de Privacidade</Text>{' '}
          e aos{' '}
          <Text style={styles.footerLink} onPress={() => Linking.openURL('https://policies.google.com/terms')}>Termos de Serviço</Text> do Google.
        </Text>

      </View>
    </ScrollView>
  );
};

export default LoginScreen;
            



        
      
        
       