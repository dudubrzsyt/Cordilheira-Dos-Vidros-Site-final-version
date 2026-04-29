import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import equipeImg from "@/assets/equipe.jpg";
import { Star } from "lucide-react";
import principalImg from "@/assets/images3/principal.jpeg";
import manutencaoSacadaImg from "@/assets/images3/manutencaoSacada.png";
import janelasmanutencaoImg from "@/assets/images3/janelasManutencao.jpeg";
import SacadaVidrosImg from "@/assets/images3/sacadaVidros.png";
import boxTetoImg from "@/assets/boxTeto.png";
import ContactForm from "@/components/ContactForm";

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
  {[
    { 
      src: boxTetoImg, 
      title: "Manutenção de Box", 
      overlay: "Segurança e praticidade para o seu banheiro.", 
      desc: "Reparos e ajustes em boxes de vidro para garantir resistência e conforto no dia a dia.", 
      extra: "Instalação sob medida com vidro temperado e acabamento sofisticado." 
    },
    { 
      src: SacadaVidrosImg, 
      title: "Manutenção de Sacada", 
      overlay: "Proteção e elegância para sua sacada.", 
      desc: "Revisão completa de vedações e sistemas de abertura para maior durabilidade.", 
      extra: "Ambientes mais seguros contra vento e chuva, sem perder transparência e estilo." 
    },
  ].map((item, i) => (
    <motion.div 
      key={i}
      initial={{ opacity: 0, scale: 0.85, y: 50 }} 
      animate={{ opacity: 1, scale: 1, y: 0 }} 
      transition={{ delay: i * 0.2, duration: 0.4, ease: "easeOut" }}
      className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl 
                 transition-transform duration-300 hover:scale-105 mx-auto max-w-[500px] bg-white border border-border"
    >
      {/* Imagem com overlay de texto diferente */}
      <div className="relative group">
        <img 
          src={item.src} 
          alt={item.title} 
          className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h4 className="text-white text-xl font-bold mb-2">{item.title}</h4>
          <p className="text-white text-sm sm:text-base px-4 text-center">{item.overlay}</p>
        </div>
      </div>

      {/* Fundo branco com dois textos diferentes */}
      <div className="p-6 text-center bg-white">
        <p className="text-muted-foreground text-sm mb-2">{item.desc}</p>
        <p className="text-gray-700 text-sm font-medium">{item.extra}</p>
      </div>
    </motion.div>
  ))}
</div>


{/* Destaque vidros da pagina */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }} 
  whileInView={{ opacity: 1, scale: 1 }} 
  viewport={{ once: true }} 
  transition={{ duration: 0.6 }}
  className="max-w-3xl mx-auto text-center mb-20 p-10 rounded-2xl border-2 border-accent/30 bg-accent/5 shadow-lg hover:shadow-2xl transition-shadow"
>
  <img 
    src={principalImg} 
    alt="Principal - especialista em manutenção" 
    className="w-32 h-32 mx-auto mb-6 rounded-full object-cover shadow-lg hover:scale-110 transition-transform duration-500" 
  />
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

        {/* Lista de serviços */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            { title: "Ajuste de portas e janelas de correr", desc: "Correção de travamentos e alinhamento para funcionamento suave, garantindo praticidade e conforto no dia a dia." },
            { title: "Troca de roldanas e ferragens", desc: "Substituição de peças desgastadas para maior segurança e durabilidade, evitando riscos e falhas no sistema." },
            { title: "Vedação e troca de silicone", desc: "Prevenção de infiltrações e proteção contra umidade, mantendo o ambiente sempre seco e protegido." },
            { title: "Manutenção de sacadas envidraçadas", desc: "Preservação da estética e segurança da estrutura, com revisão completa de escovas, perfis e regulagens." },
            { title: "Troca de vidros danificados", desc: "Substituímos vidros temperados ou laminados com rapidez e segurança, mantendo o padrão de qualidade." },
            { title: "Box de Banheiro", desc: "Ajustes em portas, vedação e troca de roldanas para garantir funcionamento suave e seguro." },
            { title: "Anteparos de Vidro", desc: "Revisão de fixações e substituição de perfis de silicone, aumentando a durabilidade e segurança." },
            { title: "Janelas de Correr", desc: "Correção de travamentos, alinhamento e manutenção preventiva para maior vida útil das janelas." },
            { title: "Manutenção Geral", desc: "Serviços preventivos e corretivos em todos os modelos de envidraçamento existentes, com suporte especializado." },
            { title: "Substituição de Fechaduras e Perfis", desc: "Troca de fechaduras e perfis de alumínio ou silicone, garantindo maior segurança e vedação eficiente." }

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

       <SectionTitle 
  title="Serviços de Manutenção" 
  subtitle="Confira os principais serviços que oferecemos para manter seus vidros sempre seguros e funcionais." 
/>




{/* Lista de serviços com fotos */}
<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
  {[
    { src: manutencaoSacadaImg, title: "Manutenção de Sacadas", desc: "Preservação da estética e segurança da estrutura." },
    { src: boxTetoImg, title: "Manutenção de Box", desc: "Ajustes e reparos em boxes de vidro para garantir segurança e durabilidade." },
    { src: janelasmanutencaoImg, title: "Manutenção de Janelas", desc: "Correção de travamentos e alinhamento para funcionamento suave." },
  ].map((item, i) => (
    <motion.div 
      key={item.title} 
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ delay: i * 0.15, duration: 0.5 }}
      className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer mx-auto max-w-[500px]"
    >
      {/* Imagem de fundo */}
      <img 
        src={item.src} 
        alt={item.title} 
        className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out" 
      />
      
      {/* Caixa de texto sobreposta */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex flex-col items-center justify-center text-center p-6">
        <h4 className="font-display font-bold text-xl text-white mb-2 drop-shadow-lg">
          {item.title}
        </h4>
        <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
          {item.desc}
        </p>
      </div>
    </motion.div>
  ))}
</div>


<SectionTitle 
  title="Solicite um Orçamento" 
  subtitle="Instalação ou manutenção: preencha o formulário e nossa equipe retornará com opções personalizadas. 
            Seus dados são protegidos e usados apenas para contato comercial." 
/>

<ContactForm />

      </div>
    </section>
  </Layout>
);

export default Equipe;
