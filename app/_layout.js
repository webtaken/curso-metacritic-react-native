import { Slot, Stack } from "expo-router";
import { View } from "react-native";
import { Logo } from "../components/Logo";
import { Link } from "expo-router";
import { Pressable } from "react-native";
import { CircleInfoIcon } from "../components/Icons";

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => (
            <Link href="/">
              <Logo />
            </Link>
          ),
          headerRight: () => (
            <Link href="/about" asChild>
              <Pressable>
                {({ pressed }) => (
                  <CircleInfoIcon style={{ opacity: pressed ? 0.5 : 1 }} />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
