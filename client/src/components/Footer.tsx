/* 
  Footer Component - Modern Corporate Elegance
  - Company information and links
  - Professional footer design
*/

import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-12" style={{ backgroundColor: '#0052A3' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">GRUPO GALDINO</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Serviços terceirizados com excelência operacional e resposta imediata. Atuando em todo Brasil há mais de 20 anos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">LINKS RÁPIDOS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-white/70 transition-colors"
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/70 transition-colors"
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/70 transition-colors"
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/70 transition-colors"
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">CONTATO</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" style={{ color: '#D4AF37' }} />
                <a
                  href="https://wa.me/5511920063432"
                  className="text-white/70 transition-colors"
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
                >
                  (11) 92006-3432
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" style={{ color: '#D4AF37' }} />
                <a
                  href="mailto:galdinoservicos@outlook.com"
                  className="text-white/70 transition-colors"
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
                >
                  galdinoservicos@outlook.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" style={{ color: '#D4AF37' }} />
                <span className="text-white/70">Todo Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t my-8" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}></div>

        {/* Copyright */}
        <div className="text-center text-white/60 text-sm">
          <p>
            &copy; {currentYear} Grupo Galdino. Todos os direitos reservados.
          </p>
          <p className="mt-2">
            Desenvolvido com profissionalismo e excelência
          </p>
        </div>
      </div>
    </footer>
  );
}
