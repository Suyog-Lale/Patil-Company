
import { NavLink, ServiceCategory, Client, Project, ProjectCategory } from './types';

export const LOGO_BASE64 = 'blob:https://aistudio.google.com/ebc4c404-e2ef-4792-ba02-394af8afade1';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Clients', href: '#clients' },
  { name: 'Projects', href: '#projects' },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
    {
        name: "Core & Structural",
        services: ["Site Preparation", "Foundation Work", "Structural Work", "Roofing"],
    },
    {
        name: "Interior & Exterior",
        services: ["Interior Partitions", "Flooring", "Ceilings", "Painting", "Carpentry", "Aluminum Doors/Windows", "ACP Cladding", "Glass Facades", "Steel Fabrication", "Sign Boards"],
    },
    {
        name: "Industrial Flooring",
        services: ["Epoxy Flooring", "Polyurethane (PU) Flooring", "Heavy-Duty Flooring", "Floor Repair", "Anti-static/ESD Flooring", "Anti-skid Flooring"],
    },
    {
        name: "Specialized Services",
        services: ["Pressure Grouting", "Sand Blasting", "High-Rise Painting (Chimney & Facade)", "Demolition"],
    },
    {
        name: "Management & MEP",
        services: ["Farm/Nursery/Orchard Management", "Mechanical/Electrical/Plumbing (MEP)"],
    },
    {
        name: "Renovation & Landscaping",
        services: ["Residential Renovations", "Commercial Renovations", "Landscaping", "Paving", "Outdoor Lighting"],
    },
    {
        name: "Additional & Project Management",
        services: ["Waterproofing", "Energy Upgrades", "Soundproofing", "Construction Management", "Consulting"],
    },
];

export const CLIENTS: Client[] = [
    { name: 'AM/NS India', logo: 'https://travel.amns.in/static/media/amns_transparent.bf237bba696c0751e0b1.png', type: 'completed' },
    { name: 'Pepsico International - Frito Lay', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/PepsiCo_logo.svg/1200px-PepsiCo_logo.svg.png', type: 'completed' },
    { name: 'H & R. Johnson (I.) Limited', logo: 'https://d2ki7eiqd260sq.cloudfront.net/CORPORATE-LOGO-NEW6130d7d5-8c2c-41c1-8918-e01f2fa1be73.png', type: 'completed' },
    { name: 'Grindwell - Nortan', logo: 'https://companieslogo.com/img/orig/GRINDWELL.NS-155a919c.png?t=1720244492', type: 'completed' },
    { name: 'Alta Laboratories Ltd', logo: 'https://www.pharmacompass.com/image/logo/alta-laboratories-1652261249.png',type: 'completed' },
    { name: 'Colt Cables Limited',  logo: 'https://www.pharmacompass.com/image/logo/alta-laboratories-1652261249.png',type: 'completed' },
    { name: 'Indo Rama Cements Ltd',  logo: 'https://www.pharmacompass.com/image/logo/alta-laboratories-1652261249.png',type: 'completed' },
    { name: 'Ispat Industries Limited',  logo: 'https://www.pharmacompass.com/image/logo/alta-laboratories-1652261249.png',type: 'completed' },
    { name: 'Khopoli Municipal Council', logo: 'https://www.pharmacompass.com/image/logo/alta-laboratories-1652261249.png', type: 'completed' },
    { name: 'Krantivan',  logo: 'https://www.pharmacompass.com/image/logo/alta-laboratories-1652261249.png',type: 'completed' },
    { name: 'Lona Industries Limited',  logo: 'https://www.pharmacompass.com/image/logo/alta-laboratories-1652261249.png',type: 'completed' },
    { name: 'M/s East Coast Constructions Limited',  logo: 'https://www.pharmacompass.com/image/logo/alta-laboratories-1652261249.png',type: 'completed' },
    { name: 'M/s Penguin Petrochemicals Private Limited',  logo: 'https://www.pharmacompass.com/image/logo/alta-laboratories-1652261249.png',type: 'completed' },
    { name: 'M/s Wartsila India Limited', logo: 'https://www.pharmacompass.com/image/logo/alta-laboratories-1652261249.png', type: 'completed' },
    { name: 'Neelam Power Plant', logo: 'https://www.pharmacompass.com/image/logo/alta-laboratories-1652261249.png', type: 'completed' },
    { name: 'Ravin Cables Limited',  logo: 'https://www.pharmacompass.com/image/logo/alta-laboratories-1652261249.png',type: 'completed' },
    { name: 'Renuka Sugar', logo: 'https://www.pharmacompass.com/image/logo/alta-laboratories-1652261249.png', type: 'completed' },
    { name: 'SKI Carbon', logo: 'https://www.pharmacompass.com/image/logo/alta-laboratories-1652261249.png', type: 'completed' },
    { name: 'Simplex Concrete Piles India Limited', logo: 'https://www.pharmacompass.com/image/logo/alta-laboratories-1652261249.png', type: 'completed' },
    { name: 'TTP Ltd', logo: 'https://www.pharmacompass.com/image/logo/alta-laboratories-1652261249.png', type: 'completed' },
    { name: 'Uttam Galva Steels Limited',  logo: 'https://www.pharmacompass.com/image/logo/alta-laboratories-1652261249.png',type: 'completed' },
    { name: 'AM/NS',  logo: 'https://www.pharmacompass.com/image/logo/alta-laboratories-1652261249.png',type: 'ongoing' },
    { name: 'Krantivan', logo: 'https://www.pharmacompass.com/image/logo/alta-laboratories-1652261249.png', type: 'ongoing' },
    { name: 'SKI Carbon',  logo: 'https://www.pharmacompass.com/image/logo/alta-laboratories-1652261249.png',type: 'ongoing' },
];

export const PROJECTS: Project[] = [
    { id: 1, title: 'AM/NS Steel Plant Expansion', description: 'Ongoing structural and repair work for a major steel manufacturing facility.', category: 'Industrial', imageUrl: 'https://images.unsplash.com/photo-1581092446347-a85c4141d583?q=80&w=2070&auto=format&fit=crop' },
    { id: 2, title: 'Corporate Office Renovation', description: 'Complete interior and exterior overhaul for a commercial office building.', category: 'Commercial', imageUrl: 'https://images.unsplash.com/photo-1519994994-9128a3f68058?q=80&w=1974&auto=format&fit=crop' },
    { id: 3, title: 'Luxury Residential Villa', description: 'Ground-up construction of a high-end residential property with custom landscaping.', category: 'Residential', imageUrl: 'https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?q=80&w=1974&auto=format&fit=crop' },
    { id: 4, title: 'Industrial Warehouse Flooring', description: 'Installation of heavy-duty epoxy flooring for a high-traffic logistics center.', category: 'Industrial', imageUrl: 'https://images.unsplash.com/photo-1621947081720-869708235779?q=80&w=2070&auto=format&fit=crop' },
    { id: 5, title: 'Retail Space Build-Out', description: 'Custom interior fit-out for a new retail storefront in a shopping complex.', category: 'Commercial', imageUrl: 'https://images.unsplash.com/photo-1600880292210-859b92226bf2?q=80&w=1974&auto=format&fit=crop' },
    { id: 6, title: 'High-Rise Facade Painting', description: 'Specialized painting and waterproofing services for a multi-story residential tower.', category: 'Residential', imageUrl: 'https://images.unsplash.com/photo-1580984932353-097a8a25a0da?q=80&w=1974&auto=format&fit=crop' },
];
