import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import ImageCard from "@/components/ImageCard";
import { motion } from "framer-motion";
import sacadasImg from "@/assets/sacadas.jpg";
import heroImg from "@/assets/hero-home.jpg";

import sacadas1Img from "@/assets/sacadas4/sacadas1.jpeg";
import sacadas2Img from "@/assets/sacadas4/sacadas2.jpeg";
import sacadas3Img from "@/assets/sacadas4/sacadas3.jpeg";
import sacadas4Img from "@/assets/sacadas4/sacadas4.png";
import sacadas5Img from "@/assets/sacadas4/sacadas5.jpeg";
import sacadas6Img from "@/assets/sacadas4/sacadas6.jpeg";
import sacadas7Img from "@/assets/sacadas4/sacadas7.jpeg";
import sacadas8Img from "@/assets/sacadas4/sacadas8.jpeg";
import sacadas9Img from "@/assets/sacadas4/sacadas9.jpeg";
import sacadaNovaImg from "@/assets/images3/sacadaNova.jpeg";
import sacadaModernaImg from "@/assets/images3/sacadaModerna.png";
import sacadas12Img from "@/assets/sacadas4/sacadas12.jpeg";
import sacadaultimaImg from "@/assets/images3/sacadaultima.png";
const Sacadas = () => (
  <Layout>
    <PageHero 
      title="Sacadas" 
      subtitle="Envidraçamento de sacadas com vidros de alta resistência e transparência." 
      image={sacadasImg} 
    />

    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Envidraçamento de Sacadas" 
          subtitle="Transforme sua sacada em um ambiente seguro, elegante e funcional com nosso sistema de envidraçamento." 
        />

        {/* Texto com imagem */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ImageCard src={heroImg} alt="Sacada envidraçada" />
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display font-bold text-2xl mb-4">Proteja e Valorize seu Imóvel</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O envidraçamento de sacadas oferece proteção contra chuva, vento e poeira, além de proporcionar isolamento acústico e térmico. Ideal para quem busca conforto sem abrir mão da vista.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Utilizamos sistemas com vidros temperados de 8mm, com abertura em folhas deslizantes que permitem total controle de ventilação. O sistema é silencioso e de fácil manuseio.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nossos projetos são desenvolvidos sob medida, respeitando as normas de segurança e as especificações do condomínio. Garantimos um acabamento impecável e durabilidade.
            </p>
          </motion.div>
        </div>

        {/* Cards de tipos de sacadas */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {["Sacada Minimalista", "Sacada Luxo", "Sacada Premium"].map((tipo, i) => (
            <motion.div 
              key={tipo + i} 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="p-6 rounded-xl border border-border text-center hover:shadow-xl transition-transform hover:scale-105"
            >
              <h4 className="font-display font-bold text-lg mb-2">{tipo}</h4>
              <p className="text-muted-foreground text-sm">
                Projetos exclusivos que unem estética, resistência e funcionalidade, adaptados ao seu estilo de vida.
              </p>
            </motion.div>
          ))}
        </div>

        {/* Galeria extra */}
        <SectionTitle 
          title="Galeria de Inspiração" 
          subtitle="Veja alguns modelos instalados em diferentes ambientes." 
        />
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[ 
            { src: sacadas9Img, alt: "Sacada Panorâmica", title: "Sacada Em Construção" },
            { src: sacadaNovaImg, alt: "Sacada Residencial", title: "Sacada Residencial" },
            { src: sacadaModernaImg, alt: "Sacada Moderna", title: "Sacada Moderna" },
            // fotos de sacadas reais, sem edição, para mostrar a qualidade do serviço

            // fotos ilustrativas, para mostrar os tipos de sacadas que podem ser feitas
            { src: sacadas2Img, alt: "Sacada Luxo", title: "Sacada Luxo" },
            { src: sacadas1Img, alt: "Sacada Minimalista", title: "Sacada Minimalista" },
            { src: sacadas3Img, alt: "Sacada Premium", title: "Sacada Premium" },  
            { src: sacadas4Img, alt: "Sacada Premium", title: "Sacada Premium" },
            
            

            // fotos de sacadas reais, sem edição, para mostrar a qualidade do serviço
            { src: sacadas5Img, alt: "Sacada Residencial", title: "Sacada Residencial Em Construção" },
            { src: sacadaultimaImg, alt: "Sacada Moderna", title: "Sacada Simples Pronta Panorâmica" },
            { src: sacadas7Img, alt: "Sacada Panorâmica", title: "Sacada Pré-Fabricados" },
            { src: sacadas8Img, alt: "Sacada Panorâmica", title: "Sacada Pré-Fabricados"},
            { src: sacadas12Img, alt: "Sacada Inteira", title: "Sacada Grande Inteira" }


          ].map((item, i) => (
            <motion.div 
              key={item.title + i} 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:scale-105"
            >
              <ImageCard src={item.src} alt={item.alt} />
              <div className="p-4 text-center">
                <h4 className="font-display font-bold text-lg">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Texto extra */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="font-display font-bold text-2xl mb-4">Mais do que estética, uma solução completa</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            O envidraçamento de sacadas não é apenas um detalhe arquitetônico, mas uma solução que agrega valor ao imóvel, melhora a qualidade de vida e proporciona bem-estar. 
            Com nossos sistemas, você transforma sua sacada em um espaço versátil: área gourmet, escritório, jardim de inverno ou simplesmente um ambiente relaxante para apreciar a vista.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Cada projeto é pensado para unir beleza, segurança e funcionalidade, garantindo que sua sacada seja um verdadeiro diferencial no seu imóvel.
          </p>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Sacadas;