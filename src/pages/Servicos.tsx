import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import janela2Img from "@/assets/images3/janela2.png";
import boxesImg from "@/assets/boxes.jpg";
import sacadasImg from "@/assets/sacadas.jpg";
import obrasImg from "@/assets/obras.jpg";
import janela3Img from "@/assets/images3/janela3.png";
import servicosImg from "@/assets/servicos.jpg";
import janela4Img from "@/assets/images3/janela4.png";
import janela5Img from "@/assets/images3/janela5.png";

const services = [
  { 
    img: boxesImg, 
    title: "Boxes para Banheiro", 
    desc: "Fabricação e instalação de boxes em vidro temperado sob medida. Modelos de canto, frontal e de abrir com acabamento premium.", 
    to: "/boxes" 
  },
  { 
    img: sacadasImg, 
    title: "Envidraçamento de Sacadas", 
    desc: "Sistema completo de envidraçamento com vidro temperado. Proteção contra vento, chuva e ruídos com total transparência.", 
    to: "/sacadas" 
  },
  { 
  img: obrasImg, 
  title: "Box de Banheiro", 
  desc: "Box em vidro temperado sob medida, com acabamento refinado que une segurança e praticidade.", 
  to: "/boxes" 
},

  { 
    img: janela5Img, 
    title: "Janelas de Correr", 
    desc: "Instalação e manutenção de janelas de correr em vidro temperado. Soluções práticas e duráveis para seu ambiente.", 
    to: "/janelas" 
  },
  { 
    img: janela3Img, 
    title: "Manutenção de Janelas", 
    desc: "Serviços especializados de manutenção e reparo em janelas de vidro. Troca de peças, ajustes e vedação com garantia de qualidade.", 
    to: "/manutencao" 
  },
  
];


const Servicos = () => (
  <Layout>
    <PageHero title="Serviços" subtitle="Soluções completas em vidro para todos os tipos de projetos." image={servicosImg} />
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Nossos Serviços" subtitle="Oferecemos uma ampla gama de serviços em vidro, desde projetos residenciais até grandes obras comerciais." />
        <div className="space-y-16">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "md:[direction:rtl] md:[&>*]:!direction-ltr" : ""}`}>
              <div className="image-card">
                <img src={s.img} alt={s.title} className="w-full aspect-[4/3] object-cover rounded-xl" />
              </div>
              <div style={{ direction: "ltr" }}>
                <h3 className="font-display font-bold text-2xl mb-4">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                {s.to && (
                  <Link to={s.to} className="btn-cta inline-flex text-base px-6 py-3">
                    Saiba Mais <ArrowRight size={18} />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Servicos;
