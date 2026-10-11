const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  document.body.classList.toggle('menu-open', isOpen);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const translations = [
  ['.nav a[href="#perfil"]', 'Perfil', 'Profile'],
  ['.nav a[href="#experiencia"]', 'Experiencia', 'Experience'],
  ['.nav a[href="#proyectos"]', 'Casos', 'Cases'],
  ['.nav a[href="#herramientas"]', 'Toolkit', 'Toolkit'],
  ['.nav a[href="#contacto"]', 'Contacto', 'Contact'],
  ['.status', '<span></span> Disponible para nuevas oportunidades', '<span></span> Open to new opportunities', true],
  ['.hero h1', 'Conecto negocio, datos y procesos para <em>mejorar cómo se toman decisiones.</em>', 'I connect business, data and processes to <em>improve how decisions are made.</em>', true],
  ['.hero-lead', 'Profesional B2B con experiencia en SaaS, tecnología y cloud. Combino operación comercial, CRM, reporting y una base técnica para aportar claridad sobre pipeline, cuentas y procesos.', 'B2B professional with experience in SaaS, technology and cloud. I combine commercial operations, CRM, reporting and a technical foundation to bring clarity to pipeline, accounts and processes.'],
  ['.hero-actions .button-dark', 'Ver experiencia', 'View experience'],
  ['.hero-actions .text-link', 'Explorar casos <span>↗</span>', 'Explore cases <span>↗</span>', true],
  ['.proof div:nth-child(1) strong', '3+ años', '3+ years'],
  ['.proof div:nth-child(1) span', 'experiencia B2B', 'B2B experience'],
  ['.proof div:nth-child(2) span', 'entornos tecnológicos', 'technology environments'],
  ['.proof div:nth-child(4) span', 'reporting & análisis', 'reporting & analysis'],
  ['#perfil .eyebrow', 'PERFIL', 'PROFILE'],
  ['#perfil .section-intro h2', 'Un perfil comercial que evolucionó hacia operaciones, análisis y mejora de procesos.', 'A commercial background that evolved toward operations, analytics and process improvement.'],
  ['#perfil .profile-copy p:nth-child(1)', 'Mi recorrido empezó en desarrollo de negocio B2B y fue incorporando cada vez más trabajo sobre cuentas, CRM, reporting, coordinación y calidad del proceso comercial.', 'My career started in B2B business development and progressively expanded into account management, CRM, reporting, coordination and commercial process quality.'],
  ['#perfil .profile-copy p:nth-child(2)', 'Hoy busco posiciones donde esa experiencia de primera línea sirva para entender mejor la operación: ordenar información, detectar fricciones, mejorar workflows y convertir datos en acciones concretas.', 'Today I am looking for roles where that front-line experience helps improve operations: organizing information, identifying friction, improving workflows and turning data into concrete actions.'],
  ['#perfil .principle:nth-child(1) h3', 'Contexto comercial', 'Commercial context'],
  ['#perfil .principle:nth-child(1) p', 'Discovery, demos, propuestas, pipeline y gestión de cuentas B2B.', 'Discovery, demos, proposals, pipeline management and B2B account management.'],
  ['#perfil .principle:nth-child(2) h3', 'Pensamiento de procesos', 'Process thinking'],
  ['#perfil .principle:nth-child(2) p', 'Cómo se mueve la información entre etapas, equipos y herramientas.', 'Understanding how information moves across stages, teams and tools.'],
  ['#perfil .principle:nth-child(3) h3', 'Lectura de datos', 'Data analysis'],
  ['#perfil .principle:nth-child(3) p', 'Reporting y análisis para encontrar patrones, riesgos y oportunidades.', 'Reporting and analysis to identify patterns, risks and opportunities.'],
  ['#perfil .principle:nth-child(4) h3', 'Base técnica', 'Technical foundation'],
  ['#perfil .principle:nth-child(4) p', 'Informática, bases de datos y desarrollo para colaborar mejor con equipos técnicos.', 'Computer science, databases and development knowledge to collaborate effectively with technical teams.'],
  ['#experiencia .eyebrow', 'EXPERIENCIA', 'EXPERIENCE'],
  ['#experiencia .section-intro h2', 'Experiencia comercial con foco creciente en cuentas, procesos y operación.', 'Commercial experience with an increasing focus on accounts, processes and operations.'],
  ['#experiencia .experience-item:nth-child(1) .experience-summary', 'Desarrollo de oportunidades para Google Cloud, Workspace y Gemini, combinando gestión comercial con seguimiento de cuentas y reporting.', 'Developed opportunities for Google Cloud, Workspace and Gemini, combining commercial execution with account follow-up and reporting.'],
  ['#experiencia .experience-item:nth-child(1) .experience-columns ul:nth-child(1) li:nth-child(1)', 'Gestión y seguimiento de oportunidades en CRM.', 'Managed and tracked opportunities in CRM.'],
  ['#experiencia .experience-item:nth-child(1) .experience-columns ul:nth-child(1) li:nth-child(2)', 'Discovery, demos y coordinación de propuestas.', 'Discovery, demos and proposal coordination.'],
  ['#experiencia .experience-item:nth-child(1) .experience-columns ul:nth-child(2) li:nth-child(1)', 'Trabajo conjunto con Google y equipos internos.', 'Collaborated with Google and internal teams.'],
  ['#experiencia .experience-item:nth-child(1) .experience-columns ul:nth-child(2) li:nth-child(2)', 'Reporting con Sheets, Excel y Looker Studio.', 'Reporting with Sheets, Excel and Looker Studio.'],
  ['#experiencia .experience-item:nth-child(2) .experience-summary', 'Proyecto comercial desarrollado desde Multiply para Salesforce, enfocado en prospección B2B, calificación de oportunidades y seguimiento del pipeline.', 'Commercial project delivered from Multiply for Salesforce, focused on B2B prospecting, opportunity qualification and pipeline follow-up.'],
  ['#experiencia .experience-item:nth-child(2) .experience-columns ul:nth-child(1) li:nth-child(1)', 'Investigación y segmentación de cuentas objetivo.', 'Researched and segmented target accounts.'],
  ['#experiencia .experience-item:nth-child(2) .experience-columns ul:nth-child(1) li:nth-child(2)', 'Prospección y calificación de leads para Salesforce.', 'Prospected and qualified leads for Salesforce.'],
  ['#experiencia .experience-item:nth-child(2) .experience-columns ul:nth-child(2) li:nth-child(1)', 'Seguimiento de actividad y oportunidades en Salesforce CRM.', 'Tracked activity and opportunities in Salesforce CRM.'],
  ['#experiencia .experience-item:nth-child(2) .experience-columns ul:nth-child(2) li:nth-child(2)', 'Coordinación con Account Executives para hand-off comercial.', 'Coordinated with Account Executives for commercial hand-off.'],
  ['#experiencia .experience-item:nth-child(3) .experience-summary', 'Generación y calificación de oportunidades B2B, investigación de cuentas y organización del outreach para alimentar el pipeline.', 'Generated and qualified B2B opportunities, researched target accounts and organized outreach to build pipeline.'],
  ['#experiencia .experience-item:nth-child(3) .experience-columns ul:nth-child(1) li:nth-child(1)', 'Prospección y segmentación de cuentas objetivo.', 'Prospected and segmented target accounts.'],
  ['#experiencia .experience-item:nth-child(3) .experience-columns ul:nth-child(1) li:nth-child(2)', 'Calificación de leads y coordinación con AEs.', 'Qualified leads and coordinated with Account Executives.'],
  ['#experiencia .experience-item:nth-child(3) .experience-columns ul:nth-child(2) li:nth-child(1)', 'Seguimiento de actividad comercial.', 'Tracked commercial activity.'],
  ['#experiencia .experience-item:nth-child(3) .experience-columns ul:nth-child(2) li:nth-child(2)', 'Análisis de evolución del funnel.', 'Analyzed funnel performance and progression.'],
  ['#proyectos .section-intro h2', 'Casos para mostrar cómo abordo problemas de Revenue Ops y Analytics.', 'Cases showing how I approach Revenue Ops and Analytics problems.'],
  ['#proyectos .case-intro > p', 'Datos simulados. Sin información confidencial de empleadores anteriores.', 'Simulated data. No confidential information from previous employers.'],
  ['#proyectos .case-row:nth-child(1) .case-body > p', 'Seguimiento de volumen, conversión, velocity y revenue por etapa para detectar dónde se concentra la pérdida de oportunidades.', 'Tracking volume, conversion, velocity and revenue by stage to identify where opportunity loss is concentrated.'],
  ['#proyectos .case-row:nth-child(2) .case-body > p', 'Diseño de un flujo Lead → Qualified → Opportunity → Customer con criterios de avance, ownership y reglas de calidad de datos.', 'Design of a Lead → Qualified → Opportunity → Customer workflow with stage criteria, ownership and data-quality rules.'],
  ['#proyectos .case-row:nth-child(3) .case-body > p', 'Modelo de scoring para ordenar una cartera según potencial, fit, engagement y señales de expansión, priorizando esfuerzo comercial.', 'Scoring model to rank accounts by potential, fit, engagement and expansion signals, helping prioritize commercial effort.'],
  ['#herramientas .section-intro h2', 'Herramientas para operar, analizar y entender mejor el revenue engine.', 'Tools to operate, analyze and better understand the revenue engine.'],
  ['#formacion .eyebrow', 'FORMACIÓN', 'EDUCATION'],
  ['#formacion .section-intro h2', 'Negocio y tecnología en una misma trayectoria.', 'Business and technology in one professional path.'],
  ['#formacion .education-item:nth-child(1) > span', 'En curso', 'In progress'],
  ['#formacion .education-item:nth-child(1) h3', 'Licenciatura en Informática', 'Bachelor\'s Degree in Computer Science'],
  ['#formacion .education-item:nth-child(1) small', 'Bases de datos, programación, arquitectura, matemática y redes.', 'Databases, programming, computer architecture, mathematics and networking.'],
  ['#formacion .education-item:nth-child(2) small', 'JavaScript, React, Node.js, Express y PostgreSQL.', 'JavaScript, React, Node.js, Express and PostgreSQL.'],
  ['#formacion .education-item:nth-child(3) small', 'Prospección B2B, discovery, pipeline y metodología comercial.', 'B2B prospecting, discovery, pipeline management and sales methodology.'],
  ['#contacto .eyebrow', 'CONTACTO', 'CONTACT'],
  ['#contacto h2', 'Busco mi próximo desafío en operaciones, revenue, analytics o gestión de cuentas.', 'I am looking for my next challenge in operations, revenue, analytics or account management.'],
  ['#contacto .contact-copy', 'Me interesan equipos donde pueda combinar contexto comercial, pensamiento analítico y mejora de procesos para generar impacto medible.', 'I am interested in teams where I can combine commercial context, analytical thinking and process improvement to create measurable impact.']
];

function applyLanguage(lang) {
  const selected = lang === 'en' ? 'en' : 'es';
  document.documentElement.lang = selected;

  translations.forEach(([selector, es, en, html = false]) => {
    const element = document.querySelector(selector);
    if (!element) return;
    const value = selected === 'en' ? en : es;
    if (html) element.innerHTML = value;
    else element.textContent = value;
  });

  const brand = document.querySelector('.brand');
  if (brand) brand.setAttribute('aria-label', selected === 'en' ? 'Go to home' : 'Ir al inicio');

  if (menuButton) {
    menuButton.setAttribute('aria-label', selected === 'en' ? 'Open menu' : 'Abrir menú');
  }

  if (nav) {
    nav.setAttribute('aria-label', selected === 'en' ? 'Main navigation' : 'Navegación principal');
  }

  const signalCard = document.querySelector('.signal-card');
  if (signalCard) {
    signalCard.setAttribute('aria-label', selected === 'en'
      ? 'Visual example of a pipeline using simulated data'
      : 'Ejemplo visual de pipeline con datos simulados');
  }

  document.title = 'Ignacio Melgarejo | Business · Revenue · Data';
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.content = selected === 'en'
      ? 'Ignacio Melgarejo — Business Operations, Revenue Operations, Sales Operations and Business Analytics.'
      : 'Ignacio Melgarejo — Business Operations, Revenue Operations, Sales Operations y Business Analytics.';
  }

  document.querySelectorAll('.lang-option').forEach((button) => {
    const active = button.dataset.lang === selected;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  localStorage.setItem('portfolio-language', selected);
}

document.querySelectorAll('.lang-option').forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});

applyLanguage(localStorage.getItem('portfolio-language') || 'es');

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}
