import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import ImageCard from "@/components/ImageCard";
import obrasImg from "@/assets/obras.jpg";
import heroImg from "@/assets/hero-home.jpg";
import boxesImg from "@/assets/boxes.jpg";
import sacadasImg from "@/assets/sacadas.jpg";
import servicosImg from "@/assets/servicos.jpg";
import equipeImg from "@/assets/equipe.jpg";

const projects = [
  { img: heroImg, title: "Residência Premium", desc: "Fachada em vidro temperado com esquadrias de alumínio." },
  { img: obrasImg, title: "Box para Banheiro", desc: "Box de canto em vidro temperado 8mm." },
  { img: sacadasImg, title: "Sacada Residencial", desc: "Envidraçamento com sistema de folhas deslizantes." },
  { img: boxesImg, title: "Cobertura em Vidro", desc: "Cobertura em vidro laminado com estrutura metálica." },
  { img: servicosImg, title: "Fachada Comercial", desc: "Pele de vidro para edifício comercial." },
  { img: equipeImg, title: "Guarda-corpo", desc: "Guarda-corpo em vidro temperado com fixação por botões." },
];

const Obras = () => (
  <Layout>
    <PageHero title="Obras" subtitle="Conheça nossos projetos realizados com excelência e qualidade." image={obrasImg} />
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Nosso Portfólio" subtitle="Cada projeto é único e reflete nosso compromisso com a perfeição. Confira alguns dos nossos trabalhos realizados." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ImageCard key={p.title} src={p.img} alt={p.title} title={p.title} description={p.desc} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Obras;
