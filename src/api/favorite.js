import AsyncStorage from "@react-native-async-storage/async-storage";
//import { includes, pull, result } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants";

//funcion para agregar pokemones a favoritos
export async function addPokemonFavoriteApi(id) {
  try {
    const favorites = await getPokemonFavoriteApi();
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}

//funcion obetener pokemos de favoritos
export async function getPokemonFavoriteApi() {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    if (!response) {
      return [];
    }
    return JSON.parse(response);
  } catch (error) {
    throw error;
  }
}

//Funcion para revisar si el id se encuentra repetido
export async function isPokemonFavorite(id) {
  try {
    const response = await getPokemonFavoriteApi();
    return response.includes(id);
  } catch (error) {
    throw error;
  }
}

//funcion para eliminar el id de nuestro Storage
export async function deletePokemonFavorite(id) {
  try {
    const response = await getPokemonFavoriteApi();
    const newFavorite = response.filter((fav) => fav != id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorite));
  } catch (error) {
    throw error;
  }
}
