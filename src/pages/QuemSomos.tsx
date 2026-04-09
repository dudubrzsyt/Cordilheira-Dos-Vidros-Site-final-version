import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import equipeImg from "@/assets/equipe.jpg";
import { Target, Eye, Heart } from "lucide-react";

const QuemSomos = () => (
  <Layout>
    <PageHero title="Quem Somos" subtitle="Conheça a história e os valores da Cordilheira dos Vidros." image={equipeImg} />
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Nossa História" subtitle="Anos de experiência transformando espaços com soluções em vidro de alta qualidade." />
        <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            A Cordilheira dos Vidros nasceu da paixão por transformar ambientes através da transparência e elegância do vidro. Fundada com o compromisso de oferecer soluções de altíssima qualidade, nossa empresa se consolidou como referência no mercado de vidraçaria.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            Contamos com uma equipe de profissionais altamente qualificados e experientes, que trabalham com dedicação para entregar projetos que superam as expectativas de nossos clientes. Cada detalhe é cuidadosamente planejado e executado.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            Nosso diferencial está na combinação de materiais de primeira linha, técnicas avançadas de instalação e um atendimento personalizado que acompanha o cliente em todas as etapas do projeto.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { icon: Target, title: "Missão", desc: "Oferecer soluções em vidro com excelência, segurança e design, superando as expectativas dos nossos clientes." },
            { icon: Eye, title: "Visão", desc: "Ser reconhecida como a principal empresa de vidraçaria da região, referência em qualidade e inovação." },
            { icon: Heart, title: "Valores", desc: "Comprometimento, transparência, qualidade, respeito ao cliente e busca constante pela excelência." },
          ].map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="text-center p-8 rounded-xl border border-border">
              <item.icon size={40} className="mx-auto mb-4 text-accent" />
              <h4 className="font-display font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default QuemSomos;
