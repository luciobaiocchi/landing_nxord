import ReactGA from "react-ga4";

/**
 * Event categories
 */
export const GA_CATEGORY = {
  ENGAGEMENT: "Engagement",
  LEAD_GEN: "Lead Generation",
  NAVIGATION: "Navigation",
  SOCIAL: "Social",
};

/**
 * Common event actions
 */
export const GA_ACTION = {
  CLICK_LOGIN: "Click Login Navbar",
  CLICK_CTA_HERO: "Click CTA Principale",
  SUBMIT_CONTACT: "Invio Form Contatto",
  CLICK_MAILTO: "Click Mailto",
  CLICK_SOCIAL: "Click Social Link",
};

/**
 * Tracks a custom event in GA4
 */
export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

/**
 * Predefined event trackers for consistency
 */
export const analytics = {
  trackLoginClick: (label: string = "Navbar") => 
    trackEvent(GA_CATEGORY.ENGAGEMENT, GA_ACTION.CLICK_LOGIN, label),

  trackHeroCTA: (label: string = "Hero Section") => 
    trackEvent(GA_CATEGORY.LEAD_GEN, GA_ACTION.CLICK_CTA_HERO, label),

  trackContactSubmit: (label: string = "Contact Section") => 
    trackEvent(GA_CATEGORY.LEAD_GEN, GA_ACTION.SUBMIT_CONTACT, label),

  trackMailto: (label: string = "Contact Section") => 
    trackEvent(GA_CATEGORY.ENGAGEMENT, GA_ACTION.CLICK_MAILTO, label),

  trackSocialClick: (platform: string) => 
    trackEvent(GA_CATEGORY.SOCIAL, GA_ACTION.CLICK_SOCIAL, platform),

  /**
   * General track event
   */
  trackEvent: (category: string, action: string, label?: string, value?: number) =>
    trackEvent(category, action, label, value),
};
