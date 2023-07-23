import { getApp } from "firebase-admin/app";
import React, { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { getAuth, EmailAuthProvider } from "firebase/auth";
import { AuthAction } from "next-firebase-auth";

// Note that next-firebase-auth inits Firebase for us,
// so we don't need to.
const firebaseAuthConfig = {
  signInFlow: "popup",
  // Auth providers
  // https://github.com/firebase/firebaseui-web#configure-oauth-providers
  signInOptions: [
    {
      provider: EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
  ],
  signInSuccessUrl: "/",
  credentialHelper: "none",
  callbacks: {
    // https://github.com/firebase/firebaseui-web#signinsuccesswithauthresultauthresult-redirecturl
    signInSuccessWithAuthResult: () =>
      // Don't automatically redirect. We handle redirects using
      // `next-firebase-auth`.
      false,
  },
};

// Do not SSR FirebaseUI, because it is not supported.
// https://github.com/firebase/firebaseui-web/issues/213
function Auth() {
  const [renderAuth, setRenderAuth] = useState(false);
  useEffect(() => {
    setRenderAuth(true);
  }, []);

  return (
    <div>
      {renderAuth ? (
        <StyledFirebaseAuth
          uiConfig={firebaseAuthConfig}
          firebaseAuth={getAuth(getApp())}
        />
      ) : null}
    </div>
  );
}

// Configuración de autenticación de Firebase
export default withAuthUser({
  wheAuthed: AuthAction.REDIRECT_TO_APP,
})(Auth);
