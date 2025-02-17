import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenPokedex from "../screens/ScreenPokedex";
import ScreenPokemon from "../screens/ScreenPokemon";

const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={ScreenPokedex}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen
        name="Pokemon"
        component={ScreenPokemon}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}
