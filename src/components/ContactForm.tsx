import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, FileText, Image as ImageIcon, Wrench } from "lucide-react";

const ContactForm = () => {
  const [form, setForm] = useState({ 
    nome: "", 
    email: "", 
    whatsapp: "", 
    descricao: "", 
    servico: "", 
    imagem: null as File | null  // Tipo para o arquivo de imagem
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");

    const msg = `Olá! Meu nome é ${form.nome}. ✉️E-mail: ${form.email}. 📱WhatsApp: ${form.whatsapp}. 
    Serviço: ${form.servico}. Descrição: ${form.descricao}. Aguardo mais informações. Obrigado!`;

    // Abre WhatsApp
    window.open(`https://wa.me/5511914973669?text=${encodeURIComponent(msg)}`, "_blank");

    try {
      const data = new FormData();
      data.append("nome", form.nome);
      data.append("email", form.email);
      data.append("whatsapp", form.whatsapp);
      data.append("descricao", form.descricao);
      data.append("servico", form.servico);
      if (form.imagem) data.append("imagem", form.imagem);

      const res = await fetch("http://localhost:5000/api/contato", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setFeedback("✅ Formulário enviado com sucesso!");
        setForm({ nome: "", email: "", whatsapp: "", descricao: "", servico: "", imagem: null });
      } else {
        setFeedback("❌ Erro ao enviar. Tente novamente.");
      }
    } catch {
      setFeedback("❌ Falha de conexão com o servidor ao enviar fotos ou textos no formulário.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-xl mx-auto p-8 rounded-2xl shadow-xl bg-gray-50 space-y-6"
    >
      <h2 
  className="text-center text-3xl sm:text-4xl md:text-5xl font-display font-light tracking-wide text-gray-900 mb-12"
>
  Solicite seu Orçamento
</h2>
<div className="flex justify-center mb-8">
  <div className="w-24 h-[2px] bg-gradient-to-r from-blue-800 via-gray-400 to-blue-800"></div>
</div>

      {/* Container centralizado */}
<div className="max-w-lg mx-auto space-y-6 px-4">
  {/* Campos principais */}
  {[
    { name: "nome", label: "Nome", type: "text", placeholder: "Nome completo", icon: <User size={18} /> },
    { name: "email", label: "E-mail", type: "email", placeholder: "Seu e-mail", icon: <Mail size={18} /> },
    { name: "whatsapp", label: "WhatsApp", type: "tel", placeholder: "Número do WhatsApp", icon: <Phone size={18} /> },
    { name: "descricao", label: "Descrição Projeto", type: "text", placeholder: "Descreva seu projeto", icon: <FileText size={18} /> },
  ].map((field) => (
    <motion.div key={field.name} whileHover={{ scale: 1.02 }} className="relative">
      <label className="block text-sm font-semibold mb-1 text-gray-700">{field.label}</label>
      <div className="flex items-center border border-gray-300 rounded-lg bg-white px-4">
        {field.icon}
        <input
          type={field.type}
          placeholder={field.placeholder}
          required
          value={form[field.name as keyof typeof form] as string}
          onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-transparent text-gray-800 
                     placeholder:text-gray-400 placeholder:text-center 
                     focus:outline-none focus:ring-2 focus:ring-accent transition-all"
        />
      </div>
    </motion.div>
  ))}

  {/* Seleção de serviço */}
  <div>
    <label className="block text-sm font-semibold mb-2 text-primary-foreground">
      Serviço
    </label>
    <div className="flex items-center border border-blue-200 rounded-xl 
                    bg-gradient-to-r from-white via-blue-50 to-white px-4 shadow-sm 
                    focus-within:shadow-md transition-shadow duration-300">
      <Wrench size={18} className="text-blue-600" />
      <select
        value={form.servico}
        onChange={(e) => setForm({ ...form, servico: e.target.value })}
        className="w-full px-4 py-3 rounded-xl bg-transparent text-gray-800 
                   placeholder:text-center focus:outline-none focus:ring-2 
                   focus:ring-blue-500 transition-all duration-300"
        required
      >
        <option value="">Selecione um serviço</option>
        <option value="Box de Banheiro">Box de Banheiro</option>
        <option value="Janela de Correr">Janelas de Correr</option>
        <option value="Anteparo">Anteparos</option>
        <option value="Manutenção">Manutenção</option>
        <option value="Sacadas">Sacadas</option>
      </select>
    </div>
  </div>
</div>



      {/* Upload de imagem */}
      <div>
        <label className="block text-sm font-semibold mb-1 text-gray-700">Foto do espaço (opcional)</label>
        <div className="flex flex-col sm:flex-row items-start sm:items-center border border-gray-300 rounded-lg bg-white px-3 py-2">
  <ImageIcon size={18} />
  <input
    type="file"
    accept="image/*"
    onChange={(e) => setForm({ ...form, imagem: e.target.files?.[0] || null })}
    className="w-full sm:w-auto mt-2 sm:mt-0 sm:ml-3 text-gray-600"
  />
</div>
      </div>

      {/* Botão */}
      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.05 }}
        className="w-full bg-gradient-to-r from-accent to-blue-600 text-white px-4 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-transform"
      >
        {loading ? "Enviando..." : <><Send size={20} className="inline-block mr-2" /> Enviar pelo WhatsApp</>}
      </motion.button>

      {/* Feedback */}
      {feedback && <p className="text-center text-sm mt-2">{feedback}</p>}
    </motion.form>
  );
};

export default ContactForm;