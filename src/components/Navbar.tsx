import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logojpg from "@/assets/logo.jpg"; 
const links = [
  { to: "/", label: "Início" },
  { to: "/boxes", label: "Boxes" },
  { to: "/anteparo", label: "Anteparos"},
  { to: "/sacadas", label: "Sacadas" },
  { to: "/Manutencao", label: "Manutenção" },
  { to: "/janelas", label: "Janelas De Correr" },
  { to: "/orcamento", label: "Orçamento" },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/informacoes", label: "Informações" },
  { to: "/obras", label: "Obras" },
  { to: "/servicos", label: "Serviços" },
  
 
  
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <Link to="/" className="font-display text-xl font-extrabold tracking-tight text-primary-foreground drop-shadow-lg">
          <span className="text-gradient">Cordilheira</span>
          <span className="text-primary-foreground"> dos Vidros</span>
          <img src={logojpg} alt="Logo" className="w-10 h-10 ml-2 inline-block" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.to
                  ? "bg-accent/20 text-accent"
                  : "text-primary-foreground/80 hover:text-accent hover:bg-accent/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-primary-foreground p-2">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-nav overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? "bg-accent/20 text-accent"
                      : "text-primary-foreground/80 hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
