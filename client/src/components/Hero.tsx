/* 
  Hero Component - Modern Corporate Elegance
  - Full-width hero section with background image
  - Main headline and call-to-action
  - Professional typography and spacing
*/

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: 'url(/images/hero-background.jpg)',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 82, 163, 0.2)' }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            SOLUÇÕES EM
            <span className="block mt-2" style={{ color: '#D4AF37' }}>SEGURANÇA E LIMPEZA</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-8 font-medium drop-shadow">
            Serviços terceirizados com excelência operacional e resposta imediata
          </p>

          {/* Divider */}
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#D4AF37' }}></div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12">
            <div>
              <p className="text-4xl md:text-5xl font-bold drop-shadow" style={{ color: '#D4AF37' }}>20</p>
              <p className="text-sm md:text-base text-white font-semibold drop-shadow">ANOS DE EXPERIÊNCIA</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold drop-shadow" style={{ color: '#D4AF37' }}>16</p>
              <p className="text-sm md:text-base text-white font-semibold drop-shadow">TIPOS DE SERVIÇOS</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold drop-shadow" style={{ color: '#D4AF37' }}>250+</p>
              <p className="text-sm md:text-base text-white font-semibold drop-shadow">CLIENTES ATENDIDOS</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#services"
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
              Conheça Nossos Serviços
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 font-semibold rounded-lg hover:text-white transition-all duration-300"
              style={{ borderColor: '#0052A3', color: '#0052A3' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0052A3';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#0052A3';
              }}
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ color: '#0052A3' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
