import React from 'react';
import { View, Text, Image, Pressable, ImageSourcePropType } from 'react-native';
import { mixCardStyles } from './style'; 

interface MixCardProps {
  title: string;
  subtitle?: string;
  imageUrl: ImageSourcePropType;
  overlayText: string; 
}

const MixCard: React.FC<MixCardProps> = ({ title, subtitle, imageUrl, overlayText }) => {
  return (
    <Pressable style={mixCardStyles.card}>
      <View style={mixCardStyles.imageContainer}>
        <Image 
          source={imageUrl} 
          style={mixCardStyles.image} 
        />
        <Text style={mixCardStyles.overlayText}>{overlayText}</Text>
      </View>
      <Text style={mixCardStyles.mixTitle} numberOfLines={1}>
        {title}
      </Text>
      <Text style={mixCardStyles.mixSubtitle} numberOfLines={2}>
        {subtitle}
      </Text>
    </Pressable>
  );
};

export default MixCard;