import {
  Button,
  ButtonGroup,
  ButtonIcon,
  ButtonSpinner,
  ButtonText,
} from "@/components/ui/button";
import tw from "twrnc";

type AuthButtonProps = {
  isDisabled: boolean;
  onPress: () => void;
  loading: boolean;
  buttonIcon: React.ElementType<any>;
  title: string;
};

export function AuthButton({
  isDisabled,
  onPress,
  loading,
  buttonIcon,
  title,
}: AuthButtonProps) {
  return (
    <ButtonGroup>
      <Button
        style={tw`rounded-full  ${isDisabled ? "opacity-80" : ""}`}
        size={"xl"}
        onPress={onPress}
        disabled={isDisabled}
      >
        {loading ? (
          <ButtonSpinner size={30} color={"#fff"} />
        ) : (
          <ButtonIcon as={buttonIcon} size="xl" color="#fff" />
        )}
        <ButtonText>{title}</ButtonText>
      </Button>
    </ButtonGroup>
  );
}
