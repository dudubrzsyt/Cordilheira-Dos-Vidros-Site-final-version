import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import anteparoImg from "@/assets/anteparo.png";
import boxesImg from "@/assets/boxes.jpg";
import equipeImg from "@/assets/equipe.jpg";
import heroImg from "@/assets/hero-home.jpg";
import obrasImg from "@/assets/obras.jpg";
import sacadasImg from "@/assets/sacadas.jpg";
import servicosImg from "@/assets/servicos.jpg";
import anteparo2Img from "@/assets/anteparo2.png";  

// alterção
import sacada07Img from "@/assets/sacada07.jpeg";
import sacada08Img from "@/assets/sacada08.jpeg";
import sacada06Img from "@/assets/sacada06.jpeg";
import sacada2Img from "@/assets/sacada2.png";
import sacada1Img from "@/assets/sacada1.png";
import sacada5Img from "@/assets/sacada5.png";
import sacada09Img from "@/assets/sacada09.jpeg";
import sacada10Img from "@/assets/sacada10.jpeg";
import sacada11Img from "@/assets/sacada11.jpeg";
import sacada12Img from "@/assets/sacada12.jpeg";
import sacada13Img from "@/assets/sacada13.jpeg";
import anteparoNovoImg from "@/assets/anteparoNovo1.png";
import anteparoMinimalistaImg from "@/assets/images3/anteparoMinimalista.png";
const anteparos = [
  
  {
    img: sacada07Img,
    title: "Anteparo Em Construção",
    desc: "Anteparo aplicado em sacada panorâmica em fase de construção."
    ,to: "/obras"
    
    
  },
  {
    img: sacada08Img,
    title: "Anteparo Residencial",
    desc: "Anteparo em sacada residencial, mostrando privacidade e proteção."
  },
  {
    img: sacada06Img,
    title: "Anteparo Moderna",
    desc: "Anteparo em sacada moderna, com design sofisticado."
  },
  {
    img: sacada2Img,
    title: "Anteparo Luxo",
    desc: "Anteparo em sacada de luxo, destacando elegância."
  },
  {
    img: anteparoMinimalistaImg,
    title: "Anteparo Minimalista",
    desc: "Anteparo minimalista, estilo clean e funcional."
  },
  {
    img: sacada5Img,
    title: "Anteparo Premium",
    desc: "Anteparo em sacada premium, acabamento impecável."
  },
  {
    img: sacada09Img,
    title: "Anteparo Residencial Em Construção",
    desc: "Anteparo em sacada residencial em fase de obra."
  },
  {
    img: sacada10Img,
    title: "Anteparo Moderna Em Construção",
    desc: "Anteparo em sacada moderna em fase de obra."
  },
  {
    img: sacada11Img,
    title: "Anteparo Pré-Fabricados",
    desc: "Anteparo em sacada pré-fabricada, montagem rápida e segura."
  },
  {
    img: sacada12Img,
    title: "Anteparo Pré-Fabricados",
    desc: "Anteparo em sacada pré-fabricada, solução prática."
  },

  { 
    img : sacada13Img,
    title: "Anteparo Grande Inteira",
    desc: "Anteparo em sacada grande inteira, proteção total com design elegante."
  },

];

const Anteparos = () => (
  <Layout>
    <PageHero 
      title="Anteparos" 
      subtitle="Soluções completas em anteparos de vidro para segurança, conforto e design moderno." 
      image={anteparo2Img} 
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
                  <div>
                    
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>



        {/* Espaço para fotos adicionais */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-20">
  {[ 
    { src: "https://brasilredesprotecoes.com.br/wp-content/uploads/2025/10/dfce020857a66819c654f30aaf02fe51dr-1024x559.webp", alt: "foto de anteparo em obra" },
    
    { src: "https://intactaprotecoes.com.br/wp-content/uploads/2022/07/Redes-de-protecao-no-abc-768x1024.jpeg", alt: "anteparo " },

    { src: anteparoNovoImg, alt: "foto de divisória de vidro" },

  ].map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.2 }}
      className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-500 bg-gray-100 flex items-center justify-center"
    >
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-64 object-cover rounded-2xl transform hover:scale-110 transition-transform duration-700"
      />
      {/* Overlay para efeito premium */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
    </motion.div>
  ))}
</div>

        {/* Texto adicional */}
      </div>
    </section>
  </Layout>
);

    




export default Anteparos;