import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState, useCallback } from "react";
import useAuth from "../../hooks/useAuth";
import { useFocusEffect } from "@react-navigation/native";
import { getPokemonFavoriteApi } from "../../api/favorite";

export default function UserData() {
  const [total, setTotal] = useState(0);
  const { auth, logout } = useAuth();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getPokemonFavoriteApi();
          setTotal(response.length);
        } catch (error) {
          console.log(error);
          setTotal(0);
        }
      })();
    }, [])
  );

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido,</Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title="Name" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="Username" text={`${auth.username}`} />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu title="Favorite" text={`${total} Favoritos`} />
      </View>
      <Button title="cerrar Sesion" onPress={() => logout()} />
    </View>
  );
}

function ItemMenu(props) {
  const { title, text } = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#Cfcfcf",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    width: 120,
    paddingRight: 20,
  },
  btnLogut: {
    paddingTop: 20,
  },
});
