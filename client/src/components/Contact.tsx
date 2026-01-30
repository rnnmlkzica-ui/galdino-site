/* 
  Contact Component - Modern Corporate Elegance
  - Contact form and information
  - Professional layout with blue and gold accents
  - Responsive design
*/

import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20" style={{ background: 'linear-gradient(135deg, #0052A3 0%, rgba(0, 82, 163, 0.9) 100%)' }}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ENTRE EM CONTATO
          </h2>
          <p className="text-lg text-white/80 mb-6">
            Estamos prontos para atender suas necessidades
          </p>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#D4AF37' }}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                Informações de Contato
              </h3>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#D4AF37' }}>
                <Phone className="w-6 h-6" style={{ color: '#0052A3' }} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">WhatsApp</h4>
                <a
                  href="https://wa.me/5511920063432"
                  className="text-white/80 hover:transition-colors text-lg"
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}
                >
                  (11) 92006-3432
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#D4AF37' }}>
                <Mail className="w-6 h-6" style={{ color: '#0052A3' }} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                <a
                  href="mailto:galdinoservicos@outlook.com"
                  className="text-white/80 hover:transition-colors text-lg"
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}
                >
                  galdinoservicos@outlook.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#D4AF37' }}>
                <MapPin className="w-6 h-6" style={{ color: '#0052A3' }} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Atuação</h4>
                <p className="text-white/80 text-lg">
                  Atendemos em todo Brasil
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="rounded-lg p-6 mt-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
              <p className="text-white/90 leading-relaxed">
                Disponível para negociações e apresentações de nossos serviços. Conte com nossa equipe para oferecer as melhores soluções em segurança e limpeza.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#0052A3' }}>
              Solicitar Orçamento
            </h3>

            {submitted ? (
              <div className="rounded-lg p-6 text-center" style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                <p className="font-semibold text-lg" style={{ color: '#15803d' }}>
                  Mensagem enviada com sucesso!
                </p>
                <p className="mt-2" style={{ color: '#166534' }}>
                  Entraremos em contato em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#0052A3' }}>
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition"
                    style={{ borderColor: '#E0E0E0', '--tw-ring-color': '#0052A3' } as any}
                    placeholder="Seu nome"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#0052A3' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition"
                    style={{ borderColor: '#E0E0E0', '--tw-ring-color': '#0052A3' } as any}
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#0052A3' }}>
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition"
                    style={{ borderColor: '#E0E0E0', '--tw-ring-color': '#0052A3' } as any}
                    placeholder="(11) 99999-9999"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#0052A3' }}>
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition resize-none"
                    style={{ borderColor: '#E0E0E0', '--tw-ring-color': '#0052A3' } as any}
                    placeholder="Descreva sua necessidade..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                  style={{ backgroundColor: '#0052A3' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#003d7a')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0052A3')}
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
