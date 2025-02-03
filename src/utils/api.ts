import { LeadFormData } from '../types';

export const submitLead = async (data: LeadFormData) => {
  try {
    const response = await fetch('https://webhook.site/eedfca81-929d-47a9-83dc-0cc3e334fed4', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch (error) {
    console.error('Error submitting lead:', error);
    return false;
  }
};