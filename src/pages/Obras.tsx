import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import ImageCard from "@/components/ImageCard";
import boxesImg from "@/assets/boxes.jpg";
import sacadas9Img from "@/assets/sacadas4/sacadas9.jpeg";
import sacada12Img from "@/assets/sacada12.jpeg";
import janelaCorrer3Img from "@/assets/images3/janelasCorrer3.png";
import obrasImg from "@/assets/obras.jpg";
import manutencaoVidrosImg from "@/assets/images3/manutencaoVidros.png";
import manutencaoBoxImg from "@/assets/images3/manutencaoBox.png";

const projects = [
  { 
    img: manutencaoBoxImg, 
    title: "Anteparo Pré-fabricado", 
    desc: "Estrutura em vidro temperado pré-montada, oferecendo praticidade na instalação e acabamento moderno." 
  },
  { 
    img: sacada12Img, 
    title: "Anteparo em Construção", 
    desc: "Montagem de anteparo em vidro com esquadrias resistentes, garantindo segurança e estética durante a obra." 
  },
  { 
    img: sacadas9Img, 
    title: "Sacada Residencial", 
    desc: "Sistema de envidraçamento deslizante que protege contra vento e chuva, mantendo a vista panorâmica." 
  },
  { 
    img: boxesImg, 
    title: "Box de Vidro", 
    desc: "Box em vidro laminado com estrutura metálica, unindo resistência, praticidade e design sofisticado." 
  },
  { 
    img: janelaCorrer3Img, 
    title: "Janela de Correr Pronta", 
    desc: "Janela finalizada em vidro temperado, com deslizamento suave e acabamento premium para ambientes modernos." 
  },
  { 
    img: manutencaoVidrosImg, 
    title: "Guarda-corpo", 
    desc: "Guarda-corpo em vidro temperado fixado por botões metálicos, oferecendo segurança sem perder a elegância." 
  },
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
