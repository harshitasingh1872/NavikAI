import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { FloatingChatWidget } from "./chat/FloatingChatWidget";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const hideFloatingWidget = location.pathname === "/nyayikai";

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="floating-orb w-[500px] h-[500px] bg-primary/20 top-[-200px] left-[-100px]" />
        <div className="floating-orb w-[400px] h-[400px] bg-accent/15 top-[30%] right-[-150px]" style={{ animationDelay: "2s" }} />
        <div className="floating-orb w-[300px] h-[300px] bg-primary/10 bottom-[20%] left-[10%]" style={{ animationDelay: "4s" }} />
      </div>

      <Navigation />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
      {!hideFloatingWidget && <FloatingChatWidget />}
    </div>
  );
};

export default Layout;
