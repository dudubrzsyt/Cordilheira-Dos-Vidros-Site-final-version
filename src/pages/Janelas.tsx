import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import servicosImg from "@/assets/servicos.jpg";
import { Wrench, ShieldCheck, Users } from "lucide-react";
import janelasCorrer3Img from "@/assets/images3/janelasCorrer3.png";
import janelasCorrer5Img from "@/assets/images3/janelasCorrer5.png";
import janela1Img from '../assets/images3/janela1.png';
const Janelas = () => (
  <Layout>
    <PageHero 
      title="Janelas de Correr" 
      subtitle="Instalação e manutenção com qualidade, segurança e confiança." 
      image={servicosImg} 
    />


      {/* Nova galeria com as últimas 3 imagens */}
    <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Mais Serviços em Janelas de Correr" 
          subtitle="Confira outros exemplos de trabalhos realizados pela nossa equipe." 
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { src: janelasCorrer3Img, title: "Troca de Trilhos", desc: "Substituímos trilhos danificados para garantir o funcionamento perfeito das janelas." },
            { src: janela1Img, title: "Instalação de Novas Janelas", desc: "Projetos sob medida com vidro temperado e acabamento premium." },
            { src: janelasCorrer5Img, title: "Revisão Completa", desc: "Manutenção preventiva para aumentar a durabilidade e segurança das janelas." },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-500"
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110 sm:h-80" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white text-sm sm:text-base px-4 text-center">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


    


<section className="py-20 bg-gradient-to-r from-blue-50 to-white">
  <div className="container mx-auto px-4">
    <SectionTitle 
      title="Por que escolher nossas janelas?" 
      subtitle="Mais do que estética, oferecemos manutenção prática e suporte especializado." 
    />
    <div className="grid md:grid-cols-3 gap-8">
      {[
         { icon: Wrench, title: "Manutenção Fácil", desc: "Troca de roldanas, vedações e ajustes rápidos para prolongar a vida útil da sua janela." },
            { icon: ShieldCheck, title: "Segurança Garantida", desc: "Serviços realizados com materiais de alta qualidade e seguindo normas técnicas." },
            { icon: Users, title: "Equipe Especializada", desc: "Profissionais experientes prontos para atender desde pequenos reparos até grandes projetos." },
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ delay: i * 0.2, duration: 0.5 }}
          className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-transform hover:scale-105"
        >
          <item.icon size={40} className="mx-auto mb-4 text-blue-600 animate-pulse" />
          <h4 className="font-display font-bold mb-2">{item.title}</h4>
          <p className="text-muted-foreground text-sm">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

<section className="py-20 bg-gray-100">
  <div className="container mx-auto px-4">
    <SectionTitle 
      title="O que nossos clientes dizem" 
      subtitle="Satisfação garantida em cada projeto." 
    />
    <div className="grid md:grid-cols-2 gap-8">
      {[
        { name: "Maria S.", text: "Excelente atendimento e qualidade impecável nas janelas instaladas." },
        { name: "Carlos P.", text: "Serviço rápido e profissionais muito atenciosos. Recomendo!" },
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ delay: i * 0.2, duration: 0.5 }}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
        >
          <p className="text-gray-700 italic mb-4">"{item.text}"</p>
          <h5 className="font-bold text-blue-600">{item.name}</h5>
        </motion.div>
      ))}
    </div>
  </div>
</section>



<SectionTitle 
  title="Solicite um Orçamento" 
  subtitle="Instalação ou manutenção: preencha o formulário e nossa equipe retornará com opções personalizadas. 
            Seus dados são protegidos e usados apenas para contato comercial." 
/>

<ContactForm />

  </Layout>
);
export default Janelas;
