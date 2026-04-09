import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import anteparoImg from "@/assets/anteparo.jpg";
import boxesImg from "@/assets/boxes.jpg";
import equipeImg from "@/assets/equipe.jpg";
import heroImg from "@/assets/hero-home.jpg";
import obrasImg from "@/assets/obras.jpg";
import sacadasImg from "@/assets/sacadas.jpg";
import servicosImg from "@/assets/servicos.jpg";
import imageImg from "@/assets/image.png";  
const anteparos = [
  
  
 { 
    img: equipeImg, 
    title: "Anteparos Personalizados", 
    desc: "Projetos sob medida de anteparos em vidro laminado ou temperado. Soluções exclusivas para cada necessidade." 
  },
  { 
    img: obrasImg, 
    title: "Anteparos em Obras", 
    desc: "Soluções de anteparos para projetos de construção, garantindo qualidade e durabilidade." 
  },
  { 
    img: sacadasImg, 
    title: "Anteparos para Sacadas", 
    desc: "Soluções de anteparos para sacadas, proporcionando privacidade e proteção contra o clima." 
  },
  {
    img: heroImg,
    title: "Divisórias de Vidro", 
    desc: "Divisórias de vidro para ambientes comerciais e residenciais, combinando funcionalidade e design moderno."
  },

  {
    img: servicosImg,
    title: "Manutenção de Anteparos", 
    desc: "Serviços de manutenção e reparo para anteparos de vidro, garantindo segurança e estética contínua."
  },
  
  
  { 
    img: boxesImg,
    to: "/anteparos"   // <-- adiciona aqui
    
  },
  {
    img: anteparoImg,
    title: "Instalação Profissional", 
    desc: "Equipe especializada para instalação de anteparos, garantindo acabamento perfeito e segurança."
  }
];

const Anteparos = () => (
  <Layout>
    <PageHero 
      title="Anteparos" 
      subtitle="Soluções completas em anteparos de vidro para segurança, conforto e design moderno." 
      image={imageImg} 
    />
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Nossos Anteparos" 
          subtitle="Oferecemos uma ampla gama de anteparos em vidro, ideais para boxes, sacadas e divisórias." 
        />
        <div className="space-y-16">
          {anteparos.map((s, i) => (
            <motion.div 
              key={s.title+ i} 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "md:[direction:rtl] md:[&>*]:!direction-ltr" : ""}`}
            >
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

        {/* Espaço para fotos adicionais */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
            <img src="" alt="foto de anteparo em obra" />
          </div>
          <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
            <img src="" alt="foto de anteparo em sacada" />
          </div>
          <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
         <img src="https://www.cristalvidrosrp.com.br/fx-files/images/medium/34_plgNewsPoster.jpg" alt="foto de divisória de vidro"  />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Anteparos;
