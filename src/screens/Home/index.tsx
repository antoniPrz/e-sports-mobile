import React from 'react';
import { View, Image, FlatList } from 'react-native';

import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';

import { GAMES } from '../../utils/games';
import { GameCard } from '../../components/GameCard';

export function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoImg} />

      <Heading
        title='Ecuentre su Duo'
        subtitle='Selecciona el juego que quieres jugar... '
      />

      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}
