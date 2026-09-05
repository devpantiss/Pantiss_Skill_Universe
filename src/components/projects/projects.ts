export type ProjectStatus = 'completed' | 'ongoing';

export interface SkillingProject {
  id: string;
  sector: string;
  title: string;
  location: string;
  image: string;
  description: string;
  focus: string[];
  status?: ProjectStatus;
}

// Leave status unset until the project lifecycle is confirmed.
export const projects: SkillingProject[] = [
  { id: 'mining', sector: 'Mining', title: 'Mining skills. Real-world readiness.', location: 'Angul, Odisha', image: '/Homepage/campuses/mining.jpg', description: 'Practical skilling for the mining workforce, connecting technical learning with the demands of the sector.', focus: ['Equipment operations', 'Workplace safety', 'Industry-aligned learning'] },
  { id: 'shipping', sector: 'Shipping & Logistics', title: 'Building skills that move industries.', location: 'Paradip, Odisha', image: '/Homepage/campuses/shipping.jpg', description: 'Sector-focused learning for shipping and logistics, preparing learners for connected supply chains.', focus: ['Logistics fundamentals', 'Port operations', 'Workplace readiness'] },
  { id: 'aviation', sector: 'Aviation', title: 'Opening new horizons in aviation.', location: 'Kalahandi, Odisha', image: '/Homepage/campuses/aviation.jpg', description: 'Aviation-focused skilling that connects learners with the knowledge and professional skills of the sector.', focus: ['Aviation fundamentals', 'Service skills', 'Professional readiness'] },
  { id: 'construction', sector: 'Construction', title: 'Skills to build what comes next.', location: 'Jharsuguda, Odisha', image: '/Homepage/campuses/construct.jpg', description: 'Hands-on learning in construction technology and infrastructure equipment for a changing built environment.', focus: ['Construction technology', 'Infrastructure equipment', 'Safe working practices'] },
  { id: 'energy', sector: 'Power & Green Energy', title: 'Preparing a future energy workforce.', location: 'Sukinda, Odisha', image: '/Homepage/campuses/greenenergy.jpg', description: 'Technical skill development aligned with the power sector and the transition towards green energy.', focus: ['Power sector skills', 'Green energy awareness', 'Technical training'] },
  { id: 'green-jobs', sector: 'Green Jobs', title: 'Growing skills for a greener future.', location: 'Joda, Odisha', image: '/Homepage/campuses/rise.JPG', description: 'Skilling pathways that bring sustainability into practical learning and future-focused careers.', focus: ['Sustainable practices', 'Green career pathways', 'Applied learning'] },
];
