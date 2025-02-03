import { LeadFormData } from '../types';

export const submitLead = async (data: LeadFormData) => {
  try {
    const response = await fetch('https://prop.digiheadway.in/api/submit.php', {
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