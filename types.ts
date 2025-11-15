
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

