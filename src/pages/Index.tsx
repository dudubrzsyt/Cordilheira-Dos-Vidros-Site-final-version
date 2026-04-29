import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Sparkles, Award } from "lucide-react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import ImageCard from "@/components/ImageCard";
import heroImg from "@/assets/hero-home.jpg";
import boxesImg from "@/assets/boxes.jpg";
import sacadasImg from "@/assets/sacadas.jpg";
import obrasImg from "@/assets/obras.jpg";
import servicosImg from "@/assets/servicos.jpg";
import anteparoNovo1Img from "@/assets/anteparoNovo1.png";
import sacada06Img from "@/assets/sacada06.jpeg";
const features = [
  { icon: Shield, title: "Segurança", desc: "Vidros temperados e laminados com máxima resistência e segurança para sua família." },
  { icon: Sparkles, title: "Elegância", desc: "Projetos sob medida que transformam qualquer ambiente com sofisticação e transparência." },
  { icon: Award, title: "Qualidade", desc: "Materiais premium e mão de obra especializada garantindo excelência em cada projeto." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Casa luxuosa com vidros" className="w-full h-full object-cover brightness-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-midnight/50 to-midnight/90" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight drop-shadow-lg">
              <span className="text-gradient">Cordilheira</span>
              <br />dos Vidros
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-10 font-body max-w-3xl mx-auto leading-relaxed">
              Excelência em soluções de vidro para projetos que inspiram.<br />
              Transformamos espaços com transparência, segurança e sofisticação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/orcamento" className="btn-cta hover:scale-105 transition-transform duration-300">
                Solicitar Orçamento
                <ArrowRight size={20} />
              </Link>
              <a
                href="https://wa.me/5511977016309"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-lg hover:scale-105 transition-transform duration-300"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 section-light">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Por que escolher a Cordilheira?"
            subtitle="Compromisso com qualidade, segurança e design em cada projeto de vidro."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center p-8 rounded-2xl border border-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center shadow-md">
                  <f.icon size={36} className="text-accent" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-3 text-midnight">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 section-frost">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Nossos Serviços"
            subtitle="Soluções completas em vidro para todos os tipos de projetos.
            Cliques para ver detalhes e portfólio de cada serviço."
            
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {[
              { img: boxesImg, title: "Boxes", desc: "Boxes para banheiros", to: "/boxes" },
              { img: sacada06Img, title: "Sacadas", desc: "Envidraçamento de sacadas", to: "/sacadas" },
              { img: anteparoNovo1Img, title: "Anteparos", desc: "Projetos realizados  de anteparos", to: "/anteparo" },
              { img: servicosImg, title: "Serviços", desc: "Todos os serviços", to: "/servicos" },
            ].map((item, i) => (
              <Link to={item.to} key={item.title}>
                <ImageCard
                  src={item.img}
                  alt={item.title}
                  title={item.title}
                  description={item.desc}
                  delay={i * 0.1}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Entre em Contato"
            subtitle="Preencha o formulário e entraremos em contato pelo WhatsApp."
            light
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
