import { SafeAreaView, Text, Button } from "react-native";
import React, { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { getPokemonFavoriteApi } from "../api/favorite";
import { getPokemonDetails } from "../api/pokemon";
import PokemonList from "../components/PokemonList";
import NoLog from "../components/NoLog";

export default function Favorite() {
  const [pokemon, setPokemon] = useState([]);
  const { auth } = useAuth();

  //console.log(pokemon);

  useEffect(() => {
    if (auth) {
      (async () => {
        const response = await getPokemonFavoriteApi();
        const pokemons = await Promise.all(
          response.map(async (id) => {
            const value = await getPokemonDetails(id);
            return {
              id: value.id,
              name: value.name,
              type: value.types[0].type.name,
              order: value.order,
              image: value.sprites.other["official-artwork"].front_default,
            };
          })
        );
        setPokemon(pokemons);
      })();
    }
  }, [auth, pokemon]);

  return !auth ? <NoLog /> : <PokemonList pokemons={pokemon} />;
}
