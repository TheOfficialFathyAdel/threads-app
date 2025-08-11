import * as Linking from "expo-linking";
import { useEffect } from "react";
import { supabase } from "../../lib/supabase";

export default () => {
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

        if (error) {
          console.log(error.message);
        } else {
          console.log("User logged in successfully");
        }
      }
    };

    Linking.getInitialURL().then((url) => {
      if (url) handleDeepLink({ url });
    });

    const sub = Linking.addEventListener("url", handleDeepLink);
    return () => sub.remove();
  }, []);

  return <></>;
};
