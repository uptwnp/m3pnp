import React, { useState } from 'react';
import { submitLead } from '../utils/api';
import { toast } from 'react-hot-toast';
import type { LeadFormData } from '../types';

interface LeadFormProps {
  formType?: 'price' | 'brochure' | 'quote' | 'visit';
  className?: string;
}

export const LeadForm = ({ formType = 'price', className = '' }: LeadFormProps) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    email: '',
    interest: formType === 'price' ? 'Get Price Details' :
             formType === 'brochure' ? 'Download Brochure' :
             formType === 'quote' ? 'Get Quote' : 'Schedule Site Visit'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const titles = {
    price: 'Get Price Details',
    brochure: 'Download Brochure',
    quote: 'Get a Quote',
    visit: 'Schedule Site Visit'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const success = await submitLead(formData);
      if (success) {
        toast.success('Thank you! We will contact you soon.');
        setFormData({ name: '', phone: '', email: '', interest: titles[formType] });
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
    <form onSubmit={handleSubmit} className={`bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg ${className}`}>
      <h3 className="text-xl font-semibold mb-4">{titles[formType]}</h3>
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
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="relative">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            autoComplete="tel"
            pattern="[0-9]{10}"
            className="w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            autoComplete="email"
            className="w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg font-semibold"
        >
          {isSubmitting ? 'Submitting...' : titles[formType]}
        </button>
      </div>
    </form>
  );
};