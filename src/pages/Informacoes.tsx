import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import servicosImg from "@/assets/servicos.jpg";
import { CheckCircle } from "lucide-react";

const infos = [
  { title: "Vidro Temperado", text: "O vidro temperado é até 5 vezes mais resistente que o vidro comum. Em caso de quebra, fragmenta-se em pequenos pedaços arredondados, reduzindo riscos de acidentes. É ideal para boxes, portas, fachadas e divisórias." },
  { title: "Vidro Laminado", text: "Composto por duas ou mais lâminas de vidro unidas por uma película de PVB, o vidro laminado oferece alta segurança, isolamento acústico e proteção UV. Quando quebra, os fragmentos ficam aderidos à película." },
  { title: "Normas de Segurança", text: "Todos os nossos produtos seguem rigorosamente as normas da ABNT, incluindo a NBR 7199 que trata da aplicação de vidro na construção civil. Segurança é nossa prioridade absoluta." },
  { title: "Manutenção", text: "A manutenção dos vidros é simples: limpeza regular com água e detergente neutro. Evite produtos abrasivos. Ferragens devem ser verificadas periodicamente para garantir o bom funcionamento." },
];

const Informacoes = () => (
  <Layout>
    <PageHero title="Informações" subtitle="Tudo que você precisa saber sobre vidros e nossos processos." image={servicosImg} />
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Informações Técnicas" subtitle="Conheça os tipos de vidro, normas de segurança e dicas de manutenção." />
        <div className="max-w-4xl mx-auto space-y-8">
          {infos.map((info, i) => (
            <motion.div key={info.title} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle size={24} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">{info.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{info.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Informacoes;
