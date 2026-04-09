import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import equipeImg from "@/assets/equipe.jpg";
import { Star, Award, Users } from "lucide-react";

const Equipe = () => (
  <Layout>
    <PageHero 
      title="Manutenção" 
      subtitle="Consertos, instalações e reparos de vidros com qualidade e profissionalismo" 
      image={equipeImg} 
    />

    <section className="py-20">
      <div className="container mx-auto px-4">

        {/* Espaço para fotos no topo */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
            Foto de manutenção de box
          </div>
          <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
            Foto de manutenção de sacada
          </div>
        </div>

        {/* Destaque Luan */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20 p-10 rounded-2xl border-2 border-accent/30 bg-accent/5"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-accent flex items-center justify-center">
            <Star size={40} className="text-accent-foreground" />
          </div>
          <h2 className="font-display font-extrabold text-3xl mb-2">
            Manutenção Preventiva de Vidros
          </h2>
          <p className="text-accent font-display font-semibold text-lg mb-4">
            Segurança, durabilidade e conforto para sua casa.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Evite travamentos, ruídos e quebras de vidro. 
            Revisamos vedação e sistemas de abertura para garantir 
            funcionamento perfeito e maior vida útil das estruturas.
          </p>
        </motion.div>

        <SectionTitle 
          title="Serviços de Manutenção" 
          subtitle="Confira os principais serviços que oferecemos para manter seus vidros sempre seguros e funcionais." 
        />

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            { title: "Ajuste de portas e janelas de correr", desc: "Correção de travamentos e alinhamento para funcionamento suave." },
            { title: "Troca de roldanas e ferragens", desc: "Substituição de peças desgastadas para maior segurança." },
            { title: "Vedação e troca de silicone", desc: "Prevenção de infiltrações e proteção contra umidade." },
            { title: "Manutenção de sacadas envidraçadas", desc: "Preservação da estética e segurança da estrutura." },
            { title: "Troca de vidros danificados", desc: "Substituímos vidros temperados ou laminados com rapidez e segurança." },
          ].map((item, i) => (
            <motion.div 
              key={item.title} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.15 }}
              className="p-8 rounded-xl border border-border hover:shadow-lg transition-shadow"
            >
              <h4 className="font-display font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Espaço para fotos embaixo */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
            Foto de manutenção em box
          </div>
          <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
            Foto de manutenção em janelas
          </div>
          <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
            Foto de manutenção em sacadas
          </div>
        </div>

      </div>
    </section>
  </Layout>
);

export default Equipe;