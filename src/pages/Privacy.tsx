import React from 'react';
import { Helmet } from 'react-helmet-async';

export const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - M3M City of Dreams Panipat</title>
        <meta name="description" content="Privacy policy for M3M City of Dreams Panipat website visitors." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none">
          <p className="mb-6">
            This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make an inquiry on our website.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Personal Information We Collect</h2>
          <p className="mb-6">
            When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Personal Information</h2>
          <p className="mb-6">
            We use the information that we collect generally to fulfill any inquiries placed through the Site. Additionally, we use this information to:
            - Communicate with you
            - Screen our inquiries for potential risk or fraud
            - Provide you with information or advertising relating to our products or services
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Data Retention</h2>
          <p className="mb-6">
            When you submit an inquiry through the Site, we will maintain your Information for our records unless and until you ask us to delete this information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Changes</h2>
          <p className="mb-6">
            We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
          </p>
        </div>
      </div>
    </>
  );
};