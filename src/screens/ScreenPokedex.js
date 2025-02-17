import { SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonApi, getPokemoInfonByApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

export default function ScreenPokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null)
  //console.log(`Pokemons ---> ${pokemons}`);

  useEffect(() => {
    (async () => {
      await loadPokemon();
    })();
  }, []);

  //Funcion para optener los datos de la api
  const loadPokemon = async () => {
    try {
      const response = await getPokemonApi(nextUrl);
      setNextUrl(response.next)
      const pokemonInfo = await Promise.all(
        response.results.map(async (resp) => {
          const detailsPokemon = await getPokemoInfonByApi(resp.url);
          return {
            id: detailsPokemon.id,
            name: detailsPokemon.name,
            type: detailsPokemon.types[0].type.name,
            order: detailsPokemon.order,
            image:
              detailsPokemon.sprites.other["official-artwork"].front_default,
          };
        })
      );

      setPokemons([...pokemons, ...pokemonInfo]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemon} isNext={nextUrl}/>
    </SafeAreaView>
  );
}

// const pokemonsArray = []
// for await (const pokemon of response.results) {
//   const pokemonDetails = await getPokemoInfonByApi(pokemon.url);
//   console.log(`Url --> ${pokemon.url}`);

//   pokemonsArray.push({
//     id: pokemonDetails.id,
//     name: pokemonDetails.name,
//     type: pokemonDetails.types[0].type.name,
//     order: pokemonDetails.order,
//     imagen:
//       pokemonDetails.sprites.other["official-artwork"].front_default,
//   });
// }
//  setPokemons([...pokemons, ...pokemonsArray]);

// const pokemonInfo = await Promise.all(
//   response.results.map(async (resp) => {
//     const detailsPokemon = await getPokemoInfonByApi(resp.url);
//     return {
//       id: detailsPokemon.id,
//       name: detailsPokemon.name,
//       type: detailsPokemon.types[0].type.name,
//       order: detailsPokemon.order,
//       image:
//         detailsPokemon.sprites.other["official-artwork"].front_default,
//     };
//   })
// );
