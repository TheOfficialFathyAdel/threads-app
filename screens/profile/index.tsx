import { Text } from "@/components/ui/text";
import { SafeAreaView } from "react-native-safe-area-context";

export default () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text className="text-4xl font-bold">Profile</Text>
    </SafeAreaView>
  );
};
