// backend/middleware.js
const jwt = require("jsonwebtoken");

function autenticar(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(403).json({ error: "Token não fornecido" });

  jwt.verify(token, "chaveSecretaJWT", (err, user) => {
    if (err) return res.status(403).json({ error: "Token inválido" });
    req.user = user;
    next();
  });
}

module.exports = autenticar;