import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import ImageCard from "@/components/ImageCard";
import { motion } from "framer-motion";
import sacadasImg from "@/assets/sacadas.jpg";
import heroImg from "@/assets/hero-home.jpg";

const Sacadas = () => (
  <Layout>
    <PageHero title="Sacadas" subtitle="Envidraçamento de sacadas com vidros de alta resistência e transparência." image={sacadasImg} />
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Envidraçamento de Sacadas" subtitle="Transforme sua sacada em um ambiente seguro, elegante e funcional com nosso sistema de envidraçamento." />
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ImageCard src={heroImg} alt="Sacada envidraçada" />
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
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
      </div>
    </section>
  </Layout>
);

export default Sacadas;
