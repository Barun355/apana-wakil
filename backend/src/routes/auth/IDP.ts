const GCLIENT_ID =
  "328737459710-7v1p5aone6sfd1cqu0bst5e6o7r0mmh4.apps.googleusercontent.com";

export const getGoogleAuthUser = async (accessToken: string) => {
  try {
    if (!accessToken) {
      throw new Error("Invalid Access Token");
    }
    const payload = await fetch(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${accessToken}`
    );

    const tokenInfo = await payload.json();
    if (!(tokenInfo && tokenInfo.aud === GCLIENT_ID)) {
      throw new Error("Invalid token");
    }
    return tokenInfo;
  } catch (err: any) {
    throw err;
  }
};
