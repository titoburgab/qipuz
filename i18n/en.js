/* ─── QIPUZ i18n — English strings ────────────────────────────────────────
 *
 * HOW TO ADD A NEW PAGE:
 *   1. Add a new namespace object here (e.g. about: { headline: '…' })
 *   2. Mirror the same structure in es.js
 *   3. Use data-i18n="about.headline" in the HTML
 * ───────────────────────────────────────────────────────────────────────── */
window.i18nStrings = window.i18nStrings || {};
window.i18nStrings.en = {

  meta: {
    title: 'QIPUZ | AI Engineering Company',
    description: 'QIPUZ engineers AI agents, workflow automations, and intelligent systems that help organizations simplify complexity and make better decisions.',
  },

  skip: { link: 'Skip to content' },

  nav: {
    services:  'Services',
    whyQipuz:  'Why QIPUZ',
    contact:   'Contact',
    cta:       'Book a Session',
    menuOpen:  'Open menu',
    menuClose: 'Close menu',
    lang:      'Language',
  },

  hero: {
    eyebrow:    'Connecting Intelligence',
    headline:   'Most organizations don\'t have an <span class="font-bold text-signal">AI</span> problem.<br>They have a complexity problem.',
    body:       'AI is how the problem gets solved and how that solution turns into revenue, engineered as agents, workflow automations, and intelligent systems built around how your organization actually works.',
    ctaPrimary:  'Book a Discovery Session',
    ctaSecondary:'See Our Work',
  },

  credibility: {
    label:        'What we operate on, not a client roster',
    intelligence: 'Intelligence',
    engineering:  'Engineering',
    precision:    'Precision',
    trust:        'Trust',
    simplicity:   'Simplicity',
  },

  services: {
    eyebrow: 'What We Build',
    heading: 'Purpose-built systems, not generic tools.',
    card1: {
      title: 'AI Agents',
      body:  'Autonomous systems that execute complex, multi-step workflows: researching, analyzing, deciding, and acting within defined parameters and oversight frameworks.',
    },
    card2: {
      title: 'Workflow Automation',
      body:  'End-to-end automation of repetitive, rule-based processes: connecting data sources, applications, and teams into coherent operational systems.',
    },
    card3: {
      title: 'Knowledge Systems',
      body:  'Structured repositories that capture, organize, and surface organizational intelligence: making expertise accessible regardless of who is in the room.',
    },
    card4: {
      title: 'AI Consulting',
      body:  'Strategic guidance for organizations navigating AI adoption: covering architecture, governance, vendor selection, team readiness, and long-term planning.',
    },
    card5: {
      title: 'Custom AI Development',
      body:  'Purpose-built AI integrations designed around specific business problems, not pre-packaged products forced into contexts they were not designed for.',
    },
  },

  howWeWork: {
    eyebrow: 'How We Work',
    heading: 'From problem to production.',
    step1: {
      title: 'Discover',
      body:  'Every engagement starts with the real business problem, not the technology. We map what\'s broken before we decide what to build.',
    },
    step2: {
      title: 'Design',
      body:  'AI adapts to how your team already works. We design around existing workflows, not around the limitations of a model.',
    },
    step3: {
      title: 'Engineer',
      body:  'Every system we ship is transparent in its operation, explainable in its decisions, and built to scale with modular, documented architecture.',
    },
    step4: {
      title: 'Refine',
      body:  'Quality doesn\'t end at launch. We hold every system to the same standard of care after deployment as we did on day one.',
    },
  },

  founding: {
    eyebrow: 'Select Founding Partners',
    heading: 'We build AI systems that move businesses forward.',
    body:    'Technology alone doesn\'t solve problems. Well-engineered systems do. We design AI that streamlines operations, connects knowledge, and automates complex workflows with precision, working alongside your team from strategy through implementation. Every engagement gets direct senior-level attention and an uncompromising focus on quality.',
    cta:     'Start a Conversation',
  },

  statement: {
    eyebrow: 'Engineered for Production',
    body:    'Most AI pilots never reach production.<br><span class="font-medium">We start there.</span>',
  },

  whyQipuz: {
    eyebrow: 'Why QIPUZ',
    heading: 'Built for the gap others leave open.',
    body:    'AI projects tend to fail in one of two ways: agencies move fast but leave fragile systems behind, or consultancies move carefully but never ship. Here\'s the standard we hold ourselves to instead: on every engagement, not just the pitch.',
    table: {
      col: {
        agencies:   'AI Agencies',
        consulting: 'Large Consulting',
      },
      row1: { label: 'Engineering discipline', agencies: 'Variable',          consulting: 'Layered approvals', qipuz: 'Rigorous, documented'  },
      row2: { label: 'Speed to production',    agencies: 'Fast, fragile',     consulting: 'Slow, thorough',    qipuz: 'Fast, reliable'        },
      row3: { label: 'Explainability',         agencies: 'Rarely prioritized',consulting: 'Rarely delivered',  qipuz: 'Engineered in'         },
      row4: { label: 'Governance',             agencies: 'Absent',            consulting: 'Process-heavy',     qipuz: 'Right-sized'           },
      row5: { label: 'Design quality',         agencies: 'Generic',           consulting: 'Enterprise standard',qipuz: 'Premium, branded'     },
    },
    footnote: 'Our own operating standard, not a scored audit of any specific firm.',
  },

  contact: {
    heading:     'Stop managing complexity.<br>Start operating through it.',
    body:        'Tell us about your workflows. We\'ll assess what\'s worth automating, map the highest-value opportunities, and tell you honestly whether AI is the right tool, before we build anything.',
    form: {
      name:     'Name',
      email:    'Work email',
      company:  'Company (optional)',
      message:  'What are you looking to solve?',
      submit:   'Book a Discovery Session',
      sending:  'Sending…',
      success:  'Thanks! We\'ll reply within one business day.',
      error:    'Something went wrong. Email us directly at hello@qipuz.com instead.',
      emailAlt: 'Prefer email? Write to <a href="mailto:hello@qipuz.com" class="underline hover:text-signal">hello@qipuz.com</a>',
    },
  },

  footer: {
    tagline:   'Connecting Intelligence.',
    copyright: '© 2026 QIPUZ. All rights reserved.',
    label:     'AI Engineering Company',
  },

};
