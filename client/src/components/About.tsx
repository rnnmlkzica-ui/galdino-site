/* 
  About Component - Modern Corporate Elegance
  - Company mission, vision, and values
  - Professional layout with gold accents
  - Organized information hierarchy
*/

import { Target, Eye, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0052A3' }}>
            QUEM SOMOS
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#D4AF37' }}></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* Left Column - Background Image */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/about-section-bg.jpg"
              alt="Sobre Grupo Galdino"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Text Content */}
          <div>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              O Grupo Galdino é uma empresa especializada em serviços terceirizados com mais de 20 anos de experiência no mercado. Atuamos em todo o Brasil oferecendo soluções completas em segurança patrimonial, limpeza e facilities para diversos segmentos.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Com mais de 250 clientes atendidos e 16 tipos de serviços diferentes, consolidamos nossa posição como referência em excelência operacional e resposta imediata às necessidades de nossos parceiros.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#D4AF37' }}>
                  <span className="font-bold text-sm" style={{ color: '#0052A3' }}>✓</span>
                </div>
                <p className="text-foreground font-medium">Atuação em todo Brasil</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#D4AF37' }}>
                  <span className="font-bold text-sm" style={{ color: '#0052A3' }}>✓</span>
                </div>
                <p className="text-foreground font-medium">Equipes treinadas e certificadas</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#D4AF37' }}>
                  <span className="font-bold text-sm" style={{ color: '#0052A3' }}>✓</span>
                </div>
                <p className="text-foreground font-medium">Tecnologia e inovação constante</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-secondary rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8" style={{ color: '#D4AF37' }} />
              <h3 className="text-2xl font-bold" style={{ color: '#0052A3' }}>MISSÃO</h3>
            </div>
            <div className="w-12 h-1 mb-4" style={{ backgroundColor: '#D4AF37' }}></div>
            <p className="text-foreground/80 leading-relaxed">
              Ser reconhecida como a melhor empresa de terceirização de serviços do Brasil, oferecendo soluções inovadoras e confiáveis.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-secondary rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-8 h-8" style={{ color: '#D4AF37' }} />
              <h3 className="text-2xl font-bold" style={{ color: '#0052A3' }}>VISÃO</h3>
            </div>
            <div className="w-12 h-1 mb-4" style={{ backgroundColor: '#D4AF37' }}></div>
            <p className="text-foreground/80 leading-relaxed">
              Entender as necessidades de cada cliente e oferecer o melhor atendimento possível, superando expectativas.
            </p>
          </div>

          {/* Values */}
          <div className="bg-secondary rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8" style={{ color: '#D4AF37' }} />
              <h3 className="text-2xl font-bold" style={{ color: '#0052A3' }}>VALORES</h3>
            </div>
            <div className="w-12 h-1 mb-4" style={{ backgroundColor: '#D4AF37' }}></div>
            <p className="text-foreground/80 leading-relaxed">
              Ética, honestidade e respeito em todos os ambientes e às diversidades. Comprometimento com a excelência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
