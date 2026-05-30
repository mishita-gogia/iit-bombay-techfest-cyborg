import { LucideIcon } from 'lucide-react';

export interface Feature {
  id: string;
  iconName: string; // Used to dynamically resolve Lucide icons
  title: string;
  description: string;
  tag: string;
  glowColor: string; // e.g., 'cyan', 'rose', 'purple', 'emerald'
}

export interface Technology {
  id: string;
  name: string;
  description: string;
  iconName: string;
  tagline: string;
  specifications: string[];
  hudVisualType: 'matrix' | 'graph' | 'radar' | 'waves' | 'grid';
  accentColor: string; // hex or Tailwind color
  glowClass: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
  progress: number;
  neonColor: string;
}

export interface TimelineMilestone {
  id: string;
  era: string;
  title: string;
  description: string;
  status: 'achieved' | 'integrating' | 'theoretical' | 'unlocked';
  year: string;
  integrations: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  augmentationLevel: string; // e.g. "82% Cybernetic"
  syncRate: string; // e.g. "99.8%"
  biometricStatus: 'OPTIMAL' | 'OVERCLOCKED' | 'STABLE';
}
