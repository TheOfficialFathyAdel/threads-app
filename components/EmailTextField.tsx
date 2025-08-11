import { Input, InputField } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { View } from "react-native";
import tw from "twrnc";

interface EmailTextFieldProps {
  email: string;
  handleEmailTextChange: (text: string) => void;
  emailError: string;
}

const EmailTextField = ({
  email,
  handleEmailTextChange,
  emailError,
}: EmailTextFieldProps) => {
  return (
    <View>
      <Input variant="outline" size="xl" style={tw`rounded mt-4 border-2`}>
        <InputField
          placeholder="Enter Your Email"
          value={email}
          onChangeText={handleEmailTextChange}
        />
      </Input>
      {emailError && (
        <Text style={tw`font-bold text-lg text-red-500 mt-1`}>
          {emailError}
        </Text>
      )}
    </View>
  );
};

export default EmailTextField;
