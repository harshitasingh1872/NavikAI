import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import LegalAid from "./pages/LegalAid";
import Collaborations from "./pages/Collaborations";
import Events from "./pages/Events";
import Join from "./pages/Join";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Disclaimer from "./pages/Disclaimer";
import Sitemap from "./pages/Sitemap";
import NyayikAI from "./pages/NyayikAI";

import GDPRCookieModal from "@/components/GDPRCookieModal";

<> //Manual Changes
  <GDPRCookieModal /> //Manual Changes
  <Routes>{/* existing routes */}</Routes> //Manual Changes
</> //Manual Changes

const consent = JSON.parse( //Manual Changes
  localStorage.getItem("lpf_cookie_preferences") || "{}" //Manual Changes
); //Manual Changes

if (consent.analytics) { //Manual Changes
  // Load Google Analytics //Manual Changes
} //Manual Changes

if (consent.marketing) { //Manual Changes
  // Load marketing scripts //Manual Changes
} //Manual Changes


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Toaster />
          <Sonner />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/legal-aid" element={<LegalAid />} />
              <Route path="/collaborations" element={<Collaborations />} />
              <Route path="/events" element={<Events />} />
              <Route path="/join" element={<Join />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/nyayikai" element={<NyayikAI />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/sitemap" element={<Sitemap />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
