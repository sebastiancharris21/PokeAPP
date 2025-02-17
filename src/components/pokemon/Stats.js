import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { capitalize } from "lodash";

export default function Stats(props) {
  const { stats } = props;
  //console.log(stats);

  const styleBg = (value) => {
    const color = value > 49 ? "#00ac17" : "#f00";
    return {
      backgroundColor: color,
      width: `${value}%`,
    };
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {stats.map((item, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.titleBlock}>
            <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{item.base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, styleBg(item.base_stat)]} />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  titleBlock: {
    width: "30%",
  },
  statName: {
    fontSize: 12,
    color: "#6b6b6b",
  },
  blockInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "12%",
    fontSize: 12,
  },
  bgBar: {
    backgroundColor: "#dedede",
    width: "88%",
    height: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  bar: {
    borderRadius: 20,
    height: 5,
  },
});
