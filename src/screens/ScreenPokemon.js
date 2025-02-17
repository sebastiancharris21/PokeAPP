import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonDetails } from "../api/pokemon";
import HeaderP from "../components/pokemon/HeaderP";
import Stats from "../components/pokemon/Stats";
import Types from "../components/pokemon/Types";
import Icon from "react-native-vector-icons/FontAwesome5";
import Favorite1 from "../components/pokemon/Favorite1";
import useAuth from "../hooks/useAuth";

export default function ScreenPokemon(props) {
  const {
    route: { params },
    navigation,
  } = props;

  const [pokemon, setPokemon] = useState(null);
  const { auth } = useAuth();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        auth ? <Favorite1 pokemon_id={pokemon?.id} /> : undefined,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color={"#fff"}
          size={20}
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation, params, pokemon]);

  //console.log(pokemon);

  //Gestianar la peticion Get
  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetails(params.id);
        //console.log(response);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <HeaderP
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Types types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}
