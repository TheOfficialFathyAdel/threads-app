import { Input, InputField } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import tw from "twrnc";
import { Box } from "./ui/box";

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
    <Box>
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
    </Box>
  );
};
