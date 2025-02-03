import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { LeadForm } from '../components/LeadForm';
import { Modal } from '../components/Modal';
import { Phone, MapPin, Calendar, Clock, Award, Home as HomeIcon, Building, Leaf, Shield, Image, MessageCircle, CheckCircle2, Navigation } from 'lucide-react';
import { createWebsiteSchema, createFAQSchema, createBreadcrumbSchema } from '../utils/schema';

export const Home = () => {
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    type: 'price' | 'brochure' | 'quote' | 'visit';
  }>({
    isOpen: false,
    type: 'price'
  });

  const closeModal = () => setModalConfig({ ...modalConfig, isOpen: false });

  const galleryImages = [
    'https://placehold.co/600x400/228B22/FFFFFF/png?text=M3M+City+of+Dreams+1',
    'https://placehold.co/600x400/228B22/FFFFFF/png?text=M3M+City+of+Dreams+2',
    'https://placehold.co/600x400/228B22/FFFFFF/png?text=M3M+City+of+Dreams+3',
    'https://placehold.co/600x400/228B22/FFFFFF/png?text=M3M+City+of+Dreams+4',
    'https://placehold.co/600x400/228B22/FFFFFF/png?text=M3M+City+of+Dreams+5',
    'https://placehold.co/600x400/228B22/FFFFFF/png?text=M3M+City+of+Dreams+6'
  ];

  const amenities = [
    { icon: <Building size={24} />, title: 'Club House', desc: 'Modern clubhouse with premium facilities' },
    { icon: <Leaf size={24} />, title: 'Gardens', desc: '5.7-acre central landscape' },
    { icon: <Shield size={24} />, title: 'Security', desc: '24/7 security with CCTV surveillance' },
    { icon: <HomeIcon size={24} />, title: 'Sports', desc: 'Multiple sports facilities' }
  ];

  const keyFeatures = [
    'Central Avenue 60M Wide',
    'A Grand Sense of Arrival',
    'Multiple Sports Amenities',
    'Themed Areas with Sit-Outs',
    '5.7-Acre Central Landscape',
    'Shaded Walkways',
    '40,000 SQ.FT of Amenities',
    '1.5 KMs of Pathway',
    'Lake with Nature Experience'
  ];

  const plotSizes = [
    { size: '180 SQ.YD', price: '85,000/sq.yd*' },
    { size: '225 SQ.YD', price: '85,000/sq.yd*' },
    { size: '360 SQ.YD', price: '85,000/sq.yd*' },
    { size: '463 SQ.YD', price: '85,000/sq.yd*' },
    { size: '586 SQ.YD', price: '85,000/sq.yd*' },
    { size: '700 SQ.YD', price: '85,000/sq.yd*' },
    { size: '850 SQ.YD', price: '85,000/sq.yd*' },
    { size: '1000 SQ.YD', price: '85,000/sq.yd*' }
  ];

  const faqs = [
    {
      q: 'What is the minimum plot size available in M3M City of Dreams Panipat?',
      a: 'The minimum plot size available is 180 sq. yards.'
    },
    {
      q: 'What is the payment plan for M3M City of Dreams Panipat?',
      a: 'You can book with 20% down payment and pay the rest after 1 year.'
    },
    {
      q: 'When is the possession date for M3M City of Dreams Panipat?',
      a: 'The expected possession date is December 2024.'
    },
    {
      q: 'What are the nearby landmarks to M3M City of Dreams Panipat?',
      a: 'The project is strategically located near Kabuli Bagh Masjid and Kala AMB Park in Sector 36, Panipat.'
    },
    {
      q: 'What amenities are available at M3M City of Dreams Panipat?',
      a: 'The project offers premium amenities including a clubhouse, swimming pool, gym, children\'s play area, and landscaped gardens.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>M3M City of Dreams Panipat - Premium Residential Plots</title>
        <meta name="description" content="Premium residential plots at Sector 36 Panipat. Book at 20% now, pay rest after 1 year. Starting at ₹85,000/sq.yd*" />
        <script type="application/ld+json">
          {JSON.stringify(createWebsiteSchema(faqs))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(createFAQSchema(faqs))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(createBreadcrumbSchema())}
        </script>
      </Helmet>

      {/* Hero Section with Form */}
      <section 
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://propertyingurugram.in/wp-content/uploads/2020/03/M3m-City-Of-Dreams.jpg")',
          paddingTop: '80px'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                M3M City of Dreams Panipat
              </h1>
              <p className="text-xl md:text-2xl mb-2">Premium Residential Plots at Sector 36</p>
              <p className="text-lg md:text-xl mb-6">Book at 20% Now, Pay Rest After 1 Year</p>
              <p className="text-3xl font-semibold mb-8">Starting at ₹85,000/sq.yd*</p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setModalConfig({ isOpen: true, type: 'price' })}
                  className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Get Price Details
                </button>
                <button 
                  onClick={() => setModalConfig({ isOpen: true, type: 'brochure' })}
                  className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Download Brochure
                </button>
              </div>
            </div>
            <div>
              <LeadForm className="bg-white/95 backdrop-blur-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">
              <MapPin className="text-green-600" size={32} />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p>Sector 36, Panipat</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">
              <HomeIcon className="text-green-600" size={32} />
              <div>
                <h3 className="font-semibold">Plot Sizes</h3>
                <p>180 - 1000 Sq.Yd</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">
              <Calendar className="text-green-600" size={32} />
              <div>
                <h3 className="font-semibold">Possession</h3>
                <p>Dec 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">
              <Award className="text-green-600" size={32} />
              <div>
                <h3 className="font-semibold">Status</h3>
                <p>New Launch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Master Plan Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Master Plan</h2>
          <div className="aspect-w-16 aspect-h-9">
            <img 
              src="https://images.unsplash.com/photo-1524813686514-a57563d77965?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
              alt="M3M City of Dreams Master Plan"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => setModalConfig({ isOpen: true, type: 'brochure' })}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Download Master Plan
            </button>
          </div>
        </div>
      </section>

      {/* Floor Plan Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Floor Plans</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="180-225 SQ.YD Floor Plan"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">180-225 SQ.YD</h3>
              <button
                onClick={() => setModalConfig({ isOpen: true, type: 'brochure' })}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors"
              >
                Download Floor Plan
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="360-1000 SQ.YD Floor Plan"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">360-1000 SQ.YD</h3>
              <button
                onClick={() => setModalConfig({ isOpen: true, type: 'brochure' })}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors"
              >
                Download Floor Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section id="overview" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Project Overview</h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              M3M City Of Dreams Plots Panipat is a first-rate residential development that offers its residents a unique way of life. Located in Sector 36 Panipat, Haryana, this premium project spans across a vast area, offering a variety of plot sizes to suit different needs.
            </p>
            <p className="text-lg mb-6">
              The project is strategically positioned near important landmarks such as Kabuli Bagh Masjid and Kala AMB Park. With its prime location and excellent connectivity, M3M City of Dreams provides easy access to major highways and transportation hubs.
            </p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Strategic Location</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Key Distances</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Navigation className="text-green-600" size={20} />
                    <span>10 mins from NH-44</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Navigation className="text-green-600" size={20} />
                    <span>15 mins from Panipat Railway Station</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Navigation className="text-green-600" size={20} />
                    <span>5 mins from Kala Amb Park</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Navigation className="text-green-600" size={20} />
                    <span>20 mins from City Center</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Nearby Landmarks</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <MapPin className="text-green-600" size={20} />
                    <span>Kabuli Bagh Masjid</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="text-green-600" size={20} />
                    <span>IOCL Refinery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="text-green-600" size={20} />
                    <span>Panipat Institute of Engineering</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.7307449444745!2d76.96350731507878!3d29.390900982115647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ddc57b5555555%3A0x0!2zMjnCsDIzJzI3LjIiTiA3NsKwNTcnNDguNiJF!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
                <CheckCircle2 className="text-green-600 shrink-0" size={24} />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Plot Sizes & Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plotSizes.map((plot, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">{plot.size}</h3>
                <p className="text-gray-600 mb-4">Starting from ₹{plot.price}</p>
                <button
                  onClick={() => setModalConfig({ isOpen: true, type: 'price' })}
                  className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors"
                >
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">World-Class Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="inline-flex p-3 bg-green-100 rounded-full mb-4">
                  <div className="text-green-600">{amenity.icon}</div>
                </div>
                <h3 className="font-semibold mb-2">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img 
                  src={img} 
                  alt={`M3M City of Dreams - Image ${index + 1}`} 
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Image size={32} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Site Visit */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Schedule a Site Visit</h2>
          <p className="text-lg mb-8">Experience the luxury and convenience of M3M City of Dreams in person</p>
          <button
            onClick={() => setModalConfig({ isOpen: true, type: 'visit' })}
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Book Site Visit
          </button>
        </div>
      </section>

      {/* Sticky Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a
          href="https://wa.me/918527134491"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={24} />
        </a>
        <a
          href="tel:+918527134491"
          className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors animate-pulse"
        >
          <Phone size={24} />
        </a>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalConfig.isOpen}
        onClose={closeModal}
        title={
          modalConfig.type === 'price' ? 'Get Price Details' :
          modalConfig.type === 'brochure' ? 'Download Brochure' :
          modalConfig.type === 'quote' ? 'Get a Quote' : 'Schedule Site Visit'
        }
      >
        <LeadForm formType={modalConfig.type} />
      </Modal>
    </>
  );
};