import { useEffect, useState, useCallback, useMemo, useRef } from "react";

// const GOOGLE_CLIENT_ID = "328737459710-7v1p5aone6sfd1cqu0bst5e6o7r0mmh4.apps.googleusercontent.com";
const GOOGLE_CLIENT_ID = "886210303406-nel1i76kh24lu6rjoangc5o8iqm1mr45.apps.googleusercontent.com";

interface GoogleUser {
  id: string;
  name: string;
  email: string;
  picture: string;
  accessToken: string;
  isEmailVerified: boolean;
}

declare global {
  interface Window {
    google: any;
  }
}

const useGoogleAuth = () => {
  const [isReady, setIsReady] = useState(false);
  const [guser, setGUser] = useState<GoogleUser | null>(null);
  const [gloading, setGLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const loadGoogleScript = useCallback(() => {
    if (document.querySelector("script#google-identity-services")) return;

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.id = "google-identity-services";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
        //   auto_select: false,
        //   cancel_on_tap_outside: false,
        use_fedcm_for_prompt: true,
      });
      setIsReady(true);
    };

    script.onerror = () => {
      console.error("Failed to load Google Identity Services script");
    };
  }, []);

  useEffect(() => {
    loadGoogleScript();
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [loadGoogleScript]);

  const handleCredentialResponse = useCallback((response: any) => {
    const credential = response.credential;

    const payload = JSON.parse(atob(credential.split(".")[1]));

    const user: GoogleUser = {
      id: payload.sub,
      name: payload.name,
      email: payload.email,
      picture: payload.picture,
      accessToken: credential,
      isEmailVerified: payload.email_verified,
    };

    setGUser(user);
    setGLoading(false);
  }, []);

  const signIn = useCallback(() => {
    if (!isReady || gloading) {
      console.log({ isReady, gloading });
      console.error("Google Identity Services not ready or already processing");
      return;
    }

    setGLoading(true);

    try {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      abortControllerRef.current = new AbortController();

      window.google.accounts.id.prompt(
        (notification: any) => {
          setGLoading(false);

          if (notification.isDismissedMoment()) {
            if (notification.getDismissedReason() === "credential_returned") {
              console.log("Credential returned successfully");
            } else {
              console.error(
                "Google Sign-In prompt dismissed:",
                notification.getDismissedReason()
              );
            }
          } else {
            console.log("notification", notification);
            document.cookie = "g_state=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT";
            window.google.accounts.id.prompt();
          }
        },
        { signal: abortControllerRef.current.signal }
      );
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
      setGLoading(false);
    }
  }, [isReady, gloading]);

  const signOut = useCallback(() => {
    if (gloading) {
      console.error("Already processing a request");
      return;
    }

    setGLoading(true);
    window.google.accounts.id.disableAutoSelect();
    setGUser(null);
    setGLoading(false);
  }, [gloading]);

  const memoizedUser = useMemo(() => guser, [guser]);

  return {
    glogin: signIn,
    glogout: signOut,
    guser: memoizedUser,
    gloading,
  };
};

export default useGoogleAuth;