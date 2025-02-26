export const isTokenExpired = (): boolean => {
    const expiry = localStorage.getItem('tokenExpiry');
    if (!expiry) return true; // No expiry time means token is considered expired


    const currentTime = new Date().getTime();
    return currentTime > parseInt(expiry, 10);
  };