import React, { useEffect, useState } from "react";
import useRedirectToHome from "./redirectHome";

function RedirectWrapper({ isAuthenticated, children }) {
  const isLoading = useRedirectToHome(isAuthenticated);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsReady(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, [isAuthenticated]);

  return isReady ? <>{children}</> : <div>Loading...</div>;
}

export default RedirectWrapper;
