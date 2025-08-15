import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import * as Linking from "expo-linking";
import { useEffect } from "react";
import tw from "twrnc";
import { supabase } from "../../lib/supabase";

export default function Confirm() {
  useEffect(() => {
    const handleDeepLink = async (event: any) => {
      const url = event.url;
      const { queryParams } = Linking.parse(url) as {
        queryParams?: { access_token?: string; refresh_token?: string };
      };

      // supabase بيرجع التوكينات بأسماء access_token / refresh_token
      if (queryParams?.access_token) {
        const { error } = await supabase.auth.setSession({
          access_token: queryParams.access_token,
          refresh_token: queryParams.refresh_token ?? "",
        });
      }
    };

    Linking.getInitialURL().then((url) => {
      if (url) handleDeepLink({ url });
    });

    const sub = Linking.addEventListener("url", handleDeepLink);

    return () => sub.remove();
  }, []);

  return (
    <Box style={tw`flex-1 bg-white items-center justify-center p-4`}>
      <Box>
        <Text style={tw`font-bold text-4xl text-center`}>
          Check your inbox for email verification
        </Text>
      </Box>
    </Box>
  );
}
