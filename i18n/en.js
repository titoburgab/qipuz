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
    portfolio: 'Portfolio',
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

  portfolio: {
    meta: {
      title:       'QIPUZ | Portfolio',
      description: 'Automation systems QIPUZ has built: lead qualification, quote and invoice generation, video production, script writing, and LinkedIn publishing, each built from a real, observed problem.',
    },
    hero: {
      eyebrow:  'Systems We\'ve Built',
      headline: 'Every project started as someone\'s problem, not a pitch.',
      body:     'These aren\'t client case studies with a name attached to them. They\'re automation systems we built ourselves, from problems we saw or heard about directly: a lawyer buried in unqualified leads, a real estate agent stuck editing property videos, workflows we needed for our own operation. Each card below shows the problem, the system we built, and what it actually does.',
    },
    labels: {
      painPoint:   'Pain Point',
      system:      'System',
      description: 'What It Does',
    },
    framing: {
      eyebrow: 'How to Read This',
      heading: 'Pain point. System. What it does.',
      body:    'Every project below follows the same structure: the problem we saw, the system we built to solve it, and what that system actually does once it\'s running.',
    },
    project1: {
      title:       'Lead Qualifier',
      painPoint:   'Law firms, real estate teams, and small businesses lose hours triaging inbound leads by hand, reading intake forms one at a time and guessing which ones are worth a callback.',
      system:      'An AI intake agent that reads the information a prospect submits, asks a clarifying question where the submission is incomplete, and scores the lead against criteria the business sets.',
      description: 'The agent qualifies each lead as it arrives, tags it ready, borderline, or not a fit, and hands the team a structured summary instead of a raw form submission.',
    },
    project2: {
      title:       'Quote & Invoice Generator',
      painPoint:   'Putting together a quote or invoice for every new request means re-typing the same line items, pricing, and terms by hand, and one wrong number holds up payment.',
      system:      'A workflow that takes the job details someone enters into a form and turns them into a formatted quote or invoice automatically.',
      description: 'Fill in the line items once. The workflow builds the document, applies the right pricing and terms, and sends it straight to the client.',
    },
    project3: {
      title:       'Real Estate Video Generator',
      painPoint:   'Listing agents either pay for a video crew on every property or skip video entirely, because coordinating a shoot for each new listing costs more time and money than most listings justify.',
      system:      'A workflow that takes the property details and photos an agent already has and assembles them into a structured walkthrough video, no camera crew or editor required.',
      description: 'The agent fills in the property details and uploads photos once. The workflow paces the shots, adds the property information, and returns a finished video ready to download.',
    },
    project4: {
      title:       'Script Generator',
      painPoint:   'Producing a script for TV, radio, and social media means writing the same story three separate times, in whatever format each platform expects, sometimes in two languages.',
      system:      'A generator that takes one brief and produces scripts formatted for TV, radio, or social media, in English or Spanish.',
      description: 'Enter the topic once and choose the formats needed. The workflow returns one script per format, ready to record or post.',
    },
    project5: {
      title:       'LinkedIn Post Generator',
      painPoint:   'Posting on LinkedIn every week takes research, writing, and finding or making an image, on top of whatever else is already on the schedule.',
      system:      'A pipeline that drafts an article and a header image for a topic someone selects, then holds it for review before anything goes out.',
      description: 'Pick a topic and review the draft. Once approved, the workflow publishes the post to LinkedIn directly, no manual copy-pasting.',
    },
    cta: {
      eyebrow: 'Have a Similar Problem?',
      heading: 'If one of these looks like your problem, let\'s talk about building yours.',
      body:    'Every system on this page started the same way this conversation would: a specific process that was costing time or money. Tell us what\'s slow, manual, or inconsistent in your operation, and we\'ll tell you honestly whether an automated system is the right fix.',
      button:  'Start a Conversation',
    },
  },

};
