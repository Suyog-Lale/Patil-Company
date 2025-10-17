
export interface NavLink {
  name: string;
  href: string;
}

export interface ServiceCategory {
  name: string;
  services: string[];
}

export interface Client {
  name: string;
  logo?: string;
  type: 'completed' | 'ongoing';
}

export type ProjectCategory = 'Industrial' | 'Commercial' | 'Residential';

export interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  imageUrl: string;
}
