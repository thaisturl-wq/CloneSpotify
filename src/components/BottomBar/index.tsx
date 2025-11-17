
import React from 'react';
import { View, Text, Pressable } from 'react-native'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { barStyles } from './style'; 

const BottomBar: React.FC = () => {
  const navItems = [
    { name: 'Início', icon: 'home', isActive: true }, 
    { name: 'Buscar', icon: 'magnify', isActive: false },
    { name: 'Sua Biblioteca', icon: 'bookshelf', isActive: false },
    { name: 'Criar', icon: 'plus', isActive: false}
  ];

  return (
    <View style={barStyles.container}>
      {navItems.map((item, index) => (
        <Pressable key={index} style={barStyles.navItem}>
          <MaterialCommunityIcons 
            name={item.icon as any} 
            size={26} 
            color={item.isActive ? 'white' : 'gray'} 
          />
          <Text style={[barStyles.navText, item.isActive && barStyles.activeText]}>
            {item.name}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default BottomBar;