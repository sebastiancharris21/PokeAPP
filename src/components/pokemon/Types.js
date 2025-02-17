import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { capitalize } from "lodash";
import getPokemonColor from "../../utils/getPokemonColor";

export default function Types(props) {
  const { types } = props;
  //   console.log("tipos", types);
  //   map(types, (item, index) => {
  //     console.log(`Lodash: ${item.type.name}`);
  //   });

  //   types.map((item) => {
  //     console.log("map", item.type.name);
  //   });

  return (
    <View style={styles.content}>
      {types.map((item, index) => (
        <View
          key={index}
          style={{
            ...styles.pill,
            backgroundColor: getPokemonColor(item.type.name),
          }}
        >
          <Text>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 410,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
