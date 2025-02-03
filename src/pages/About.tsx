import React from 'react';
import { Helmet } from 'react-helmet-async';

export const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - M3M City of Dreams Panipat</title>
        <meta name="description" content="Learn about M3M City of Dreams Panipat, a premium residential plot project by M3M India's authorized channel partner." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">About M3M City of Dreams</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            M3M City Of Dreams Plots Panipat is a first-rate residential development that offers its residents a unique way of life. The project, located in Sector 36 Panipat, Haryana, offers a variety of amenities and conveniences to its residents.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Project Overview</h2>
          <p className="mb-6">
            The project is made up of plots and spans a large area of land. The Kabuli Bagh Masjid, Kala AMB Park, and other notable landmarks are strategically located near the project. M3M City Of Dreams Plots Panipat also offers a variety of first-rate amenities, such as a swimming pool, gym, clubhouse, children's play area, landscaped gardens, and more.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">About M3M India</h2>
          <p className="mb-6">
            M3M India means 'Superbness in the Trinity Of Men, Materials and Money'. The aphorism of the organization is "quality, opportune conveyance and greatness". Recognizing highlights of M3M inside the business are its inventive, remarkable and unrivaled ideas, multi-dimensional realty arrangements and unparalleled high help norms.
          </p>

          <p className="mb-6">
            Demonstrating its responsibility towards creating cutting edge land works of art, M3M has consistently strived to gather the best ability in the business. The organization has increased important involvement with the land area with different and complimentary gifts from a rich organization of first class go-betweens, monetary establishments, high-total assets people and probably the most rumored designers in India.
          </p>
        </div>
      </div>
    </>
  );
};