export const isTokenExpired = (): boolean => {
    const expiry = localStorage.getItem('tokenExpiry');
    if (!expiry) return true;
    const currentTime = new Date().getTime();
    return currentTime > parseInt(expiry, 10);
  };