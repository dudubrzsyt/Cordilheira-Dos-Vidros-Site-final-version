import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import ImageCard from "@/components/ImageCard";
import { motion } from "framer-motion";
import boxesImg from "@/assets/boxes.jpg";
import obrasImg from "@/assets/obras.jpg";
import boxLuxoImg from "@/assets/boxluxo.png";
import boxMinimalImg from "@/assets/boxminimal.png";
import boxPremiunImg from "@/assets/boxPremiun.png";

const Boxes = () => (
  <Layout>
    <PageHero 
      title="Boxes" 
      subtitle="Boxes de vidro temperado para banheiros com design moderno e segurança." 
      image={boxesImg} 
    />

    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Nossos Boxes" 
          subtitle="Fabricamos boxes sob medida em vidro temperado de alta qualidade, garantindo durabilidade e elegância para seu banheiro." 
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display font-bold text-2xl mb-4">Qualidade Superior</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nossos boxes são fabricados com vidro temperado de 8mm a 10mm, garantindo máxima segurança e resistência. Cada peça passa por rigoroso controle de qualidade para entregar perfeição.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Oferecemos modelos de canto, frontal, e de abrir, todos com acabamento premium em alumínio escovado ou aço inox. Personalizamos cada projeto para se adequar perfeitamente ao seu espaço.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A instalação é realizada por profissionais experientes, garantindo vedação perfeita e acabamento impecável. Todos os nossos boxes possuem garantia e suporte pós-venda.
            </p>
          </motion.div>
          <ImageCard src={obrasImg} alt="Box de vidro temperado" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {["Box de Canto", "Box Frontal", "Box de Abrir"].map((t, i) => (
            <motion.div 
              key={t + i} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl border border-border text-center hover:shadow-lg transition-shadow"
            >
              <h4 className="font-display font-bold text-lg mb-2">{t}</h4>
              <p className="text-muted-foreground text-sm">
                Vidro temperado de alta qualidade com acabamento premium e instalação profissional.
              </p>
            </motion.div>
          ))}
        </div>

        {/* Nova galeria de imagens */}
        <SectionTitle 
          title="Galeria de Inspiração" 
          subtitle="Confira alguns modelos exclusivos de boxes instalados." 
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[ 
            { src: boxLuxoImg, alt: "Box Luxo", title: "Box Luxo" },
            { src: boxMinimalImg, alt: "Box Minimalista", title: "Box Minimalista" },
            { src: boxPremiunImg, alt: "Box Premium", title: "Box Premium" }
          ].map((item, i) => (
            <motion.div 
              key={item.title + i} 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform hover:scale-105"
            >
              <ImageCard src={item.src} alt={item.alt} />
              <div className="p-4 text-center">
                <h4 className="font-display font-bold text-lg">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Boxes;