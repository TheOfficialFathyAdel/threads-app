import { Alert, AlertIcon, AlertText } from "@/components/ui/alert";
import { InfoIcon } from "@/components/ui/icon";
import tw from "twrnc";
export default function AuthAlert({ errorMessage }: { errorMessage: string }) {
  return (
    <Alert
      action="error"
      variant="outline"
      style={tw`absolute bottom-20 self-center border-red-500`}
    >
      <AlertIcon as={InfoIcon} color={"red"} />
      <AlertText style={tw`text-lg text-red-500`}>{errorMessage}</AlertText>
    </Alert>
  );
}
