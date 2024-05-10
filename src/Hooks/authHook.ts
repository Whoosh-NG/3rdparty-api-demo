import { useCookies } from './cookiesHook';

export const useAuthHook = () => {
  const { removeTokenCookie, getTokenCookie } = useCookies();

  // 24 hours in milliseconds
  let logoutTimer: NodeJS.Timeout;

  const setSession = (expires: string) => {
    // Convert the expires value to a JavaScript Date object
    const expirationTime = new Date(expires);

    // Calculate the remaining time until expiration
    const currentTime = Date.now();
    const timeUntilExpiration = expirationTime.getTime() - currentTime;

    logoutTimer = setInterval(() => {
      checkSession();
    }, timeUntilExpiration);

    sessionStorage.setItem('expirationTime', expirationTime.toISOString());
  };

  const clearSession = () => {
    sessionStorage.removeItem('expirationTime');
    clearInterval(logoutTimer);
  };

  const getSessionExpirationTime = () => {
    return sessionStorage.getItem('expirationTime');
  };

  const checkSession = () => {
    const expirationTime = getSessionExpirationTime();
    if (expirationTime) {
      const currentTime = Date.now();
      if (currentTime > parseInt(expirationTime, 10)) {
        logoutUser();
      }
    }
  };

  const logoutUser = () => {
    // Perform logout logic
    clearSession();

    const userToken = getTokenCookie('userToken');
    if (userToken) {
      removeTokenCookie('userToken');
    }
    localStorage.removeItem('persist:LocalVendaSeller');
    window.location.reload();
  };

  return { logoutUser, setSession, getSessionExpirationTime };
};
