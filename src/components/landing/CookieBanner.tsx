import React, { useEffect } from 'react';
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = 'G-YYY4X53THD';

const CookieBanner: React.FC = () => {
  const location = useLocation();

  const initializeGA = () => {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  };

  const sendPageview = (path: string) => {
    ReactGA.send({ hitType: 'pageview', page: path });
  };

  const handleAccept = () => {
    initializeGA();
    sendPageview(window.location.pathname + window.location.search);
  };

  useEffect(() => {
    const isConsentGiven = getCookieConsentValue("CookieConsent");
    if (isConsentGiven === "true") {
      initializeGA();
    }
  }, []);

  useEffect(() => {
    const isConsentGiven = getCookieConsentValue("CookieConsent");
    if (isConsentGiven === "true") {
      sendPageview(location.pathname + location.search);
    }
  }, [location]);

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accetto"
      declineButtonText="Rifiuto"
      enableDeclineButton
      cookieName="CookieConsent"
      style={{ background: "#0f172a", color: "#f8fafc", zIndex: 9999, alignItems: "center", padding: "10px 20px" }}
      buttonStyle={{ background: "#38bdf8", color: "#0f172a", fontSize: "14px", fontWeight: "bold", borderRadius: "6px", padding: "10px 20px" }}
      declineButtonStyle={{ background: "transparent", color: "#94a3b8", fontSize: "14px", textDecoration: "underline", border: "none", padding: "10px 20px" }}
      expires={365}
      onAccept={handleAccept}
    >
      <div style={{ fontSize: "14px", lineHeight: "1.5" }}>
        Utilizziamo cookie tecnici per il corretto funzionamento del sito e cookie analitici (Google Analytics) per comprendere come gli utenti interagiscono con esso. 
        Puoi accettare tutti i cookie cliccando su "Accetto" o rifiutare i cookie analitici cliccando su "Rifiuto". 
        Per maggiori informazioni, leggi la nostra <a href="/cookie-policy" style={{ color: "#38bdf8", textDecoration: "none" }}>Cookie Policy</a> e <a href="/privacy" style={{ color: "#38bdf8", textDecoration: "none" }}>Privacy Policy</a>.
      </div>
    </CookieConsent>
  );
};

export default CookieBanner;
