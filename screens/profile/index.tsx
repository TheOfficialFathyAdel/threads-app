import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { useAuth } from "@/providers/AuthProvider";
import { LogOut } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default () => {
  const { logout } = useAuth();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text className="text-4xl font-bold">Profile</Text>
      <Button onPress={() => logout()}>
        <ButtonIcon as={LogOut} />
        <ButtonText>Logout</ButtonText>
      </Button>
    </SafeAreaView>
  );
};
