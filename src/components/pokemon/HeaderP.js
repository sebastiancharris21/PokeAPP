import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import React from "react";
import getPokemonColor from "../../utils/getPokemonColor";
import { capitalize } from "lodash";

export default function HeaderP(props) {
  const { name, type, order, image } = props;
  const color = getPokemonColor(type);

  const bgStyles = { backgroundColor: color, ...styles.bg };
  return (
    <SafeAreaView style={styles.content}>
      <View style={bgStyles}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 5,
    marginTop:30,
  },
  bg: {
    height: 400,
    width: "100%",
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 1 }],
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    marginStart: 20,
  },
  order: {
    color: "#fff",
    fontWeight: "bold",
    marginEnd: 20,
  },
  contentImg: {
    flex: 1,
    top: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
});
