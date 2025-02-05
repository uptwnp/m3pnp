import React, { useState } from 'react';
import { submitLead } from '../utils/api';
import { toast } from 'react-hot-toast';
import { trackFormStart, trackFormSubmit } from '../utils/analytics';
import type { LeadFormData } from '../types';

interface LeadFormProps {
  formType?: 'price' | 'brochure' | 'quote' | 'visit';
  className?: string;
  inModal?: boolean;
}

export const LeadForm = ({ formType = 'price', className = '', inModal = false }: LeadFormProps) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    email: '',
    interest: formType === 'price' ? 'Get Price Details' :
             formType === 'brochure' ? 'Download Brochure' :
             formType === 'quote' ? 'Get Quote' : 'Schedule Site Visit'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Track when user starts filling the form
    if (prev[name] === '') {
      trackFormStart(formType);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const success = await submitLead(formData);
      if (success) {
        trackFormSubmit(formType, formData);
        toast.success('Thank you! We will contact you soon.');
        setFormData({ name: '', phone: '', email: '', interest: formData.interest });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`${!inModal ? 'p-6 rounded-lg shadow-lg' : ''} ${className}`}>
      {!inModal && (
        <h3 className="text-xl font-semibold mb-4">
          {formType === 'price' ? 'Get Price Details' :
           formType === 'brochure' ? 'Download Brochure' :
           formType === 'quote' ? 'Get a Quote' : 'Schedule Site Visit'}
        </h3>
      )}
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            autoComplete="name"
            className="w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="relative">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            autoComplete="tel"
            pattern="(\+91)?[0-9]{10}"
            className="w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        {/* <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            autoComplete="email"
            className="w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div> */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg font-semibold"
        >
          {isSubmitting ? 'Submitting...' : formData.interest}
        </button>
      </div>
    </form>
  );
};
