// backend/server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import chalk from "chalk";
import figlet from "figlet";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conexão MySQL
  // Conexão com banco usando variáveis do .env
// Usando variáveis do .env
const PORT = process.env.PORT || 3000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});



// Middleware de autenticação
function autenticar(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(403).json({ error: "Token não fornecido" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Token inválido" });
    req.user = user;
    next();
  });
}

// Login admin
app.post("/api/login", async (req, res) => {
  const { email, senha } = req.body;
  if (email === ADMIN_USER.email && await bcrypt.compare(senha, ADMIN_USER.senhaHash)) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "2h" });
    return res.json({ token });
  }
  res.status(401).json({ error: "Credenciais inválidas" });
});

// Cadastro de contato
app.post("/api/contato", async (req, res) => {
  const { nome, email, whatsapp, descricao, servico } = req.body;
  if (!nome || !email || !whatsapp || !descricao || !servico) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  const [result] = await db.execute(
    "INSERT INTO contatos (nome, email, whatsapp, descricao, servico, criadoEm) VALUES (?, ?, ?, ?, ?, NOW())",
    [nome, email, whatsapp, descricao, servico]
  );

  console.log(chalk.green(`Novo cadastro recebido: ${nome}, ${email}, ${whatsapp}, ${servico}, ${descricao}`));

  res.status(201).json({ message: "Contato salvo com sucesso!", id: result.insertId });
});

// Listar contatos (apenas admin)
app.get("/api/contato", autenticar, async (req, res) => {
  const [rows] = await db.execute("SELECT * FROM contatos");
  res.json(rows);
});


const startTime = new Date();

app.listen(PORT, () => {
  console.log(chalk.green(figlet.textSync("Cordilheira Vidros", { horizontalLayout: "full" })));
  setInterval(() => {
    const now = new Date();
    const uptimeMs = now - startTime;
    const uptimeSec = Math.floor(uptimeMs / 2000);
    const uptimeMin = Math.floor(uptimeSec / 60);
    const uptimeHr = Math.floor(uptimeMin / 60);
    const uptimeDay = Math.floor(uptimeHr / 24);
    const uptimeWeek = Math.floor(uptimeDay / 7);
    const uptimeMonth = Math.floor(uptimeDay / 30);

    console.clear();
    console.log(chalk.blue("=============================================================="));
    console.log(chalk.yellow(`Servidor rodando na porta: ${PORT}`));
    console.log(chalk.magenta(`Hora inicial: ${startTime.toLocaleString()}`));
    console.log(chalk.cyan(`Tempo ativo: ${uptimeSec}s | ${uptimeMin}min | ${uptimeHr}h | ${uptimeDay}d | ${uptimeWeek}sem | ${uptimeMonth}mes`));
    console.log(chalk.green("Logs ativos: todos os cadastros serão exibidos aqui."));
    console.log(chalk.blue("=============================================================="));
  }, 5000);
});


