// backend/server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";





import chalk from "chalk";
import figlet from "figlet";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const contatos = [];

const ADMIN_USER = {
  email: "luan@empresa.com",
  senha: "senhaSuperSecreta123"
};

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

app.post("/api/login", (req, res) => {
  const { email, senha } = req.body;
  if (email === ADMIN_USER.email && senha === ADMIN_USER.senha) {
    const token = jwt.sign({ email }, "chaveSecretaJWT", { expiresIn: "2h" });
    return res.json({ token });
  }
  res.status(401).json({ error: "Credenciais inválidas" });
});

app.post("/api/contato", (req, res) => {
  const { nome, email, whatsapp, descricao } = req.body;
  if (!nome || !email || !whatsapp || !descricao) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }
  const novoContato = {
    id: contatos.length + 1,
    nome,
    email,
    whatsapp,
    descricao,
    criadoEm: new Date()
  };
  contatos.push(novoContato);
  res.status(201).json({ message: "Contato salvo com sucesso!", contato: novoContato });
});

app.get("/api/contato", autenticar, (req, res) => {
  res.json(contatos);
});





const app1 = express();
app1.use(cors());
app1.use(bodyParser.json());

const PORT = 5000;
const startTime = new Date();

app1.listen(PORT, () => {
  const now = new Date();
  const uptime = ((now - startTime) / 1000).toFixed(0); // segundos

  console.log(
    chalk.green(
      figlet.textSync("Cordilheira Vidros", { horizontalLayout: "full" })
    )
  );


  console.log(chalk.blue("========================================================================="));
  console.log(chalk.yellow(`Servidor rodando na porta: ${PORT}`));
  console.log(chalk.magenta(`Hora inicial: ${startTime.toLocaleString()}`));
  console.log(chalk.cyan(`Tempo ativo: ${uptime} segundos`));
  console.log(chalk.blue("made with ❤️ by Igor Araujo🔥  ('PASSWORD MAC3264')"));
  console.log(chalk.blue("========================================================================="));
});