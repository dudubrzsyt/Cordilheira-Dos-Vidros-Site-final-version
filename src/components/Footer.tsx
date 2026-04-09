import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-dark py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-extrabold mb-4">
              <span className="text-gradient">Cordilheira</span> dos Vidros
            </h3>
            <p className="text-primary-foreground/70 font-body leading-relaxed">
              Excelência em soluções de vidro para projetos residenciais e comerciais.
              Qualidade, segurança e sofisticação em cada detalhe.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Navegação</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { to: "/boxes", label: "Boxes" },
                { to: "/sacadas", label: "Sacadas" },
                { to: "/obras", label: "Obras" },
                { to: "/servicos", label: "Serviços" },
                { to: "/orcamento", label: "Orçamento" },
                { to: "/Janelas", label: "Janelas" },
                { to: "/manutencao", label: "Manutenção" },
                { to: "/anteparo", label: "Anteparos" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-3 text-primary-foreground/70 text-sm">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-accent" />
                <span>+(55) 11 91497 3669</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-accent" />
                <span>Contato@cordilheiradosvidros.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-accent" />
                <span>Capela Do Socorro, São Paulo</span>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-accent" />
                <span>Empresa De Vidraçaria CNPJ  63.215.219/0001-28</span>
              </div>

            
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-primary-foreground/40 text-sm">
          © {new Date().getFullYear()} Outras formas de adquirir nossos produtos: entre em contato com nossa equipe de atendimento.  
Endereço  Rua: Lauzane 823 - Capela do Socorro, São Paulo - SP 04782-010

Nossos serviços digitais são fornecidos pela Cordilheira Vidros Brasil Ltda.  
CNPJ: 63.215.219/0001-28  CEP  04782-010 São Paulo - SP

© 2026 Cordilheira Vidros. Todos os direitos reservados.  
Política de Privacidade | Termos de Venda | Avisos Legais | Mapa do Site  

Brasil


        </div>
      </div>
    </footer>
  );
};

export default Footer;
