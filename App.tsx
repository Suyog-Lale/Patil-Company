import React, { useState, useEffect, useRef } from "react";
// It looks like you might not be using 'imag' anymore, consider removing if unused
// import imag from "./assets/image.png"; // Use relative path if needed

// --- FIX: Using relative path for logo import ---
import logo from "./assets/logo.jpeg";

// --- TYPES (from types.ts) ---
interface NavLink {
  name: string;
  href: string;
}

interface Service {
    name: string;
    description: string;
}

interface ServiceCategory {
  name: string;
  services: Service[];
}

interface Client {
  name: string;
  logo?: string; // logo is a string URL or path
  type: 'completed' | 'ongoing' | 'vendor'; // Added 'vendor' type
}

// Project types removed as they are no longer needed
// type ProjectCategory = 'Industrial' | 'Commercial' | 'Residential';
// interface Project { ... }

// --- CONSTANTS (from constants.ts) ---
// Using page paths for hash routing
// UPDATED: Removed Projects and Policies
const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Clients", href: "/clients" },
  // { name: "Projects", href: "/projects" }, // Removed
  // { name: "Policies", href: "/policies" }, // Removed
];

// --- UPDATED: FULL 13 SERVICE CATEGORIES ---
const SERVICE_CATEGORIES: ServiceCategory[] = [
    {
        name: "Core Construction",
        services: [
            { name: "Site Preparation", description: "Land clearing, grading, excavation, and earthwork." },
            { name: "Foundation Work", description: "Footings, concrete foundations, piling, basement construction." },
            { name: "Structural Work", description: "Framing (wood, steel, concrete), reinforced concrete structures." },
            { name: "Roofing Services", description: "Installation of flat/sloped roofs, roof repairs, waterproofing." }
        ],
    },
    {
        name: "Interior Construction",
        services: [
            { name: "Interior Partitions", description: "Drywall installation, glass partitioning." },
            { name: "Flooring Installation", description: "Tile, carpet, hardwood, laminate flooring." },
            { name: "Ceiling Work", description: "False ceilings (POP, gypsum), suspended ceilings (acoustic tiles)." },
            { name: "Painting and Finishing", description: "Interior wall painting, staining, varnishing woodwork." },
            { name: "Carpentry and Furniture Work", description: "Custom cabinetry, modular kitchens, furniture design." },
        ],
    },
    {
        name: "Exterior Construction",
        services: [
            { name: "Aluminum Doors and Windows", description: "Fabrication and installation of durable aluminum frames for doors and windows." },
            { name: "ACP Cladding (Aluminum Composite Panel)", description: "Exterior cladding for buildings to enhance aesthetics and durability." },
            { name: "Glass Glazing and Facade Work", description: "Installation of glass panels for modern building exteriors." },
            { name: "Steel Fabrication", description: "MS (Mild Steel) and SS (Stainless Steel) fabrication work including grills, railings, trolleys, and structural elements." },
            { name: "Sign Boards and Billboards", description: "Design, fabrication, and installation of advertising boards." },
        ],
    },
    {
        name: "Industrial Flooring",
        services: [
            { name: "Epoxy Flooring", description: "High-performance flooring for industrial environments." },
            { name: "Polyurethane (PU) Flooring", description: "Resistant to organic acids; ideal for food industries." },
            { name: "Heavy-Duty Industrial Flooring", description: "Robust surfaces for warehouses and manufacturing plants." },
            { name: "Proprietary Floor Repair", description: "Specialized solutions for repairing damaged industrial floors." },
            { name: "Anti-static and ESD Flooring", description: "Designed for electronics industries to prevent static discharge." },
            { name: "Anti-skid Flooring", description: "Safety-focused flooring to prevent slips in industrial settings." },
        ],
    },
    {
        name: "Specialized Construction",
        services: [
            { name: "Pressure Grouting", description: "Injection of grout material into voids or cracks in concrete structures to stabilize foundations and prevent leakage." },
            { name: "Sand Blasting", description: "Surface preparation technique used for cleaning or finishing surfaces before painting or coating." },
        ],
    },
    {
        name: "High-Rise Painting",
        services: [
            { name: "Chimney Painting (Over 100 Meters)", description: "Expertise in painting tall chimneys with safety protocols and specialized equipment." },
            { name: "Facade Painting for High-Rise Buildings", description: "Maintenance of building exteriors at great heights to protect against weather elements." },
        ],
    },
    {
        name: "Management Services",
        services: [
            { name: "Farm Management", description: "Comprehensive management services for agricultural operations." },
            { name: "Nursery Management", description: "Care and cultivation of plants in a nursery setting." },
            { name: "Orchard Management", description: "Expertise in the cultivation and maintenance of fruit-bearing trees." },
        ],
    },
    {
        name: "MEP Services",
        services: [
            { name: "Electrical Systems Installation", description: "Wiring, lighting fixtures, and complete electrical systems." },
            { name: "Plumbing Systems Installation", description: "Installation of pipes, fixtures, and plumbing systems." },
            { name: "HVAC Systems Installation", description: "Heating, Ventilation, and Air Conditioning systems." },
        ],
    },
    {
        name: "Demolition Services",
        services: [
            { name: "Selective Demolition", description: "Interior walls or non-load-bearing structures." },
            { name: "Complete Building Demolition", description: "Demolition using heavy machinery." },
        ],
    },
    {
        name: "Renovation & Remodeling",
        services: [
            { name: "Residential Renovations", description: "Complete renovation services for kitchens, bathrooms, and entire homes." },
            { name: "Commercial Space Remodeling", description: "Remodeling services for office interiors and commercial spaces." },
        ],
    },
    {
        name: "Landscaping & Outdoor",
        services: [
            { name: "Garden Landscaping", description: "Garden design, maintenance, and hardscaping (patios, walkways)." },
            { name: "Paving/Hardscaping", description: "Installation of paving for patios, walkways, and driveways." },
            { name: "Outdoor Lighting Installation", description: "Installation of lighting for outdoor spaces to enhance aesthetics and security." },
        ],
    },
    {
        name: "Additional Services",
        services: [
            { name: "Waterproofing Solutions", description: "Solutions for basements, roofs, and other structures to prevent water damage." },
            { name: "Energy Efficiency Upgrades", description: "Services to improve energy efficiency, such as thermal insulation." },
            { name: "Soundproofing Services", description: "Installation of materials to reduce noise in residential or commercial spaces." },
        ],
    },
    {
        name: "Project Management",
        services: [
            { name: "Construction Management", description: "Overseeing project timelines, budgets, and quality control from start to finish." },
            { name: "Consulting Services", description: "Providing expert advice, feasibility studies, and risk assessments for projects." },
        ],
    },
];
// --- END OF UPDATED SERVICES ---

const CLIENTS: Client[] = [
    // Corrected logo path for AM/NS - assuming 'imag' was a placeholder for a specific image import
    // If 'imag' was meant to be imported like the logo, it needs a proper import.
    // Using a placeholder string for now. If you have an image, import it like 'logo'.
    // --- FIX: Using relative paths for placeholder logos ---
    { name: "AM/NS India", logo: "https://travel.amns.in/static/media/amns_transparent.bf237bba696c0751e0b1.png", type: "completed" }, // Example: Replace with actual path or import
    { name: "Pepsico International - Frito Lay", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/PepsiCo_logo.svg/1200px-PepsiCo_logo.svg.png", type: "completed" },
    { name: "H & R. Johnson (I.) Limited", logo: "https://d2ki7eiqd260sq.cloudfront.net/CORPORATE-LOGO-NEW6130d7d5-8c2c-41c1-8918-e01f2fa1be73.png", type: "completed" },
    { name: "Grindwell - Nortan", logo: "https://companieslogo.com/img/orig/GRINDWELL.NS-155a919c.png?t=1720244492", type: "completed" },
    { name: "Alta Laboratories Ltd", logo: "https://www.pharmacompass.com/image/logo/alta-laboratories-1652261249.png", type: "completed" },
    { name: "Colt Cables Limited", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbJNdw2MoTkIEsq6yeodbeXeHO_CpWh1pQw&s", type: "completed" },
    { name: "Indo Rama Cements Ltd", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/INDORAMA.jpg", type: "completed" },
    { name: "Ispat Industries Limited", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOF4o8a3P__AGJ2J2-YN-c2Mbz8ojrVQUO7g&s", type: "completed" },
    { name: "Khopoli Municipal Council", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKL-KUveVs56V4BYYzDxYxoBYvQYTf6StJqQ&s", type: "completed" },
    { name: "Krantivan", logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE2IiBmaWxsPSIjNjY2IiB0ZXh0LWFuYGhvci0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5LPC90ZXh0Pjwvc3ZnPg==", type: "completed" },
    { name: "Lona Industries Limited", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjxlXhBdv0QU9mzSU5o7Vwj75Fh_94SAKoEw&s", type: "completed" },
    { name: "M/s East Coast Constructions Limited", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkyeE3PLGh4rgjwLFySVWP596M4yGo7rGIQ&s", type: "completed" },
    { name: "M/s Penguin Petrochemicals Private Limited", logo: "https://www.penguinpetro.com/images/penguin-logo.png", type: "completed" },
    { name: "M/s Wartsila India Limited", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnPlZ-tc4dUO6aUws5hfoWy2i3nZhqd5h4Eg&s", type: "completed" },
    { name: "Neelam Power Plant", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxtPGKIAiRzdCu-m7lBeg0wqRaR3JnPVNxFQ&s", type: "completed" },
    { name: "Ravin Cables Limited", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL2Dz1b4bSbphY_MmglgAG3-EXggNmSaTs_w&s", type: "completed" },
    { name: "Renuka Sugar", logo: "https://indianpsu.com/wp-content/uploads/2023/05/Shree-Renuka-Sugars-Limited-Logo-3.jpg", type: "completed" },
    { name: "SKI Carbon", logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE2IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5TS0k8L3RleHQ+PC9zdmc+", type: "completed" },
    { name: "Simplex Concrete Piles India Limited", logo: "https://tipl.triamtmt.com/wp-content/uploads/2025/05/9.jpg", type: "completed" },
    { name: "Uttam Galva Steels Limited", logo: "https://www.equitybulls.com/equitybullsadmin/uploads/Uttam%20Galva%20Steels%20Limited%203.jpg", type: "completed" },
];

// --- NEW: ACTIVE VENDORS LIST ---
const ACTIVE_VENDORS: Client[] = [
    { name: "AM/NS India", logo: "https://travel.amns.in/static/media/amns_transparent.bf237bba696c0751e0b1.png", type: "vendor" },
    { name: "SKI Carbon", logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE2IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5TS0k8L3RleHQ+PC9zdmc+", type: "vendor" },
    { name: "Alta Laboratories Ltd", logo: "https://www.pharmacompass.com/image/logo/alta-laboratories-1652261249.png", type: "vendor" },
    { name: "Renuka Sugar", logo: "https://indianpsu.com/wp-content/uploads/2023/05/Shree-Renuka-Sugars-Limited-Logo-3.jpg", type: "vendor" },
    { name: "Jindal Stainless Steelway", logo: "https://image.pitchbook.com/NaIoQV3I21nj3iKo1KFxwtQgYQG1712152282393_200x200", type: "vendor" },
];

// --- PROJECTS CONSTANT REMOVED ---
// const PROJECTS: Project[] = [ ... ];


// --- HOOKS (from hooks/useScrollAnimation.ts) ---
const useScrollAnimation = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(element);
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  return ref;
};

// --- UI COMPONENTS ---
const Header: React.FC<{ onNavigate: (page: string) => void, currentPage: string }> = ({ onNavigate, currentPage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        onNavigate(href);
        setIsOpen(false); // Close mobile menu on navigation
    };

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="/" onClick={(e) => handleLinkClick(e, '/')} className="flex items-center gap-3">
                            <img className="h-16 w-auto p-1 bg-white rounded-md" src={logo} alt="Patil and Company (P and Co) Logo" />
                            <span className="font-bold text-xl text-gray-800 hidden sm:inline-block">Patil and Company</span>
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <nav className="ml-10 flex items-baseline space-x-4">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                    // Highlight the current page link
                                    className={`${currentPage === link.href || (currentPage === '/' && link.href === '/') ? 'text-yellow-600' : 'text-gray-700'} hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a href="/contact" onClick={(e) => handleLinkClick(e, '/contact')} className="ml-4 bg-yellow-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-700 transition-colors">
                                Contact
                            </a>
                        </nav>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-yellow-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-yellow-500">
                            <span className="sr-only">Open main menu</span>
                            <i data-lucide={isOpen ? "x" : "menu"}></i>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="text-gray-700 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="/contact" onClick={(e) => handleLinkClick(e, '/contact')} className="bg-yellow-600 text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-700 mt-2">
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

// --- MODIFIED FOOTER COMPONENT (MINIMALISTIC) ---
const Footer: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        onNavigate(href);
    };

    // --- PROJECTS LINK REMOVED FROM FOOTER ---
    const originalNavLinksPlusContact = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Clients", href: "/clients" },
        // { name: "Projects", href: "/projects" }, // Removed
        { name: "Policies", href: "/policies" }, // Keep in footer
        { name: "Contact", href: "/contact" }
    ];


    return (
        <footer className="bg-gray-800 text-gray-400 border-t border-gray-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main footer content aligned in a single row */}
                <div className="flex flex-col sm:flex-row items-center justify-between h-24">

                    {/* Left Side: Logo and Copyright */}
                    <div className="flex items-center mb-4 sm:mb-0">
                        <img
                            src={logo} // Still using the old logo import
                            alt="Patil and Company Logo"
                            className="h-12 bg-white p-1 rounded-md"
                        />
                        <p className="ml-4 text-sm">
                            &copy; {new Date().getFullYear()} Patil and Company (P and Co).
                        </p>
                    </div>

                    {/* Right Side: Horizontal Quick Links */}
                    <nav>
                        <ul className="flex flex-wrap justify-center sm:justify-end items-center space-x-4 sm:space-x-6">
                            {/* Use the modified list with "Projects" removed */}
                            {originalNavLinksPlusContact.map(link => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleLinkClick(e, link.href)}
                                        className="text-sm hover:text-yellow-400 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                </div>
            </div>
        </footer>
    );
};
// --- END OF UPDATED FOOTER ---


// --- HERO COMPONENT (BUTTON REMOVED) ---
const Hero: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        onNavigate(href);
    };

    return (
        <section id="home" className="relative h-screen flex items-center justify-center text-white">
            <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
            <div className="absolute inset-0 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" alt="Large-scale construction site" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-20 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                    A Legacy of Excellence in Construction
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
                    Executing residential, commercial, and industrial projects with a commitment to quality,
                    safety, and reliability.
                </p>
                {/* --- BUTTON REMOVED FROM HERO --- */}
            </div>
        </section>
    );
};
// --- END OF HERO COMPONENT ---


const About: React.FC = () => {
    const sectionRef = useScrollAnimation<HTMLElement>();
    const coreValues = [
        { icon: 'heart-handshake', title: 'Employee Welfare', description: 'Prioritizing employee welfare ensures loyalty, commitment, and self-motivation, benefiting clients through efficient execution and consistent quality.' },
        { icon: 'trophy', title: 'Proven Expertise', description: 'Over three decades of industry experience ensures efficient execution of every project.' },
        { icon: 'shield-check', title: 'Safety Compliance', description: 'Adherence to Occupational Health and Safety (OHAS) standards ensures safe project environments.' },
        { icon: 'check-circle', title: 'Reliable Delivery', description: 'We deliver results that meet client expectations and timelines.' },
    ];
    return (
        <section id="about" className="py-20 bg-gray-50 fade-in-section" ref={sectionRef}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12"><h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2><p className="mt-4 text-lg text-gray-600">Building the Future, Restoring the Past</p></div>
                <div className="max-w-4xl mx-auto text-center mb-16"><p className="text-gray-700 text-lg leading-relaxed">Registered over a decade ago, we are an MSME construction services firm carrying forward a legacy of more than three decades in the industry. We execute residential, commercial, and industrial jobs with expertise in industrial construction and repair. Our focus is on delivering high-quality work according to the specifications and schedules provided by our clients.</p></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {coreValues.map((value) => (
                        <div key={value.title} className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 text-yellow-600 mx-auto mb-4"><i data-lucide={value.icon} className="w-6 h-6"></i></div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                            <p className="text-gray-600 text-sm">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- PAGE COMPONENTS ---

// --- FIX 1: Removed About from HomePage ---
const HomePage: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => (
    <>
        <Hero onNavigate={onNavigate} />
        {/* <About /> */} {/* Removed About from here */}
    </>
);


const ServicesPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const sectionRef = useScrollAnimation<HTMLElement>();
    return (
        <section id="services" className="py-20 bg-white fade-in-section min-h-screen" ref={sectionRef}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12"><h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2><p className="mt-4 text-lg text-gray-600">Comprehensive Solutions for Every Need</p></div>
                <div className="flex flex-col">
                    {/* --- TABS FOR SERVICES --- */}
                    <div className="mb-8 border-b border-gray-200">
                        <div className="flex flex-wrap -mb-px justify-center" role="tablist" aria-orientation="horizontal">
                            {SERVICE_CATEGORIES.map((category, index) => (
                                <button
                                    key={category.name}
                                    onClick={() => setActiveTab(index)}
                                    className={`py-4 px-1 mx-2 sm:mx-4 border-b-2 text-sm sm:text-base font-medium transition-colors duration-300 ${activeTab === index ? 'border-yellow-600 text-yellow-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                                    role="tab"
                                    aria-selected={activeTab === index}
                                    aria-controls={`tab-panel-${index}`}
                                    id={`tab-${index}`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* --- TAB PANELS --- */}
                    <div className="bg-gray-50 p-8 rounded-lg shadow-inner">
                        {SERVICE_CATEGORIES.map((category, index) => (
                            <div
                                key={category.name}
                                className={`${activeTab === index ? 'block' : 'hidden'}`}
                                role="tabpanel"
                                tabIndex={0}
                                id={`tab-panel-${index}`}
                                aria-labelledby={`tab-${index}`}
                            >
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{category.name}</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-6">
                                    {category.services.map(service => (
                                        <li key={service.name} className="flex items-start">
                                            <i data-lucide="check" className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-1"></i>
                                            <div>
                                                <span className="font-semibold text-gray-800">{service.name}</span>
                                                <p className="text-gray-600 text-sm">{service.description}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- UPDATED CLIENTS PAGE COMPONENT ---
const ClientsPage: React.FC = () => {
    const sectionRef = useScrollAnimation<HTMLElement>();
    const [activeTab, setActiveTab] = useState<'completed' | 'vendors'>('completed');

    const completedClients = CLIENTS.filter(c => c.type === 'completed');
    // We already defined ACTIVE_VENDORS as a global constant

    // Helper function to render a list of clients
    const renderClientList = (clients: Client[]) => (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {clients.map((client) => (
                <div key={client.name} className="flex flex-col justify-between items-center text-center p-4 bg-white border border-gray-200 rounded-lg h-32 hover:shadow-md transition-shadow">
                    <div className="flex-grow flex items-center justify-center w-full h-full overflow-hidden"> {/* Ensure container fills space */}
                        {/* Make image responsive and centered */}
                        <img
                           src={client.logo || 'https://placehold.co/100x60/eee/ccc?text=Logo'} // Fallback placeholder
                           alt={client.name}
                           className="max-h-16 max-w-[80%] client-logo object-contain mx-auto" // Control size, center
                           onError={(e) => {
                             const target = e.target as HTMLImageElement;
                             target.onerror = null; // Prevent infinite loop
                             target.src='https://placehold.co/100x60/eee/ccc?text=Error'; // Error placeholder
                           }}
                        />
                    </div>
                    {/* Ensure text wraps and is centered */}
                    <p className="text-xs sm:text-sm font-medium text-gray-700 mt-2 text-center break-words w-full">{client.name}</p>
                </div>
            ))}
        </div>
    );


    return (
        <section id="clients" className="py-20 bg-gray-50 fade-in-section min-h-screen" ref={sectionRef}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Clients & Vendors</h2>
                    <p className="mt-4 text-lg text-gray-600">Our Commitment to Quality has Earned Their Trust</p>
                </div>

                {/* --- TABS for Clients/Vendors --- */}
                <div className="flex justify-center flex-wrap gap-2 mb-10">
                    <button
                        onClick={() => setActiveTab('completed')}
                        className={`px-6 py-2 rounded-full font-medium text-sm transition-colors ${activeTab === 'completed' ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    >
                        Completed Clients
                    </button>
                    <button
                        onClick={() => setActiveTab('vendors')}
                        className={`px-6 py-2 rounded-full font-medium text-sm transition-colors ${activeTab === 'vendors' ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    >
                        Active Vendors
                    </button>
                </div>

                {/* --- Conditional Content --- */}
                <div>
                    {activeTab === 'completed' && (
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Completed Client Work</h3>
                            {renderClientList(completedClients)}
                        </div>
                    )}
                    {activeTab === 'vendors' && (
                         <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Active Vendors</h3>
                            {renderClientList(ACTIVE_VENDORS)}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
// --- END OF UPDATED CLIENTS PAGE ---


// --- PROJECTS PAGE COMPONENT REMOVED ---
// const ProjectsPage: React.FC = () => { ... };

const ContactPage: React.FC = () => {
    const sectionRef = useScrollAnimation<HTMLElement>();
    return (
        <section id="contact" className="py-20 bg-gray-50 fade-in-section min-h-screen" ref={sectionRef}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12"><h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Get In Touch</h2><p className="mt-4 text-lg text-gray-600">We're Here to Help Build Your Vision</p></div>
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Details</h3>
                        <p className="text-gray-600 mb-6">For business inquiries write to, call, email or WhatsApp us.</p>
                        <div className="space-y-4">
                            <div className="flex items-start"><i data-lucide="map-pin" className="w-5 h-5 text-yellow-600 mr-4 mt-1 flex-shrink-0"></i><div><h4 className="font-semibold text-gray-800">Address</h4><p className="text-gray-600">Patil and Company (P and Co)<br/>House No 45, At Navandhe, Post Jambrung<br/>Tal. Khalapur, Dist. Raigad<br/>Maharashtra - 410203</p></div></div>
                            <div className="flex items-start"><i data-lucide="mail" className="w-5 h-5 text-yellow-600 mr-4 mt-1 flex-shrink-0"></i><div><h4 className="font-semibold text-gray-800">Email</h4><a href="mailto:patilandcom@gmail.com" className="text-yellow-600 hover:text-yellow-700">patilandcom@gmail.com</a></div></div>
                            <div className="flex items-start"><i data-lucide="phone" className="w-5 h-5 text-yellow-600 mr-4 mt-1 flex-shrink-0"></i><div><h4 className="font-semibold text-gray-800">Telephone</h4><a href="tel:9823382053" className="block text-gray-600 hover:text-yellow-600">9823382053</a><a href="tel:9422094539" className="block text-gray-600 hover:text-yellow-600">9422094539</a><a href="tel:9923214165" className="block text-gray-600 hover:text-yellow-600">9923214165</a><a href="tel:9158444165" className="block text-gray-600 hover:text-yellow-600">9158444165</a></div></div>
                        </div>
                        <a href="https://wa.me/919823382053" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center w-full bg-green-500 text-white font-bold py-3 px-6 rounded-md hover:bg-green-600 transition-colors"><i data-lucide="message-circle" className="w-5 h-5 mr-3"></i>Chat on WhatsApp</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const PoliciesPage: React.FC = () => (
    <section id="policies" className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Website Policies</h2>
          <p className="text-center text-gray-500 mb-10">Last Updated: October 20, 2025</p>
          <div className="space-y-6 text-gray-700 text-left">
             <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">Acceptance of Terms</h3>
                <p>By accessing and using this website, you agree to these Website Policies. If you do not agree, please refrain from using the site.</p>
             </div>
             <hr className="border-gray-200" />
             <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">Modification of Policies</h3>
                <p>We reserve the right to update these policies at any time without prior notice. Continued use of the website implies acceptance of the updated terms.</p>
             </div>
              <hr className="border-gray-200" />
             <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">Intellectual Property</h3>
                <p>All content on this website, including text, images, and service descriptions, is the intellectual property of Patil and Company. Unauthorized use or reproduction is prohibited.</p>
             </div>
              <hr className="border-gray-200" />
             <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">Limitation of Liability</h3>
                <p>Patil and Company shall not be liable for any indirect or consequential damages arising from the use of this website or our services.</p>
             </div>
              <hr className="border-gray-200" />
             <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">Privacy Policy</h3>
                <p>We respect your privacy and are committed to protecting any personal information shared through inquiries on this site.</p>
                <div className="pl-4 mt-4 space-y-4 border-l-2 border-gray-300 ml-2">
                   <div>
                       <h4 className="text-lg font-semibold text-gray-800">Information Collection</h4>
                       <p className="text-gray-600">We may collect personal data such as names, email addresses, and phone numbers provided voluntarily by users for communication purposes.</p>
                   </div>
                   <div>
                       <h4 className="text-lg font-semibold text-gray-800">Use of Information</h4>
                       <p className="text-gray-600">Collected data will only be used to respond to inquiries or provide requested services and will not be shared with third parties without consent.</p>
                   </div>
                   <div>
                       <h4 className="text-lg font-semibold text-gray-800">Data Protection</h4>
                       <p className="text-gray-600">We implement reasonable security measures to safeguard your information against unauthorized access or breaches.</p>
                   </div>
                   <div>
                       <h4 className="text-lg font-semibold text-gray-800">Removal Requests</h4>
                       <p className="text-gray-600">Users may contact us to request deletion of their personal data at any time.</p>
                   </div>
                </div>
             </div>
              <hr className="border-gray-200" />
             <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">Use of Third-Party Logos</h3>
                <p>The logos displayed on this website are used solely to identify companies we have worked with and showcase completed projects. Their presence does not imply endorsement, sponsorship, or affiliation by the respective trademark owners. All logos remain the intellectual property of their respective owners, and if a trademark owner requests removal, we will comply promptly.</p>
             </div>
              <hr className="border-gray-200" />
             <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">Governing Law</h3>
                <p>These Website Policies are governed by Indian law. Any disputes arising from these terms shall be subject to Khalapur jurisdiction.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
);


// --- MAIN APP COMPONENT ---
declare global {
  interface Window { lucide: { createIcons: () => void; }; }
}

const App: React.FC = () => {
    // Determine the initial page from the URL hash, default to '/'
    const getInitialPage = () => {
        const hash = window.location.hash.slice(1);
        // Ensure the hash starts with a '/' for consistency
        if (hash && hash.startsWith('/')) {
            return hash;
        } else if (hash) {
            return `/${hash}`; // Add leading slash if missing
        }
        return '/'; // Default to homepage
    };

    const [currentPage, setCurrentPage] = useState(getInitialPage());

    // --- NEW: STATE FOR SPLASH SCREEN ---
    const [isSiteEntered, setIsSiteEntered] = useState(false);

    // Effect to run createIcons on initial load and page changes
    useEffect(() => {
        if (window.lucide) {
            window.lucide.createIcons();
        }
        // Dependency array includes currentPage to re-run when the page changes
    }, [currentPage, isSiteEntered]); // Re-run when site is entered as well

    // Handle hash changes for back/forward navigation
    useEffect(() => {
        const handleHashChange = () => {
            setCurrentPage(getInitialPage()); // Use the same logic to set page on hash change
        };
        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const handleNavigate = (page: string) => {
        // Update the URL hash (make sure it starts with '/')
        const targetHash = page.startsWith('/') ? page : `/${page}`;
        window.location.hash = targetHash;
        // The state will be updated automatically by the 'hashchange' event listener
        window.scrollTo(0, 0); // Scroll to top after navigation
    };

    // --- NEW: Function to handle entering the site ---
    const handleEnter = () => {
        setIsSiteEntered(true);
        // Navigate to the initial page (which might be from a hash)
        handleNavigate(getInitialPage());
    };

    const renderPage = () => {
        // Use the currentPage state which is synced with the hash
        switch (currentPage) {
            case '/':
                // Pass handleNavigate down to HomePage so Hero can use it
                return <HomePage onNavigate={handleNavigate} />;
            case '/services':
                return <ServicesPage />;
            case '/clients':
                return <ClientsPage />;
            // --- FIX 2: Added /about case ---
            case '/about': // Add this case
                return <About />; // Render the About component
            // --- PROJECTS CASE REMOVED ---
            // case '/projects':
            //     return <ProjectsPage />;
            case '/contact':
                return <ContactPage />;
            case '/policies':
                return <PoliciesPage />;
            default:
                return (
                    <div className="container mx-auto text-center py-24 px-4 min-h-screen">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
                        <p className="text-lg text-gray-600 mb-8">Sorry, the page you requested was not found.</p>
                        <a href="/" onClick={(e) => handleNavigate('/')} className="bg-yellow-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-yellow-700 transition-colors">
                            Go Back Home
                        </a>
                    </div>
                );
        }
    };

    // --- NEW: Conditional Rendering for Splash Screen ---
    if (!isSiteEntered) {
        return (
            // Splash Screen Component
            <section className="relative h-screen flex items-center justify-center text-white bg-black">
                <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
                <div className="absolute inset-0 overflow-hidden">
                    {/* Re-using the hero background image */}
                    <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-20 text-center px-4">
                    <img src={logo}
                        alt="Patil and Company Logo"
                        className="h-24 w-auto mx-auto mb-6 bg-white p-2 rounded-lg shadow-md animate-fadeInUp" // Using animation
                    />
                    <h1
                        className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight drop-shadow-lg animate-fadeInUp"
                        style={{ animationDelay: '0.2s' }}
                    >
                        Patil and Company
                    </h1>
                    <button
                        onClick={handleEnter}
                        className="inline-block bg-yellow-600 text-white px-10 py-3 rounded-md text-lg font-semibold hover:bg-yellow-700 transition-colors shadow-md animate-fadeInUp"
                        style={{ animationDelay: '0.4s' }}
                    >
                        Click to Enter
                    </button>
                </div>
            </section>
        );
    }

    // --- Original return for the main site ---
    return (
        <div className="bg-white">
            {/* Pass currentPage to Header for highlighting */}
            <Header onNavigate={handleNavigate} currentPage={currentPage} />
            <main>
                {renderPage()}
                 {/* --- TYPO REMOVED FROM HERE --- */}
            </main>
            {/* Footer also needs onNavigate */}
            <Footer onNavigate={handleNavigate} />
        </div>
    );
};

export default App;