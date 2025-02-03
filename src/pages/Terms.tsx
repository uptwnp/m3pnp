import React from 'react';
import { Helmet } from 'react-helmet-async';

export const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Use - M3M City of Dreams Panipat</title>
        <meta name="description" content="Terms and conditions for using the M3M City of Dreams Panipat website." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
        
        <div className="prose max-w-none">
          <p className="mb-6">
            These terms and conditions outline the rules and regulations for the use of our Website.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Disclaimer</h2>
          <p className="mb-6">
            This website is not an official website of M3M Group. It is owned and operated by an authorized channel partner. The content is for information purposes only. All information provided on this site is subject to change without notice.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">License</h2>
          <p className="mb-6">
            Unless otherwise stated, we own the intellectual property rights for all material on this Website. All intellectual property rights are reserved.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Restrictions</h2>
          <p className="mb-6">
            You are specifically restricted from:
            - Publishing any Website material in any other media
            - Selling, sublicensing and/or otherwise commercializing any Website material
            - Publicly performing and/or showing any Website material
            - Using this Website in any way that is or may be damaging to this Website
            - Using this Website contrary to applicable laws and regulations
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Project Information</h2>
          <p className="mb-6">
            All project information, specifications, and images are for representation purposes only. The actual property may differ from the descriptions provided on this website. Please verify all information independently.
          </p>
        </div>
      </div>
    </>
  );
};