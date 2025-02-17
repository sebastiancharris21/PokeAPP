import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function NoLog() {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <Text style={styles.Text}>
        Para usar esta pantalla debes Iniciar Sesión
      </Text>
      <Button
        title="Ir a Login"
        onPress={() => navigation.navigate("Accounts")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 20,
  },
  Text: { textAlign: "center", marginBottom: 10 },
});
