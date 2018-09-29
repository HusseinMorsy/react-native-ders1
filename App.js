import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Stars({ name, count }) {
  const blackStars = "★".repeat(count);
  const whiteStars = "☆".repeat(5 - count);
  return (
    <Text>
      {name}: {blackStars}
      {whiteStars}
    </Text>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
        <Stars name="Luke" count={3} />
        <Stars name="Han" count={1} />
        <Stars name="Leia" count={5} />
        <Stars name="Nobody" count={0} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
