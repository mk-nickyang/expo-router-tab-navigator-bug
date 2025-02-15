import { Stack } from "expo-router/stack";

export const unstable_settings = {
  initialRouteName: "two",
};

export default function ExploreLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
