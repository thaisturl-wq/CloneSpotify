import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { cardStyles } from './style'; 

interface AlbumCardProps {
  title: string;
  imageUrl: ImageSourcePropType; 
}

const AlbumCard: React.FC<AlbumCardProps> = ({ title, imageUrl }) => {
  return (
    <View
    style={cardStyles.card}>
      <Image 
        source={imageUrl} 
        style={cardStyles.image} 
      />
      <Text style={cardStyles.title} numberOfLines={3}>
        {title}
      </Text>
    </View>
  );
};

export default AlbumCard;