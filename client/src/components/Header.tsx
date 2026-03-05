/* 
  Header Component - Modern Corporate Elegance
  - Fixed navigation with logo and menu items
  - Blue corporate background with gold accents
  - Responsive design with mobile menu support
*/

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Segmentos', href: '#segments' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo-galdino.png" alt="Grupo Galdino" className="h-14 w-auto" />
            <div>
              <h1 className="text-lg font-bold" style={{ color: '#0052A3' }}>GRUPO GALDINO</h1>
              <p className="text-xs font-semibold" style={{ color: '#D4AF37' }}>SERVIÇOS TERCEIRIZADOS</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-sm transition-colors duration-300 underline-gold"
                style={{ color: '#0052A3' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#0052A3')}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: '#0052A3', color: 'white' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#003d7a';
                e.currentTarget.style.borderBottom = '3px solid #D4AF37';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0052A3';
                e.currentTarget.style.borderBottom = 'none';
              }}
            >
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ backgroundColor: '#F5F5F5' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" style={{ color: '#0052A3' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: '#0052A3' }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col gap-4 mt-4">
              {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-sm transition-colors"
                style={{ color: '#0052A3' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#0052A3')}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
              ))}
              <a
                href="#contact"
                className="text-sm text-center font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                style={{ backgroundColor: '#0052A3', color: 'white', display: 'block' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Solicitar Orçamento
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
