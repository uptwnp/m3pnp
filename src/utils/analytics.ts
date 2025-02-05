import { LeadFormData } from '../types';

// Type definitions for GA4
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize dataLayer if it doesn't exist
window.dataLayer = window.dataLayer || [];

// Helper function for sending events
export const sendGAEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Predefined event functions
export const trackButtonClick = (buttonName: string, buttonLocation: string) => {
  sendGAEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation
  });
};

export const trackModalOpen = (modalType: string) => {
  sendGAEvent('modal_open', {
    modal_type: modalType
  });
};

export const trackModalClose = (modalType: string) => {
  sendGAEvent('modal_close', {
    modal_type: modalType
  });
};

export const trackMenuToggle = (state: 'open' | 'close') => {
  sendGAEvent('menu_toggle', {
    menu_state: state
  });
};

export const trackContact = (method: 'phone' | 'whatsapp') => {
  sendGAEvent('contact_initiated', {
    contact_method: method
  });
};

export const trackFormStart = (formType: string) => {
  sendGAEvent('form_start', {
    form_type: formType
  });
};

export const trackFormSubmit = (formType: string, formData: LeadFormData) => {
  sendGAEvent('form_submit', {
    form_type: formType,
    user_type: 'lead',
    lead_type: formData.interest
  });
};