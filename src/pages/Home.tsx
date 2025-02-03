import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { LeadForm } from '../components/LeadForm';
import { Modal } from '../components/Modal';
import { Phone, MapPin, Calendar, Clock, Award, Home as HomeIcon, Building, Leaf, Shield, Image, MessageCircle, CheckCircle2 } from 'lucide-react';
import { createWebsiteSchema, createFAQSchema, createBreadcrumbSchema } from '../utils/schema';
import type { FAQ } from '../types';

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
    '/img/M3M Panipat - City of Dreams Panipat - Img1.webp',
    '/img/M3M Panipat - City of Dreams Panipat - Img2.webp',
    '/img/M3M Panipat - City of Dreams Panipat - Img3.webp',
    '/img/M3M Panipat - City of Dreams Panipat - Img4.webp',
    '/img/M3M Panipat - City of Dreams Panipat - Img5.webp',
    '/img/M3M Panipat - City of Dreams Panipat - Img6.webp',
    '/img/M3M Panipat - City of Dreams Panipat - main.webp'
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

  const faqs: FAQ[] = [
    {
      q: 'What is the minimum plot size available?',
      a: 'The minimum plot size available is 180 sq. yards.'
    },
    {
      q: 'What is the payment plan?',
      a: 'You can book with 20% down payment and pay the rest after 1 year.'
    },
    {
      q: 'When is the possession date?',
      a: 'The expected possession date is December 2024.'
    },
    {
      q: 'What are the nearby landmarks?',
      a: 'The project is strategically located near Kabuli Bagh Masjid and Kala AMB Park.'
    },
    {
      q: 'What amenities are available?',
      a: 'The project offers premium amenities including a clubhouse, swimming pool, gym, children\'s play area, and landscaped gardens.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>M3M Panipat - City of Dreams Panipat | M3M</title>
        <meta name="description" content="M3M Panipat Project City of Dreams All Details Including Pricing, Location, Schedule Apointement, Offers, Brochure Download. Premium Residential Plots in Panipat M3M." />
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

      {/* Hero Section */}
      <section 
        className="relative min-h-[100vh] flex items-center"
        style={{ 
          backgroundImage: 'url("/img/M3M Panipat - City of Dreams Panipat - main.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white text-center lg:text-left">
              <div className="inline-block bg-green-600/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm md:text-base mb-4">
                Premium Residential Plots
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                M3M City of Dreams Panipat
              </h1>
              <p className="text-lg md:text-xl mb-2 text-gray-200">Sector 36, Panipat</p>
              <div className="bg-green-600 text-white px-4 py-2 rounded-lg inline-block mb-4 md:mb-6 mt-2">
                Book at 20% Now, Pay Rest After 1 Year
              </div>
              <p className="text-2xl md:text-3xl font-semibold mb-6">
                Starting at <span className="text-green-400">₹85,000/sq.yd*</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setModalConfig({ isOpen: true, type: 'price' })}
                  className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors w-full sm:w-auto text-center"
                >
                  Get Price Details
                </button>
                <button 
                  onClick={() => setModalConfig({ isOpen: true, type: 'brochure' })}
                  className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors w-full sm:w-auto text-center"
                >
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <LeadForm className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="flex items-center gap-3 p-4 md:p-6 bg-white rounded-lg shadow-md">
              <MapPin className="text-green-600 shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-sm md:text-base">Location</h3>
                <p className="text-sm text-gray-600">Sector 36, Panipat</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 md:p-6 bg-white rounded-lg shadow-md">
              <HomeIcon className="text-green-600 shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-sm md:text-base">Plot Sizes</h3>
                <p className="text-sm text-gray-600">125 - 1000 Sq.Yd</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 md:p-6 bg-white rounded-lg shadow-md">
              <Calendar className="text-green-600 shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-sm md:text-base">Possession</h3>
                <p className="text-sm text-gray-600">Dec 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 md:p-6 bg-white rounded-lg shadow-md">
              <Award className="text-green-600 shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-sm md:text-base">Status</h3>
                <p className="text-sm text-gray-600">New Launch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Master Plan Section */}
      <section id="master-plan" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Master Plan</h2>
          <div className="aspect-w-16 aspect-h-9">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80"
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
      <section id="floor-plan" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Floor Plans</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Floor Plan 1"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Type A - 180 SQ.YD</h3>
              <button
                onClick={() => setModalConfig({ isOpen: true, type: 'brochure' })}
                className="text-green-600 font-semibold hover:text-green-700"
              >
                Download Floor Plan
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                alt="Floor Plan 2"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Type B - 225 SQ.YD</h3>
              <button
                onClick={() => setModalConfig({ isOpen: true, type: 'brochure' })}
                className="text-green-600 font-semibold hover:text-green-700"
              >
                Download Floor Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section id="overview" className="py-16">
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
      <section id="location" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Strategic Location</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Connectivity</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                  <span>5 minutes from NH-44</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                  <span>10 minutes from Panipat Railway Station</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                  <span>15 minutes from City Center</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                  <span>20 minutes from Industrial Area</span>
                </li>
              </ul>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.7307121455473!2d76.96350931744384!3d29.390900000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ddc57b5555555%3A0x0!2zMjnCsDIzJzI3LjIiTiA3NsKwNTcnNDguNiJF!5e0!3m2!1sen!2sin!4v1623456789012!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
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

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Plot Sizes & Pricing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plotSizes.map((plot, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{plot.size}</h3>
                  <p className="text-gray-600 mb-4">Starting from ₹{plot.price}</p>
                  <button
                    onClick={() => setModalConfig({ isOpen: true, type: 'quote' })}
                    className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-6">*Prices are subject to change without prior notice</p>
        </div>
      </section>

      {/* Sticky Buttons */}
      <div className="fixed bottom-6 left-6 flex flex-col gap-4 z-50">
        <a
          href="https://wa.me/918527134491"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={24} />
        </a>
        </div>
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
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
        <LeadForm formType={modalConfig.type} inModal={true} />
      </Modal>
    </>
  );
};