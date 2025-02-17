import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenAccounts from "../screens/ScreenAccounts";

const Stack = createStackNavigator();

export default function AccountsNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Accounts"
        component={ScreenAccounts}
        options={{ title: "Cuenta" }}
      />
    </Stack.Navigator>
  );
}