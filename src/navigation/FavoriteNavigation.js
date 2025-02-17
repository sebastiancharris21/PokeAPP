import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favorite from "../screens/ScreenFavorite";
import ScreenPokemon from "../screens/ScreenPokemon";

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="favorite"
        component={Favorite}
        options={{ title: "Favoritos" }}
      />
      <Stack.Screen
        name="Pokemon"
        component={ScreenPokemon}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
