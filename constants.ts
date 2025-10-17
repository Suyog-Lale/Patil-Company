import {
  NavLink,
  ServiceCategory,
  Client,
  Project,
  ProjectCategory,
} from "./types";

// Fixed: Using a proper placeholder logo or you can replace with your actual logo URL
export const LOGO_BASE64 =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHJ4PSI4IiBmaWxsPSIjRUFCMzA4Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+UEM8L3RleHQ+Cjwvc3ZnPg==";

export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Clients", href: "#clients" },
  { name: "Projects", href: "#projects" },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    name: "Core & Structural",
    services: [
      "Site Preparation",
      "Foundation Work",
      "Structural Work",
      "Roofing",
    ],
  },
  {
    name: "Interior & Exterior",
    services: [
      "Interior Partitions",
      "Flooring",
      "Ceilings",
      "Painting",
      "Carpentry",
      "Aluminum Doors/Windows",
      "ACP Cladding",
      "Glass Facades",
      "Steel Fabrication",
      "Sign Boards",
    ],
  },
  {
    name: "Industrial Flooring",
    services: [
      "Epoxy Flooring",
      "Polyurethane (PU) Flooring",
      "Heavy-Duty Flooring",
      "Floor Repair",
      "Anti-static/ESD Flooring",
      "Anti-skid Flooring",
    ],
  },
  {
    name: "Specialized Services",
    services: [
      "Pressure Grouting",
      "Sand Blasting",
      "High-Rise Painting (Chimney & Facade)",
      "Demolition",
    ],
  },
  {
    name: "Management & MEP",
    services: [
      "Farm/Nursery/Orchard Management",
      "Mechanical/Electrical/Plumbing (MEP)",
    ],
  },
  {
    name: "Renovation & Landscaping",
    services: [
      "Residential Renovations",
      "Commercial Renovations",
      "Landscaping",
      "Paving",
      "Outdoor Lighting",
    ],
  },
  {
    name: "Additional & Project Management",
    services: [
      "Waterproofing",
      "Energy Upgrades",
      "Soundproofing",
      "Construction Management",
      "Consulting",
    ],
  },
];

export const CLIENTS: Client[] = [
  {
    name: "AM/NS India",
    logo: "https://travel.amns.in/static/media/amns_transparent.bf237bba696c0751e0b1.png",
    type: "completed",
  },
  {
    name: "Pepsico International - Frito Lay",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/PepsiCo_logo.svg/1200px-PepsiCo_logo.svg.png",
    type: "completed",
  },
  {
    name: "H & R. Johnson (I.) Limited",
    logo: "https://d2ki7eiqd260sq.cloudfront.net/CORPORATE-LOGO-NEW6130d7d5-8c2c-41c1-8918-e01f2fa1be73.png",
    type: "completed",
  },
  {
    name: "Grindwell - Nortan",
    logo: "https://companieslogo.com/img/orig/GRINDWELL.NS-155a919c.png?t=1720244492",
    type: "completed",
  },
  {
    name: "Alta Laboratories Ltd",
    logo: "https://www.pharmacompass.com/image/logo/alta-laboratories-1652261249.png",
    type: "completed",
  },
  {
    name: "Colt Cables Limited",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbJNdw2MoTkIEsq6yeodbeXeHO_CpWh1pQw&s",
    type: "completed",
  },
  {
    name: "Indo Rama Cements Ltd",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/INDORAMA.jpg",
    type: "completed",
  },
  {
    name: "Ispat Industries Limited",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOF4o8a3P__AGJ2J2-YN-c2Mbz8ojrVQUO7g&s",
    type: "completed",
  },
  {
    name: "Khopoli Municipal Council",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKL-KUveVs56V4BYYzDxYxoBYvQYTf6StJqQ&s",
    type: "completed",
  },
  {
    name: "Krantivan",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE2IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5LPC90ZXh0Pjwvc3ZnPg==",
    type: "completed",
  },
  {
    name: "Lona Industries Limited",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjxlXhBdv0QU9mzSU5o7Vwj75Fh_94SAKoEw&s",
    type: "completed",
  },
  {
    name: "M/s East Coast Constructions Limited",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkyeE3PLGh4rgjwLFySVWP596M4yGo7rGIQ&s",
    type: "completed",
  },
  {
    name: "M/s Penguin Petrochemicals Private Limited",
    logo: "https://www.penguinpetro.com/images/penguin-logo.png",
    type: "completed",
  },
  {
    name: "M/s Wartsila India Limited",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnPlZ-tc4dUO6aUws5hfoWy2i3nZhqd5h4Eg&s",
    type: "completed",
  },
  {
    name: "Neelam Power Plant",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxtPGKIAiRzdCu-m7lBeg0wqRaR3JnPVNxFQ&s",
    type: "completed",
  },
  {
    name: "Ravin Cables Limited",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL2Dz1b4bSbphY_MmglgAG3-EXggNmSaTs_w&s",
    type: "completed",
  },
  {
    name: "Renuka Sugar",
    logo: "https://indianpsu.com/wp-content/uploads/2023/05/Shree-Renuka-Sugars-Limited-Logo-3.jpg",
    type: "completed",
  },
  {
    name: "SKI Carbon",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE2IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5TS0k8L3RleHQ+PC9zdmc+",
    type: "completed",
  },
  {
    name: "Simplex Concrete Piles India Limited",
    logo: "https://tipl.triamtmt.com/wp-content/uploads/2025/05/9.jpg",
    type: "completed",
  },
  {
    name: "Uttam Galva Steels Limited",
    logo: "https://www.equitybulls.com/equitybullsadmin/uploads/Uttam%20Galva%20Steels%20Limited%203.jpg",
    type: "completed",
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AM/NS Steel Plant Expansion",
    description:
      "Ongoing structural and repair work for a major steel manufacturing facility.",
    category: "Industrial",
    imageUrl:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Corporate Office Renovation",
    description:
      "Complete interior and exterior overhaul for a commercial office building.",
    category: "Commercial",
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Luxury Residential Villa",
    description:
      "Ground-up construction of a high-end residential property with custom landscaping.",
    category: "Residential",
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Industrial Warehouse Flooring",
    description:
      "Installation of heavy-duty epoxy flooring for a high-traffic logistics center.",
    category: "Industrial",
    imageUrl:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Retail Space Build-Out",
    description:
      "Custom interior fit-out for a new retail storefront in a shopping complex.",
    category: "Commercial",
    imageUrl:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "High-Rise Facade Painting",
    description:
      "Specialized painting and waterproofing services for a multi-story residential tower.",
    category: "Residential",
    imageUrl:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80",
  },
];
