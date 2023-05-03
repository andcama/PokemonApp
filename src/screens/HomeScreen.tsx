import React from 'react'
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated'
import { PokemonCard } from '../components/PokemonCard'

export const HomeScreen = () => {


  const { top } = useSafeAreaInsets();
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();
  return (
    <>

      <Image source={require('../assets/pokebola.png')} style={styles.pokebolaBG} />
      <View style={{
        ...styles.globalMargin,
        alignItems: 'center'
      }}>
        <FlatList
          ListHeaderComponent={(
            <Text style={{
              ...styles.title,
              top: top + 20,
              ...styles.globalMargin, marginBottom: top + 20
            }}>Pokemon</Text>
          )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={simplePokemonList}
          renderItem={({ item }) => (
            <PokemonCard pokemon={item} />
          )}
          keyExtractor={(pokemon) => pokemon.id}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={<ActivityIndicator style={{ height: 100 }} size={20}
            color="grey" />} />
      </View>


    </>
  )
}
