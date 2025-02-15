import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { router } from "expo-router";

export default function HomeTabScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title} onPress={() => router.navigate("/post")}>
        Go to Post
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
