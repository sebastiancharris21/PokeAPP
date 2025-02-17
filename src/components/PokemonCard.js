import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import {useNavigation} from '@react-navigation/native';
import {capitalize} from 'lodash';
import getPokemonColor from "../utils/getPokemonColor";

export default function PokemonCard(props) {
  const { pokemon } = props;
  const navigation = useNavigation();

  const goTo = () => {
    console.log(pokemon.id);
    navigation.navigate("Pokemon", {id: pokemon.id})
  };
  
  const colorPokemon = getPokemonColor(pokemon.type);
  const bgStyle = { backgroundColor: colorPokemon, ...style.bgStyle };

  return (
    <TouchableWithoutFeedback onPress={goTo}>
      <View style={style.card}>
        <View style={style.spacing}>
          <View style={bgStyle}>
            <Text style={style.number}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={style.name}>{capitalize(pokemon.name)}</Text>
            <Image source={{ uri: pokemon.image }} style={style.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyle: {
    flex: 1,
    padding: 10,
    borderRadius: 15,
  },
  image: {
    position: "absolute",
    width: 90,
    height: 90,
    right: 2,
    bottom: 2,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
});
