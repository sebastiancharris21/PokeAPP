import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from './PokedexNavigation';
import AccountsNavigation from './AccountsNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="Pokedex">
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      {/* botton de pokedex */}
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderImage(),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Accounts"
        component={AccountsNavigation}
        options={{
          tabBarLabel: "Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function renderImage() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 60, height: 60, top: -15 }}
    />
  );
}
