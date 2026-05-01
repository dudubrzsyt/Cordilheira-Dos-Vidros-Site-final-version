import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-dark py-10 border-t border-primary-foreground/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
          
          {/* Logo e descrição */}
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold tracking-tight">
              <span className="text-gradient">Cordilheira</span> dos Vidros
            </h3>
            <p className="text-primary-foreground/70 leading-relaxed transition-colors duration-300 hover:text-primary-foreground">
              Excelência em soluções de vidro para projetos residenciais e comerciais.  
              Qualidade, segurança e sofisticação em cada detalhe.
            </p>
          </div>

          {/* Navegação */}
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
                <Link 
                  key={link.to} 
                  to={link.to} 
                  className="text-primary-foreground/60 hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-3 text-primary-foreground/70">
              <div className="flex items-center gap-3 hover:text-accent transition-colors duration-300">
                <Phone size={16} className="text-accent" />
                <span>São Paulo- 55 11 91497-3669</span>
                <span>
                  
                  Sorocaba- 55 15 99172-8110 </span>
              </div>
              <div className="flex items-center gap-3 hover:text-accent transition-colors duration-300">
                <Mail size={16} className="text-accent" />
                <span>Contato@cordilheiradosvidros.com.br</span>
              </div>
              <div className="flex items-center gap-3 hover:text-accent transition-colors duration-300">
                <MapPin size={16} className="text-accent" />
                <span>Capela Do Socorro, São Paulo</span>
              </div>
              <div className="flex items-center gap-3 hover:text-accent transition-colors duration-300">
                <MapPin size={16} className="text-accent" />
                <span>Empresa De Vidraçaria CNPJ 63.215.219/0001-28</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha final */}
        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center text-primary-foreground/50 text-xs leading-relaxed">
          © {new Date().getFullYear()} Outras formas de adquirir nossos produtos: entre em contato com nossa equipe de atendimento.  
          <br /> Endereço Escritório Administrativo: Rua Lauzane 823 - Capela do Socorro, São Paulo - SP 04782-010
          <br /> Nossos serviços digitais são fornecidos pela Cordilheira Vidros Brasil Ltda.  
          <br /> CNPJ: 63.215.219/0001-28 | CEP 04782-010 São Paulo - SP
          <br /> © 2026 Cordilheira Vidros. Todos os direitos reservados.  
          <br /> Política de Privacidade | Termos de Venda | Avisos Legais | Mapa do Site
        </div>
      </div>
    </footer>
  );
};

export default Footer;
