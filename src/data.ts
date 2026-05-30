import { Feature, Technology, Stat, TimelineMilestone, Testimonial } from './types';

export const FEATURES: Feature[] = [
  {
    id: 'feat-1',
    iconName: 'Cpu',
    title: 'Cognitive Sync Engine',
    description: 'Establish high-fidelity mental-link with local and ambient neural lattices running at 1000 Terahertz.',
    tag: 'INTELLIGENCE',
    glowColor: 'cyan',
  },
  {
    id: 'feat-2',
    iconName: 'Shield',
    title: 'Firewall Biometrics',
    description: 'Secure your organic neural tissue against cognitive intrusions with military-grade memory shielding.',
    tag: 'SECURE',
    glowColor: 'purple',
  },
  {
    id: 'feat-3',
    iconName: 'Zap',
    title: 'Adrenaline Overclocking',
    description: 'Safely boost reflex responsiveness by 400% via micro-dosed nanite bio-signal propagation.',
    tag: 'PERFORMANCE',
    glowColor: 'rose',
  },
  {
    id: 'feat-4',
    iconName: 'Eye',
    title: 'Multispectral Visor',
    description: 'See beyond organic limits, encompassing thermal, infrared, magnetic, and overlay HUD readouts.',
    tag: 'SENSORY',
    glowColor: 'emerald',
  },
];

export const TECHNOLOGIES: Technology[] = [
  {
    id: 'tech-ai',
    name: 'Artificial Intelligence',
    tagline: 'Hyper-Dimensional Cognitive Synthesis',
    description: 'We develop self-optimizing neural networks that mesh directly with human wetware, serving as an augmented cognitive partner that learns, predicts, and thinks alongside you.',
    iconName: 'BrainCircuit',
    specifications: [
      'Model: Synthetix-v9 Cognitive Lattice',
      'Cognitive Speed: 24.8 Exaflops',
      'Integration Depth: Layer 4 Cortical Mapping',
      'Adaptive Latency: < 0.1ms direct synap-link'
    ],
    hudVisualType: 'matrix',
    accentColor: '#06b6d4', // cyan-500
    glowClass: 'shadow-[0_0_15px_rgba(6,182,212,0.3)] border-cyan-500/30'
  },
  {
    id: 'tech-robotics',
    name: 'Robotics & Actuators',
    tagline: 'Carbon-Fiber Molecular Muscle Actuation',
    description: 'Replacing bulky electro-mechanical components with biomecondensed carbon-molecular fiber bundles that mimic and augment natural organic movement with superhuman vigor.',
    iconName: 'Sparkles',
    specifications: [
      'Actuator Class: Carbonite Myofilaments',
      'Tensile Strength: 4500 MPa (12x Steel)',
      'Power Source: Micro-kinetic charging system',
      'Flexibility Threshold: Fluid multi-axis redirection'
    ],
    hudVisualType: 'grid',
    accentColor: '#ec4899', // pink-500
    glowClass: 'shadow-[0_0_15px_rgba(236,72,153,0.3)] border-pink-500/30'
  },
  {
    id: 'tech-neural',
    name: 'Neural Networks',
    tagline: 'High-Density Brain-Machine Interface',
    description: 'The physical interface laying on the skull surface or micro-injected at the cellular level, translating digital data into neuro-synaptic signals seamlessly.',
    iconName: 'Network',
    specifications: [
      'Interface Node: Bio-compatible Graphene mesh',
      'Channel Density: 4,096 parallel streams',
      'Signal Translation: Adaptive Wavelet-Fourier',
      'Direct Action Trigger: Intent-based motor decoding'
    ],
    hudVisualType: 'graph',
    accentColor: '#a855f7', // purple-500
    glowClass: 'shadow-[0_0_15px_rgba(168,85,247,0.3)] border-purple-500/30'
  },
  {
    id: 'tech-cybernetics',
    name: 'Cybernetics',
    tagline: 'Bio-Somatic Machinery Replacement',
    description: 'Complete replacement organs and limbs that transcend the fragility of organic life, augmenting sensory and mechanical outputs beyond raw biological limitations.',
    iconName: 'Gauge',
    specifications: [
      'Somatic Core: Sub-dermal endocrine regulatory unit',
      'Visual Feedback: 8K UV-Filtered micro-retina',
      'Thermal Control: Cryo-fluid thermal dispatcher',
      'Somatic Durability: Class-A Titanium framework'
    ],
    hudVisualType: 'radar',
    accentColor: '#10b981', // emerald-500
    glowClass: 'shadow-[0_0_15px_rgba(16,185,129,0.3)] border-emerald-500/30'
  },
  {
    id: 'tech-quantum',
    name: 'Quantum Computing',
    tagline: 'Sub-Atomic Parallel Calculation Engine',
    description: 'Under the hood, all biological datasets are computed inside a localized quantum core utilizing entanglement states, bypassing binary limitations entirely.',
    iconName: 'Server',
    specifications: [
      'Localized Qubits: 256 physical qubit cluster',
      'Cooling state: Ambient Room-temp thermal shield',
      'Encryption Level: Quantum-scrambled hash keying',
      'Multiverse Predictive Index: 99.98% certainty'
    ],
    hudVisualType: 'waves',
    accentColor: '#f59e0b', // amber-500
    glowClass: 'shadow-[0_0_15px_rgba(245,158,11,0.3)] border-amber-500/30'
  }
];

export const STATISTICS: Stat[] = [
  {
    id: 'stat-sync',
    value: 99.82,
    suffix: '%',
    label: 'Synchronization Accuracy',
    description: 'Average fidelity of digital-to-synaptic intent conversion rate across active hybrid networks.',
    progress: 99.82,
    neonColor: 'cyan',
  },
  {
    id: 'stat-latency',
    value: 0.08,
    suffix: ' ms',
    label: 'Direct Link Latency',
    description: 'Real-time delay in mental transactions when pulling from global web-nets into cortex caches.',
    progress: 95.0,
    neonColor: 'purple',
  },
  {
    id: 'stat-power',
    value: 840,
    suffix: ' TB/s',
    label: 'Bio-Signal Bandwidth',
    description: 'Maximum biological transmission speed of multi-channel sub-dermal graphene networks.',
    progress: 84.0,
    neonColor: 'rose',
  },
  {
    id: 'stat-population',
    value: 12.4,
    suffix: 'M',
    label: 'Synthesized Users',
    description: 'Global verified human augmenteess actively operating on our decentralized Hybrid Framework.',
    progress: 72.5,
    neonColor: 'emerald',
  }
];

export const TIMELINE: TimelineMilestone[] = [
  {
    id: 'time-1',
    era: 'Pre-Synthesis',
    title: 'Biological Limitation (Pure Human)',
    description: 'The baseline human state. Fragile biology, subject to chronic diseases, storage limits (memory decay), and slow physical reaction cycles.',
    status: 'achieved',
    year: '2023',
    integrations: ['Organic Brain Core', 'Chemical Adrenaline', 'Senses restricted to 400-700nm']
  },
  {
    id: 'time-2',
    era: 'Augmented Era',
    title: 'The Enhanced Human',
    description: 'Sub-dermal chips and external exoframes alleviate basic constraints. Cognitive assistance via voice and smart lenses becomes standard.',
    status: 'achieved',
    year: '2025',
    integrations: ['Graphene Skin Patches', 'Retinal Overlay Lenses', 'Assistive AI Whispering Core']
  },
  {
    id: 'time-3',
    era: 'Hybrid Transition',
    title: 'The True Cyborg',
    description: 'Direct wetware brain-machine integration (BMI). Human thoughts execute machine controls instantly. Organic limbs are seamlessly swapped for neural-linked cybernetics.',
    status: 'integrating',
    year: '2026',
    integrations: ['Layer-4 Cortical Implant', 'Neuro-actuated Carbon Limbs', 'Decentralized Edge Local Sync']
  },
  {
    id: 'time-4',
    era: 'Collective Horizon',
    title: 'Super Intelligence Convergence',
    description: 'Somatic individuals unite with centralized localized swarm intelligence. Physical death is bypassed as consciousness can map dynamically into quantum-logical server streams.',
    status: 'theoretical',
    year: '2029',
    integrations: ['Quantum Core Mind Uploading', 'Unified Planetary Consciousness Sub-net', 'Sub-atomic Somatic Reconstruction']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Kaelen Vance',
    role: 'Cyber-Athlete & Reflex Augmentee',
    avatar: 'https://picsum.photos/seed/kaelen/150/150',
    quote: 'Before my sensory augmentations, I operated with a 150ms delay. Now, with the adrenaline nano-actuators and Synap-link, I can perceive projectiles in slow motion. The organic/synthetic merge feels totally natural.',
    augmentationLevel: '78% Cybernetic',
    syncRate: '99.94%',
    biometricStatus: 'OPTIMAL',
  },
  {
    id: 'test-2',
    name: 'Dr. Evelyn Moss',
    role: 'Neural Surgeon & Cognitive Pioneer',
    avatar: 'https://picsum.photos/seed/evelyn/150/150',
    quote: 'The true triumph of our Cyborg Frame is not just physical strength, but cognitive capacity. I can browse medical archives, crosscheck thousands of diagnostic variables, and execute delicate micro-procedures with zero tremor.',
    augmentationLevel: '45% Cybernetic',
    syncRate: '99.81%',
    biometricStatus: 'STABLE',
  },
  {
    id: 'test-3',
    name: 'Xavier Cole',
    role: 'Deep-Space Systems Architect',
    avatar: 'https://picsum.photos/seed/xavier/150/150',
    quote: 'Working at high radiation levels in orbital stations requires hardware that organic bodies cannot sustain. My radiation-filtering lungs and cybernetic optic systems make EVA missions incredibly safe and highly productive.',
    augmentationLevel: '91% Cybernetic',
    syncRate: '99.98%',
    biometricStatus: 'OVERCLOCKED',
  },
];
