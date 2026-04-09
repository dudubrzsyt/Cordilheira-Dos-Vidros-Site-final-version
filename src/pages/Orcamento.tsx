import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";
import heroImg from "@/assets/hero-home.jpg";

const Orcamento = () => (
  <Layout>
    <PageHero title="Orçamento" subtitle="Solicite um orçamento personalizado para seu projeto de vidros." image={heroImg} />
    <section className="py-20 section-dark">
      <div className="container mx-auto px-4">
        <SectionTitle title="Solicite seu Orçamento" subtitle="Preencha o formulário abaixo com seus dados e entraremos em contato rapidamente pelo WhatsApp para discutir seu projeto." light />
        <ContactForm />
      </div>
    </section>
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <SectionTitle title="Como Funciona?" subtitle="Nosso processo é simples e transparente." />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Contato", desc: "Envie seus dados e descreva seu projeto." },
            { step: "2", title: "Visita Técnica", desc: "Nossa equipe vai até você para medições." },
            { step: "3", title: "Proposta", desc: "Receba um orçamento detalhado e personalizado." },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-display font-extrabold text-xl">{s.step}</div>
              <h4 className="font-display font-bold mb-2">{s.title}</h4>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Orcamento;
