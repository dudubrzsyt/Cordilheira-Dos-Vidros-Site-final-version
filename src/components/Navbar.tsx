import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo2 from "@/assets/logo2.png";

const links = [
  { to: "/", label: "Início" },
  { to: "/boxes", label: "Boxes" },
  { to: "/anteparo", label: "Anteparos" },
  { to: "/sacadas", label: "Sacadas" },
  { to: "/Manutencao", label: "Manutenções" },
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary/60 via-primary/70 to-primary/60 backdrop-blur-lg border-b border-primary-foreground/10 shadow-lg">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        
        {/* Logo + texto */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src={logo2} 
            alt="Cordilheira Logo" 
            className="w-12 h-12 object-contain drop-shadow-lg transition-transform duration-300 hover:scale-110" 
          />
          <span className="font-display text-lg sm:text-xl font-extrabold tracking-tight text-primary-foreground transition-colors duration-300 hover:text-accent">
            <span className="text-gradient">Cordilheira</span> dos Vidros
          </span>
        </Link>

        {/* Links Desktop */}
        <div className="hidden lg:flex items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                location.pathname === link.to
                  ? "bg-accent/30 text-accent shadow-sm"
                  : "text-primary-foreground/80 hover:text-accent hover:bg-accent/20"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Toggle Mobile */}
        <button 
          onClick={() => setOpen(!open)} 
          className="lg:hidden text-primary-foreground p-2 transition-transform duration-300 hover:scale-110"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden bg-gradient-to-r from-primary/70 via-primary/80 to-primary/70 backdrop-blur-lg border-t border-primary-foreground/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.to
                      ? "bg-accent/30 text-accent shadow-sm"
                      : "text-primary-foreground/80 hover:text-accent hover:bg-accent/20"
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
