import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { SafeAreaView } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <HStack className="justify-around w-full">
        <Text className="text-xl font-bold">Hello world</Text>
        <Text className="text-xl font-bold">Hello again</Text>
      </HStack>
    </SafeAreaView>
  );
}
