import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Boxes from "./pages/Boxes";
import Sacadas from "./pages/Sacadas";
import Orcamento from "./pages/Orcamento";
import QuemSomos from "./pages/QuemSomos";
import Informacoes from "./pages/Informacoes";
import Obras from "./pages/Obras";
import Servicos from "./pages/Servicos";
import Equipe from "./pages/Manutencao";
import Janelas from "./pages/Janelas";
import NotFound from "./pages/NotFound";
import Anteparos from "./pages/Anteparos";  
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Index />} />
          <Route path="/boxes" element={<Boxes />} />
          <Route path="/sacadas" element={<Sacadas />} />
          <Route path="/orcamento" element={<Orcamento />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/informacoes" element={<Informacoes />} />
          <Route path="/obras" element={<Obras />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/anteparo" element={<Anteparos />} />
          <Route path="/janelas" element={<Janelas />} />
          <Route path="/manutencao" element={<Equipe />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
