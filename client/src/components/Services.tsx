/* 
  Services Component - Modern Corporate Elegance
  - Display all service categories
  - Grid layout with cards and icons
  - Gold accents and professional styling
*/

import {
  Sparkles,
  Shield,
  Users,
  Building2,
  Camera,
  Wrench,
  DoorOpen,
  Utensils,
  Truck,
  AlertCircle,
  Radio,
  Zap,
  Lock,
  Wind,
  Briefcase,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      category: 'Limpeza e Conservação',
      items: [
        { icon: Building2, name: 'Limpeza Hospitalar' },
        { icon: Sparkles, name: 'Limpeza Pós-Obra' },
        { icon: Building2, name: 'Limpeza de Shoppings e Hotéis' },
        { icon: Wind, name: 'Jardinagem e Conservação' },
        { icon: Wrench, name: 'Limpeza para Indústrias' },
      ],
    },
    {
      category: 'Segurança Patrimonial',
      items: [
        { icon: Shield, name: 'Segurança para Eventos' },
        { icon: AlertCircle, name: 'Escola Armada' },
        { icon: Shield, name: 'Segurança Residencial' },
        { icon: Shield, name: 'Segurança para Escolas' },
        { icon: Users, name: 'Vigilante (Armado/Desarmado)' },
        { icon: Shield, name: 'Segurança Hospitalar' },
        { icon: Truck, name: 'Ronda Motorizada' },
        { icon: Radio, name: 'VSP' },
      ],
    },
    {
      category: 'Segurança Eletrônica',
      items: [
        { icon: Camera, name: 'Biometria Facial' },
        { icon: Lock, name: 'Controle de Acesso' },
        { icon: Camera, name: 'CFTV' },
        { icon: Radio, name: 'Monitoramento 24H' },
        { icon: AlertCircle, name: 'Alarmes' },
        { icon: Zap, name: 'Interfone e Sensores' },
      ],
    },
    {
      category: 'Portaria e Facilities',
      items: [
        { icon: DoorOpen, name: 'Portaria e Controle de Acesso' },
        { icon: Users, name: 'Zeladoria' },
        { icon: Briefcase, name: 'Recepção Corporativa' },
        { icon: Wind, name: 'Cobertura de Férias' },
        { icon: Utensils, name: 'Copeira' },
        { icon: AlertCircle, name: 'Bombeiro Civil' },
      ],
    },
    {
      category: 'Serviços Operacionais',
      items: [
        { icon: Truck, name: 'Motorista com Carro Executivo' },
        { icon: Wrench, name: 'Manutenção Preventiva' },
        { icon: Users, name: 'Manobrista' },
      ],
    },
  ];

  return (
    <section id="services" className="py-20" style={{ background: 'linear-gradient(to bottom right, rgba(0, 82, 163, 0.05), rgba(212, 175, 55, 0.05))' }}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0052A3' }}>
            NOSSOS SERVIÇOS
          </h2>
          <p className="text-lg text-foreground/70 mb-6">
            Mais de 16 tipos de serviços especializados para atender suas necessidades
          </p>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#D4AF37' }}></div>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((serviceGroup) => (
            <div key={serviceGroup.category}>
              {/* Category Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3" style={{ color: '#0052A3' }}>
                <span className="w-1 h-8 rounded-full" style={{ backgroundColor: '#D4AF37' }}></span>
                {serviceGroup.category}
              </h3>

              {/* Service Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceGroup.items.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={service.name}
                      className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      style={{ borderLeft: '4px solid #D4AF37' }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(0, 82, 163, 0.1)' }}>
                          <IconComponent className="w-6 h-6" style={{ color: '#0052A3' }} />
                        </div>
                        <h4 className="font-semibold text-foreground">{service.name}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
