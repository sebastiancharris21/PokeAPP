import { StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import {
  addPokemonFavoriteApi,
  isPokemonFavorite,
  deletePokemonFavorite,
} from "../../api/favorite";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Favorite1(props) {
  const { pokemon_id } = props;

  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reloadCheck, setReloadCheck] = useState(false);
  const Icon = isFavorite ? FontAwesome : FontAwesome5;

  //console.log("estado->", isFavorite);

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavorite(pokemon_id);
        //console.log("Resp->", await isPokemonFavorite(pokemon_id));
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [pokemon_id, reloadCheck]);

  const isReloadCheck = () => {
    setReloadCheck((prev) => !prev);
  };

  const addFavorite = async () => {
    try {
      await addPokemonFavoriteApi(pokemon_id);
      isReloadCheck();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFavotite = async () => {
    try {
      await deletePokemonFavorite(pokemon_id);
      isReloadCheck();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Icon
      name="heart"
      color={"#fff"}
      size={20}
      onPress={() => (isFavorite ? deleteFavotite() : addFavorite())}
      style={styles.icon}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 20,
  },
});
