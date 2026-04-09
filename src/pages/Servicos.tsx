import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import servicosImg from "@/assets/servicos.jpg";
import boxesImg from "@/assets/boxes.jpg";
import sacadasImg from "@/assets/sacadas.jpg";
import obrasImg from "@/assets/obras.jpg";

const services = [
  { img: boxesImg, title: "Boxes para Banheiro", desc: "Fabricação e instalação de boxes em vidro temperado sob medida. Modelos de canto, frontal e de abrir com acabamento premium.", to: "/boxes" },
  { img: sacadasImg, title: "Envidraçamento de Sacadas", desc: "Sistema completo de envidraçamento com vidro temperado. Proteção contra vento, chuva e ruídos com total transparência.", to: "/sacadas" },
  { img: obrasImg, title: "Espelhos e Divisórias", desc: "Espelhos decorativos e divisórias em vidro para ambientes residenciais e comerciais. Design elegante e funcional." },
  { img: servicosImg, title: "Fachadas e Pele de Vidro", desc: "Projetos de fachadas em vidro para edifícios comerciais e residenciais. Alta performance térmica e acústica." },
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
