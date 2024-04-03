export const getAuthToken = () => {
  const tokenCookie = document.cookie.match(/(?:^|;) ?token=([^;]*)(?:;|$)/);
  return tokenCookie ? tokenCookie[1] : null;
};
