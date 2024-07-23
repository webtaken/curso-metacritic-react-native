import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { HomeIcon } from "../../components/Icons";
import { styled } from "nativewind";
import { Screen } from "../../components/Screen";

const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link href="/" asChild>
          <StyledPressable className={`active:opacity-20`}>
            <HomeIcon />
          </StyledPressable>
        </Link>
        <Text className="text-white font-bold text-2xl mb-8">About</Text>
        <Text className="text-white">
          Lorem ipsum dolor asd Lorem ipsum dolor asd Lorem ipsum dolor asd
          Lorem ipsum dolor asd Lorem ipsum dolor asd Lorem ipsum dolor asd
          Lorem ipsum dolor asd
        </Text>
        <Text className="text-white">
          Lorem ipsum dolor asd Lorem ipsum dolor asd Lorem ipsum dolor asd
          Lorem ipsum dolor asd Lorem ipsum dolor asd Lorem ipsum dolor asd
          Lorem ipsum dolor asd
        </Text>
        <Text className="text-white">
          Lorem ipsum dolor asd Lorem ipsum dolor asd Lorem ipsum dolor asd
          Lorem ipsum dolor asd Lorem ipsum dolor asd Lorem ipsum dolor asd
          Lorem ipsum dolor asd
        </Text>
        <Text className="text-white">
          Lorem ipsum dolor asd Lorem ipsum dolor asd Lorem ipsum dolor asd
          Lorem ipsum dolor asd Lorem ipsum dolor asd Lorem ipsum dolor asd
          Lorem ipsum dolor asd
        </Text>
        <Text className="text-white">
          Lorem ipsum dolor asd Lorem ipsum dolor asd Lorem ipsum dolor asd
          Lorem ipsum dolor asd Lorem ipsum dolor asd Lorem ipsum dolor asd
          Lorem ipsum dolor asd
        </Text>
      </ScrollView>
    </Screen>
  );
}
