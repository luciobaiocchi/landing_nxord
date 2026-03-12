# Piano di Implementazione Tracciamento Avanzato GA4

Questo documento delinea il piano per l'implementazione del tracciamento avanzato per la landing page NxOrd, includendo il monitoraggio delle Call To Action (CTA), l'uso dei parametri UTM per le email a freddo e l'attivazione della Misurazione Avanzata in Google Analytics 4.

## Obiettivi

1. **Tracciamento CTA**: Monitorare clic sui bottoni principali (es. "Login Cliente", "Richiedi una Demo", form di contatto).
2. **Parametri UTM**: Assicurarsi che tutto il traffico proveniente dalle campagne email o cold outreach sia correttamente etichettato per analizzarne la conversione.
3. **Misurazione Avanzata GA4**: Raccogliere metriche come scroll di pagina, clic esterni e interazioni video senza codice extra.

---

## 1. Trattare i Clic sulle Call to Action (CTA)

Per tracciare al meglio le interazioni, modificheremo i componenti React esistenti per lanciare eventi `ReactGA.event()` al clic.

### Componenti da modificare

#### A. `src/components/landing/LandingNavbar.tsx`
- **Evento**: Clic sul pulsante "Login Cliente".
- **Azione richiesta**: Aggiungere l'evento nella funzione `handleLoginClick`.
  ```javascript
  import ReactGA from "react-ga4";

  ReactGA.event({
    category: "Engagement",
    action: "Click Login Navbar",
    label: "Navbar"
  });
  ```

#### B. `src/components/landing/HeroSection.tsx`
- **Evento**: Clics sulle CTA principali (es. "Inizia Ora", "Scopri di più" o simili).
- **Azione richiesta**: Aggiungere eventi `onClick` specifici per ogni CTA, ad esempio:
  ```javascript
  ReactGA.event({
    category: "Lead Generation",
    action: "Click CTA Principale",
    label: "Hero Section"
  });
  ```

#### C. `src/components/landing/ContactSection.tsx` (se presente form di contatto / mailto)
- **Evento**: Invio del form di contatto o click sul link mailto.
- **Azione richiesta**: Inviare un evento prima dell'azione:
  ```javascript
  ReactGA.event({
    category: "Lead Generation",
    action: "Invio Form Contatto",
    label: "Contact Section"
  });
  ```

### Funzione Utility Condivisa (Opzionale ma Consigliata)
Creeremo una utility (es. `src/utils/analytics.ts`) per gestire le chiamate, garantendo coerenza nei nomi delle categorie e azioni.

---

## 2. Implementazione dei Parametri UTM (Email Marketing)

Le email di cold outreach o newsletter devono includere parametri UTM nei link diretti a NxOrd.

**Esempio di URL da generare e inserire nelle email:**
`https://nxord.com/?utm_source=cold_email&utm_medium=email&utm_campaign=horeca_marzo_v1`

**Azione Operativa:**
- Utilizzare lo strumento **Google Campaign URL Builder** prima di inviare ogni mass mailing.
- Aggiornare i template email nella directory `test-suite` (se gestita all'interno di questo repo) con link parametrizzati.

---

## 3. Attivazione della Misurazione Avanzata

Questo passaggio non richiede modifiche al codice React, ma deve essere effettuato direttamente nel pannello di Google Analytics 4.

**Checklist Operativa (su Google Analytics):**
- [ ] Accedere a GA4.
- [ ] Andare su **Amministrazione** (icona ingranaggio).
- [ ] Selezionare **Stream di dati** nella colonna della Proprietà e cliccare sullo stream della landing (es. `Nxord-landing`).
- [ ] Verificare che l'interruttore **Misurazione avanzata** sia su "ON".
- [ ] Cliccare sull'icona delle impostazioni della Misurazione avanzata e assicurarsi che siano attivi:
  - Scorrimenti (Scroll)
  - Clic in uscita (Outbound clicks)
  - Coinvolgimento video
  - Ricerche all'interno del sito (se applicabile)
  - Interazioni con i moduli (opzionale, utile per i form non-React-based)

---

## Prossimi Passi

Se questo piano è approvato:
1. Procederemo all'aggiornamento dei file `.tsx` (`LandingNavbar`, `HeroSection`, `ContactSection`, ecc.) inserendo `ReactGA.event()`.
2. Verrà creata una funzione di utility per le chiamate a GA4.
3. Potremo avviare l'implementazione immediatamente.
