import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <a
        className="ravenick-badge"
        href="https://github.com/Ravenick"
        target="_blank"
        rel="noreferrer"
        aria-label="Built by Ravenick, Nelson Emmanuel"
        style={{
          position: 'fixed',
          left: '1rem',
          bottom: '1rem',
          zIndex: 2147483647,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.7rem',
          minWidth: '10.5rem',
          padding: '0.55rem 0.8rem 0.55rem 0.55rem',
          overflow: 'hidden',
          color: '#f8fafc',
          background: 'rgba(15, 23, 42, 0.94)',
          border: '1px solid rgba(129, 140, 248, 0.52)',
          borderRadius: '0.8rem',
          boxShadow: '0 10px 30px rgba(15, 23, 42, 0.28), 0 0 22px rgba(99, 102, 241, 0.18)',
          textDecoration: 'none',
          backdropFilter: 'blur(12px)',
          pointerEvents: 'auto',
        }}
      >
        <span className="ravenick-badge__sheen" aria-hidden="true" />
        <img src="/oc-logo-no-bg.png" alt="" className="ravenick-badge__logo" />
        <span className="ravenick-badge__copy">
          <span className="ravenick-badge__built">Built by</span>
          <span className="ravenick-badge__name">Ravenick</span>
        </span>
      </a>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
