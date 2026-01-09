import { Link } from "react-router-dom";
import { Linkedin, Instagram, Twitter, Mail, MapPin, Sparkles } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const footerLinks = {
  quickLinks: [
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Legal Prudent Blog" },
    { href: "/legal-aid", label: "Legal Aid" },
    { href: "/join", label: "Join the Fraternity" },
  ],
  resources: [
    { href: "/events", label: "Events & Opportunities" },
    { href: "/collaborations", label: "Collaborations" },
    { href: "/contact", label: "Contact Us" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-conditions", label: "Terms & Conditions" },
    { href: "/disclaimer", label: "Disclaimer" },
    { href: "/sitemap", label: "Sitemap" },
  ],
};

const Footer = () => {
  const [clickCount, setClickCount] = useState(0);
  const [easterEggActive, setEasterEggActive] = useState(false);

  const handleDevClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    if (newCount >= 1) {
      setEasterEggActive(true);
      setTimeout(() => {
        window.open("https://abhishekhdey.rf.gd/", "_blank");
        setEasterEggActive(false);
        setClickCount(0);
      }, 1500);
    }
  };

  return (
    <footer className="relative border-t border-border/30 bg-gradient-to-b from-transparent to-muted/20">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 blur-[120px] pointer-events-none" />
      
      {/* Easter Egg Overlay */}
      {easterEggActive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md animate-fade-in">
          <div className="text-center space-y-4">
            <Sparkles className="h-16 w-16 text-accent mx-auto animate-pulse" />
            <p className="text-2xl font-bold text-foreground">You found the secret! ✨</p>
            <p className="text-muted-foreground">Taking you to meet the creator...</p>
          </div>
        </div>
      )}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={logo} 
                alt="Legal Prudent Fraternity" 
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground leading-tight">Legal Prudent</span>
                <span className="text-xs text-accent font-medium tracking-wider">FRATERNITY</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A collaborative legal community fostering legal education, awareness, and professional development in partnership with leading universities.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/70905461/admin/dashboard/" className="p-2 rounded-lg bg-muted/30 hover:bg-accent/20 hover:text-accent transition-all duration-300" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/legalprudent/" className="p-2 rounded-lg bg-muted/30 hover:bg-accent/20 hover:text-accent transition-all duration-300" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://x.com/LegalPrudent" className="p-2 rounded-lg bg-muted/30 hover:bg-accent/20 hover:text-accent transition-all duration-300" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">Supreme Court of India, New Delhi</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">enquiries@legalprudent.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left space-y-1">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Legal Prudent Fraternity. All rights reserved.
              </p>
              <p className="text-muted-foreground/60 text-xs">
                Imagined, Designed & Developed by{" "}
                <button
                  onClick={handleDevClick}
                  className="text-accent/80 hover:text-accent transition-colors duration-300 cursor-pointer font-medium"
                  title={clickCount > 0 && clickCount < 5 ? `${5 - clickCount} more clicks...` : ""}
                >
                  Abhishekh Dey
                </button>
              </p>
            </div>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 text-xs"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
