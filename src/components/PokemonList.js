import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
} from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons, loadPokemons, isNext } = props;

  const pokemonsLoad = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon, index) => String(index)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={style.flatListContainer}
      onEndReached={isNext && pokemonsLoad}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size={"large"}
            style={style.spinner}
            color={"#AEAEAE"}
          />
        )
      }
    />
  );
}
 
const style = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 10,
    marginTop: Platform.OS === "android" ? 25 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
