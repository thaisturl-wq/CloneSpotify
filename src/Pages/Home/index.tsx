import React from 'react';
import { View, Text, ScrollView, FlatList, Pressable, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MixCard from '../../components/MixCard'; 
import BottomBar from '../../components/BottomBar';   
import { homeStyles } from './style'; 

const HorizontalCardsData = [
  { id: '1', title: 'Músicas Curtidas', iconName: null, color: null, imageUrl: require('../../assets/musicascurtidas.jpg') },
  { id: '2', title: 'Rádio de Complicated', iconName: null , color: null, imageUrl: require( '../../assets/complicated.jpg' )},
  { id: '3', title: 'Minha playlist #11', iconName: null, color: null, imageUrl: require( '../../assets/minha_playlist.jpg') },
  { id: '4', title: 'Mix de Taylor Swift', iconName: null, color: null, imageUrl: require( '../../assets/taylor_mix.jpg') },
  // { id: '4', title: 'Mix de Taylor Swift', iconName: null, color: null, imageUrl: require( '../../assets/taylor_mix.jpg') },
  // { id: '5', title: 'Mix de Taylor Swift', iconName: null, color: null, imageUrl: require( '../../assets/taylor_mix.jpg') },
  // { id: '6', title: 'Mix de Taylor Swift', iconName: null, color: null, imageUrl: require( '../../assets/taylor_mix.jpg') },
  ];
const MixesData = [
  { id: 'm1', overlay: 'Mix anos 2000', title: 'Britney Spears, Jorge & Mateus, Rihanna e mais', imageUrl: require('../../assets/mix_anos_2000.jpg') },
  { id: 'm2', overlay: 'Mix rock', title: 'Lynyrd Skynyrd, System Of A Down, Metallica e...', imageUrl: require('../../assets/mix_rock.jpg') },
  { id: 'm3', overlay: 'Mix Diego & Cristiano', title: 'Diego & Cristiano, ...', imageUrl: require('../../assets/mix_sertanejo.jpg') },
];

const SaudadeData = [
  { id: 's1', overlay: 'Rádio', title: 'Marília Mendonça', subtitle: 'A Rainha da Sofrência', imageUrl: require('../../assets/marilia.png') },
  { id: 's2', overlay: 'Rádio', title: 'You & I', subtitle: 'One Direction, ...', imageUrl: require('../../assets/one_direction_saudade.jpg') },
];

const HomeScreen: React.FC = () => {
  return (
    <View style={homeStyles.container}>
           
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        
               <View style={homeStyles.header}>
            <View style={homeStyles.headerLeft}>
                <View style={homeStyles.profileIcon}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>T</Text>
                </View>
                <Text style={homeStyles.headerTitle}>Boa Tarde</Text> 
            </View>
            <MaterialCommunityIcons name="bell-outline" size={26} color="white" />
        </View>

        {/* 2. Filtros (Tudo, Música, Podcasts) */}
        <View style={homeStyles.filterContainer}>
            <Text style={[homeStyles.filterButton, homeStyles.filterActive]}>Tudo</Text>
            <Text style={homeStyles.filterButton}>Música</Text>
            <Text style={homeStyles.filterButton}>Podcasts</Text>
        </View>

        {/* 3. Cards Pequenos (Músicas Curtidas, Rádios, Mixes) - Layout em Duas Colunas */}
        {/* Usamos FlatList, mas como são poucos itens, View e Flexbox seria suficiente */}
        <View style={homeStyles.horizontalCardsGrid}>
            {HorizontalCardsData.map(item => (
                <Pressable key={item.id} style={homeStyles.smallCard}>
                    <Image source={item.imageUrl} style={homeStyles.smallCardImage} />  
                    <Text style={homeStyles.smallCardText}>{item.title}</Text>
                    </Pressable>
            ))}
        </View>


        <Text style={homeStyles.sectionTitle}>Seus mixes mais ouvidos</Text>
        <FlatList
          data={MixesData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <MixCard 
              overlayText={item.overlay} 
              title={item.title} 
              imageUrl={item.imageUrl}
            />
          )}
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 20}}
        />

        {/* 5. Suas músicas estão com saudade (Horizontal Scroll) */}
        <Text style={homeStyles.sectionTitle}>Suas músicas estão com saudade</Text>
        <FlatList
          data={SaudadeData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <MixCard 
              overlayText={item.overlay} 
              title={item.title} 
              subtitle={item.subtitle} 
              imageUrl={item.imageUrl}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 20}}
        />
        
       
        <View style={{height: 50}} />

      </ScrollView>
      
            <BottomBar /> 
      
    </View>
  );
};

export default HomeScreen;