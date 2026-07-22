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
    cardCta: 'View details',
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
      modal: {
        painPoint: {
          headline: 'Qualifying leads shouldn\'t be the job that eats your day.',
          body: '<p>Law firms, real estate agents, and growing businesses all hit the same wall: leads come in fast, but figuring out which ones are worth pursuing takes time nobody has. Someone has to read every inquiry, cross-check details, weigh intent against fit, and decide who gets a callback today versus who waits, or gets missed entirely.</p><p>That manual triage becomes a bottleneck. High-value leads sit in a queue behind low-value ones. Follow-up slows down. And the busier the business gets, the worse the problem becomes.</p>',
        },
        system: {
          headline: 'An automated Lead Qualifier workflow that does the thinking for you.',
          body: '<p>Instead of a person manually sorting through every submission, the system takes the lead\'s information the moment it comes in, contact details, needs, budget, timeline, or case specifics, and runs it through a structured scoring model built around what actually makes a lead worth pursuing.</p><p>No spreadsheets. No manual review queue. No guesswork about who to call first.</p>',
        },
        description: {
          headline: 'Fill in the lead\'s information, and the workflow takes it from there.',
          body: '<p>It analyzes the details against a defined set of qualifying criteria: intent, budget, urgency, fit, and returns a clear score. High-scoring leads surface immediately as priorities. Lower-scoring ones are flagged for nurture or follow-up later.</p><p>The result: faster response times, no lead falling through the cracks, and a team that spends its time closing instead of sorting.</p>',
        },
      },
    },
    project2: {
      title:       'Quote & Invoice Generator',
      painPoint:   'Putting together a quote or invoice for every new request means re-typing the same line items, pricing, and terms by hand, and one wrong number holds up payment.',
      system:      'A workflow that takes the job details someone enters into a form and turns them into a formatted quote or invoice automatically.',
      description: 'Fill in the line items once. The workflow builds the document, applies the right pricing and terms, and sends it straight to the client.',
      modal: {
        painPoint: {
          headline: 'Getting paid should be simple. In practice, it\'s anything but.',
          body: '<p>Every business, from a solo freelancer to a growing agency, runs into the same wall at the end of a project: someone has to sit down and turn the work into a quote or an invoice. That means digging back through hours logged, calculating labor costs, double-checking the math so nothing\'s over- or under-billed, formatting it so it looks professional, and then writing an email that doesn\'t sound like it was thrown together in five minutes.</p><p>It\'s tedious. It\'s repetitive. And it happens over and over, for every client, every project. Multiply that by a busy month and you\'ve got hours of admin work that has nothing to do with the actual craft, hours that could\'ve gone toward the next project, the next client, the next win. Worse, when this process is rushed, mistakes creep in: wrong totals, missing line items, invoices that go out late, all things that can delay payment or make a business look less polished than it actually is.</p><p>The real cost isn\'t just time. It\'s momentum.</p>',
        },
        system: {
          headline: 'This is where the Quote & Invoice Generator changes the equation.',
          body: '<p>Instead of manually rebuilding a quote or invoice from scratch every time, this workflow takes the repetitive parts off your plate entirely. You provide the details once, the job, the hours, the rate, the client, and the system handles the rest: calculating totals, applying the right formatting, and packaging everything into a document that looks like it came from a professional studio, because it did.</p><p>It\'s not just about saving time, though that\'s a large part of it. It\'s about consistency. Every quote and invoice follows the same clean, branded structure. Every calculation is accurate. Every email that goes out reads like it was written by someone who has their business fully together, because now, it is.</p><p>Think of it as a behind-the-scenes assistant that never gets tired, never makes a math error, and never forgets a step.</p>',
        },
        description: {
          headline: 'The entire process, from raw job details to a client\'s inbox, happens in one smooth flow.',
          body: '<p>Fill in the essentials: hours worked, labor rate, project scope, client information, and the workflow takes over from there. It automatically calculates the total cost, factoring in every variable provided, and builds a clean, professional quote or invoice around it. No formatting from scratch. No formulas to double-check. No blank email staring back at you.</p><p>Then it goes one step further: it drafts a polished, client-ready email, attaches the finished document, and sends it, promptly and consistently, every time.</p><p>What used to take 30-45 minutes of manual work now takes a few minutes of input. What clients receive isn\'t just a document, it\'s a signal that they\'re working with someone organized and on top of their business. That\'s the shift this project delivers: from busywork to momentum, from manual to automatic, from "I\'ll get to it later" to "it\'s already done."</p>',
        },
      },
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
