import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import servicosImg from "@/assets/servicos.jpg";
import { Image, Zap, Layers, Ruler } from "lucide-react";

const Janelas = () => (
  <Layout>
    <PageHero 
      title="Janelas de Correr" 
      subtitle="Elegância, praticidade e modernidade para seu ambiente." 
      image={servicosImg} 
    />

    {/* Seção de características */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Características das Janelas" 
          subtitle="Descubra porque nossas janelas de correr são a escolha ideal." 
        />
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { icon: Zap, title: "Abertura Rápida", desc: "Sistema de correr suave e agressivo, ideal para quem busca praticidade." },
            { icon: Layers, title: "Design Moderno", desc: "Linhas retas e acabamento sofisticado que valorizam qualquer ambiente." },
            { icon: Ruler, title: "Sob Medida", desc: "Produzidas conforme as dimensões do seu espaço, garantindo encaixe perfeito." },
          ].map((item, i) => (
            <motion.div 
              key={item.title} 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="text-center p-6 rounded-xl border border-border hover:shadow-xl transition-all cursor-pointer hover:border-accent"
            >
              <item.icon size={36} className="mx-auto mb-3 text-accent" />
              <h4 className="font-display font-bold mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Espaço para fotos */}
    <section className="py-20 section-dark">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Galeria de Janelas" 
          subtitle="Veja exemplos de janelas normais e de correr instaladas." 
          light 
        />
        <div className="grid md:grid-cols-2 gap-8">
          {[ "Janela Normal", "Janela de Correr" ].map((tipo, i) => (
            <motion.div 
              key={tipo} 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <Image size={48} className="text-gray-400" />
                <span className="ml-2 text-gray-500">Espaço para foto {tipo}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-lg mb-2">{tipo}</h3>
                <p className="text-muted-foreground text-sm">
                  As {tipo.toLowerCase()} oferecem conforto, estética e funcionalidade. 
                  São ideais para ambientes residenciais e comerciais, trazendo luminosidade, ventilação 
                  e um toque moderno ao espaço. Com materiais resistentes e acabamento refinado, 
                  garantem durabilidade e sofisticação.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Formulário de contato */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Solicite um Orçamento" 
          subtitle="Preencha o formulário e nossa equipe retornará com opções personalizadas." 
        />
        <ContactForm/>
      </div>
    </section>
  </Layout>
);

export default Janelas;