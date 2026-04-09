import { useState } from "react";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [token, setToken] = useState("");
  const [contatos, setContatos] = useState<any[]>([]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });
    const data = await res.json();
    if (data.token) {
      setToken(data.token);
      alert("Login realizado com sucesso!");
    } else {
      alert("Credenciais inválidas");
    }
  };

  const carregarContatos = async () => {
    const res = await fetch("http://localhost:5000/api/admin/contatos", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setContatos(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      {!token ? (
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm space-y-4"
        >
          <h2 className="text-2xl font-bold text-center">Painel Admin</h2>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
            Entrar
          </button>
        </form>
      ) : (
        <div className="w-full max-w-2xl">
          <h2 className="text-xl font-bold mb-4">Contatos cadastrados</h2>
          <button
            onClick={carregarContatos}
            className="mb-4 bg-green-600 text-white px-4 py-2 rounded"
          >
            Carregar contatos
          </button>
          <ul className="space-y-2">
            {contatos.map((c) => (
              <li key={c.id} className="bg-white shadow rounded p-4">
                <p><strong>Nome:</strong> {c.nome}</p>
                <p><strong>Email:</strong> {c.email}</p>
                <p><strong>WhatsApp:</strong> {c.whatsapp}</p>
                <p><strong>Descrição:</strong> {c.descricao}</p>
                <p className="text-sm text-gray-500">
                  Criado em: {new Date(c.criadoEm).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Admin;