const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  console.log(
    "req.headers.authorization.spit",
    getBearerTokenFromHeader(req.headers.authorization)
  );
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    console.log("za secundu do");
    const token = getBearerTokenFromHeader(req.headers.authorization);
    console.log("req.headers.authorization.spit", token);
    if (!token) {
      return res.status(401).json({ message: "Auth error" });
    }
    const decodedToken = jwt.verify(token, config.get("secretKeyForJWT"));
    console.log("decoded token это что токен или юзер готовый?", decodedToken);
    req.user = decodedToken;
    next();
  } catch (e) {
    console.error(e);
    // return res.status(401).json({ message: e.response.data.message});
    return res.status(401).json({ message: "Auth error" });
  }
};
const getBearerTokenFromHeader = (authToken) => {
  return authToken.split(" ")[1];
};
