/* 
  Segments Component - Modern Corporate Elegance
  - Display market segments served
  - Professional card layout with icons
  - Gold accents and hover effects
*/

import {
  BookOpen,
  Building2,
  Heart,
  Home,
  ShoppingCart,
  Hotel,
  Briefcase,
} from 'lucide-react';

export default function Segments() {
  const segments = [
    {
      icon: BookOpen,
      name: 'Escolas',
      description: 'Segurança e limpeza para instituições educacionais',
    },
    {
      icon: Building2,
      name: 'Indústria',
      description: 'Serviços especializados para ambientes industriais',
    },
    {
      icon: Heart,
      name: 'Hospital',
      description: 'Limpeza hospitalar e segurança em saúde',
    },
    {
      icon: Home,
      name: 'Residência',
      description: 'Segurança e facilities para residências',
    },
    {
      icon: Briefcase,
      name: 'Condomínio',
      description: 'Gestão completa de segurança condominal',
    },
    {
      icon: ShoppingCart,
      name: 'Shopping',
      description: 'Limpeza e segurança para shopping centers',
    },
    {
      icon: Hotel,
      name: 'Hotel',
      description: 'Serviços de facilities e recepção hoteleira',
    },
  ];

  return (
    <section id="segments" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0052A3' }}>
            SEGMENTOS ATENDIDOS
          </h2>
          <p className="text-lg text-foreground/70 mb-6">
            Atuamos em diversos setores com soluções personalizadas
          </p>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#D4AF37' }}></div>
        </div>

        {/* Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment) => {
            const IconComponent = segment.icon;
            return (
              <div
                key={segment.name}
                className="rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                style={{ background: 'linear-gradient(to bottom right, rgba(0, 82, 163, 0.05), rgba(212, 175, 55, 0.05))' }}
              >
                {/* Icon Container */}
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:transition-colors duration-300"
                  style={{ backgroundColor: '#0052A3' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#D4AF37')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0052A3')}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2" style={{ color: '#0052A3' }}>
                  {segment.name}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {segment.description}
                </p>

                {/* Accent Line */}
                <div
                  className="w-8 h-1 mt-4 transition-all duration-300"
                  style={{ backgroundColor: '#D4AF37' }}
                  onMouseEnter={(e) => (e.currentTarget.style.width = '3rem')}
                  onMouseLeave={(e) => (e.currentTarget.style.width = '2rem')}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
