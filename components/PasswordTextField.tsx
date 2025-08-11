import { Input, InputField } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { View } from "react-native";
import tw from "twrnc";

interface PasswordTextFieldProps {
  password: string;
  handlePasswordTextChange: (text: string) => void;
  passwordError: string;
}

export const PasswordTextField = ({
  password,
  handlePasswordTextChange,
  passwordError,
}: PasswordTextFieldProps) => {
  return (
    <View>
      <Input variant="outline" size="xl" style={tw`border-2`}>
        <InputField
          placeholder="Enter Your Password"
          value={password}
          onChangeText={handlePasswordTextChange}
          secureTextEntry={true}
        />
      </Input>
      {passwordError && (
        <Text style={tw`font-bold text-lg text-red-500 mt-1`}>
          {passwordError}
        </Text>
      )}
    </View>
  );
};
