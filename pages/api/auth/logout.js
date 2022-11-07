const logout = (req, res) => {
  const url =
    "https://locibuddy.com/realms/AngelDemo/protocol/openid-connect/logout/";

  res.redirect(url);
};

export default logout;
