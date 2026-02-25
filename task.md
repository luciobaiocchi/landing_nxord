Agisci come un Lead UI/UX Designer. 
Il precedente design della landing page (stile SaaS con testo centrato e molto spazio bianco) risulta troppo "stock", anonimo e dispersivo. Vogliamo un look più denso, tecnico e personalizzato per il nostro software B2B "NxOrd".

Apporta le seguenti modifiche strutturali e stilistiche al codice Tailwind CSS:

1. TIPOGRAFIA (Fondamentale):
- Importa e usa un font con più carattere per i titoli (es. 'Outfit' o 'Clash Display') e 'DM Sans' per il body.
- I titoli devono essere ben contrastati, color Blu Indaco Scuro (es. text-slate-900).

2. LAYOUT HERO SECTION (Da Centrato a 2 Colonne):
- Riduci lo spazio bianco eccessivo. Passa da un padding verticale enorme (es. py-32) a uno più contenuto (es. py-16 o py-20).
- Cambia il layout da 1 colonna centrata a 2 colonne affiancate su desktop (grid md:grid-cols-2 gap-12).
- COLONNA SINISTRA: Allinea tutto a sinistra (text-left). Inserisci il badge, l'H1 (leggermente più compatto, es. text-5xl), il paragrafo descrittivo e il bottone CTA Celeste. Riduci i margini tra questi elementi per renderli un blocco coeso.
- COLONNA DESTRA: Crea un elemento visivo strutturato che riempia lo spazio. Ad esempio, un div stilizzato che simula la UI del software: sfondo bianco o grigio chiarissimo, bordi arrotondati (rounded-xl), una shadow elegante (shadow-xl o shadow-2xl), un bordo sottile e all'interno un paio di rettangoli/placeholder animati o statici che simulano una "Email in entrata" che si trasforma in "Tabella Dati".

3. SFONDO E TEXTURE (Anti-piattezza):
- Rimuovi il bianco assoluto. Imposta il background della Hero Section su un grigio quasi impercettibile (es. bg-slate-50).
- Aggiungi un pattern "tecnico" in background: ad esempio un dot-pattern (a pois) leggerissimo o una griglia sottile in SVG, colorata di un grigio chiarissimo (es. opacity-20). Questo riempie gli spazi vuoti dando un feeling da "strumento di lavoro per i dati".

4. NAVBAR:
- Rendi la navbar più compatta (riduci il padding verticale) e applica uno sfondo leggermente traslucido (backdrop-blur) in modo che si integri meglio col nuovo sfondo.

Genera il codice frontend aggiornato (React/Tailwind o HTML/Tailwind) applicando rigorosamente queste direttive.