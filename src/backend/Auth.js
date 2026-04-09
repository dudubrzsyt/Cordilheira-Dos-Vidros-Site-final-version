// backend/auth.js
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const ADMIN_USER = {
  email: "luan@empresa.com",
  senha: "senhaSuperSecreta123"
};

router.post("/login", (req, res) => {
  const { email, senha } = req.body;

  if (email === ADMIN_USER.email && senha === ADMIN_USER.senha) {
    const token = jwt.sign({ email }, "chaveSecretaJWT", { expiresIn: "2h" });
    return res.json({ token });
  }

  res.status(401).json({ error: "Credenciais inválidas" });
});

module.exports = router;