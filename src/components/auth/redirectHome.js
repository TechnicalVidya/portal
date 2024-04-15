import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const useRedirectToHome = (isAuthenticated) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isAuthenticated && router.pathname !== "/") {
      setIsLoading(true);
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return isLoading;
};

export default useRedirectToHome;
