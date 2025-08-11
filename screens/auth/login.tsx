import AuthAlert from "@/components/AuthAlert";
import { AuthButton } from "@/components/AuthButton";
import EmailTextField from "@/components/EmailTextField";
import { PasswordTextField } from "@/components/PasswordTextField";
import { Box } from "@/components/ui/box";
import { validateEmail } from "@/helpers/validate-email";
import { validatePassword } from "@/helpers/validate-password";
import { supabase } from "@/lib/supabase";
import { useRouter } from "expo-router";
import { LogIn } from "lucide-react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertError, setAlertError] = useState("");
  const isDisabled =
    !email || !password || !!emailError || !!passwordError || !!alertError;

  const router = useRouter();

  const handleEmailTextChange = (text: string) => {
    setEmail(text);
    validateEmail(text, setEmailError);
  };

  const handlePasswordTextChange = (text: string) => {
    setPassword(text);
    validatePassword(text, setPasswordError);
  };

  const handleLogin = async () => {
    //Enable loading state
    setLoading(true);

    //create a new user
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    //handling user credentials error
    if (error) {
      setLoading(false);
      setAlertError(error.message);
      hideAuthAlert();
      return;
    }

    //Disable loading state
    setLoading(false);

    router.push("/(tabs)/home");
  };

  //hide auth alert after 2 seconds
  const hideAuthAlert = () => {
    setTimeout(() => {
      setAlertError("");
    }, 2000);
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white justify-center p-4`}>
      <Box>
        <EmailTextField
          email={email}
          emailError={emailError}
          handleEmailTextChange={handleEmailTextChange}
        />
      </Box>
      <Box style={tw`mt-4`}>
        <PasswordTextField
          password={password}
          passwordError={passwordError}
          handlePasswordTextChange={handlePasswordTextChange}
        />
      </Box>
      <Box style={tw`mt-4`}>
        <AuthButton
          buttonIcon={LogIn}
          isDisabled={isDisabled}
          loading={loading}
          onPress={handleLogin}
          title="Login"
        />
      </Box>
      {alertError && <AuthAlert errorMessage={alertError} />}
    </SafeAreaView>
  );
};
