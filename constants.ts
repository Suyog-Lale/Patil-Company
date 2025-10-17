
import { NavLink, ServiceCategory, Client, Project, ProjectCategory } from './types';

export const LOGO_BASE64 = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAASUkqAAgAAAABABIBAwABAAAAAQAAADEBAgAHAAAAPgAAABICAwACAAAAAgACAGmHBAABAAAARgAAAAAAAABgAAAAAQAAAGAAAAABAAAAUGF0aWwgYW5kIENvbXBhbnkgbG9nbyBpbGx1c3RyYXRpb24uAAAAAABQaXhlbHMucmVhbGlzdGljIHN0b2NrIHBob3RvcyBieSBQaXhlbHMgaXMgZnJlZSB0byB1c2UuAACKAABQAAAAZAAAAAEAAFAAAABkAAAAAQADAGAAQwAAAAACAAgACgAAAAEAAAA3AAMACgAAAAEAAABCAAYACgAAAAEAAABOAAcACgAAAAEAAABWAAgACgAAAAEAAABeAAMACgAAAAEAAABqAAgACgAAAAEAAABsAAYACgAAAAEAAABuAAYACgAAAAEAAAB2AAYACgAAAAEAAAByAAYACgAAAAEAAAB6AAYACgAAAAEAAACCAAYACgAAAAEAAACGAAYACgAAAAEAAACKAAYACgAAAAEAAACQAAYACgAAAAEAAACWAAYACgAAAAEAAACeAAYACgAAAAEAAACiAAYACgAAAAEAAACqAAYACgAAAAEAAACuAAYACgAAAAEAAAC2AAYACgAAAAEAAAC+AAYACgAAAAEAAADB/////+EAh2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpjcms9Imh0dHA6Ly9ucy5hZG9iZS5jb20vY2FtZXJhLXJhdy1zZXR0aW5ncy8xLjAvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgY3JzOlZlcnNpb249IjExLjQiIGNyczpQcm9jZXNzVmVyc2lvbj0iMTEuNCIgY3JzOlJhd0ZpbGVOYW1lPSJsb2dvXzQgMS5qcGciIGNyczpXaGl0ZUJhbGFuY2U9IkN1c3RvbSIgY3JzOlRlbXBlcmF0dXJlPSI1MDAwIiBjcnM6VGludD0iKzEwIiBjcnM6RXhwb3N1cmUyMDEyPSIwLjAwIiBjcnM6Q29udHJhc3QyMDEyPSIwIiBjcnM6SGlnaGxpZ2h0czIwMTI9IjAiIGNyczpTaGFkb3dzMjAxMj0iMCIgY3JzOldoaXRlczIwMTI9IjAiIGNyczpCbGFja3MyMDEyPSIwIiBjcnM6Q2xhcml0eTIwMTI9IjAiIGNyczpEZWhhemU9IjAiIGNyczpWaWJyYW5jZT0iMCIgY3JzOlNhdHVyYXRpb249IjAiIGNyczpQb3N0Q3JvcFZpZ25ldHRlQW1vdW50PSIwIiBjcnM6U2hhcnBlblJhdGlvPSIrNDAiIGNyczpTaGFycGVuUmFkaXVzPSIrMS4wIiBjcnM6U2hhcnBlbkRldGFpbD0iMjUiIGNyczpTaGFycGVuTWFza2luZz0iMCIgY3JzOk5vaXNlUmVkdWN0aW9uTHVtaW5hbmNlPSIwIiBjcnM6THVtaW5hbmNlU21vb3RobmVzcz0iMCIgY3JzOk5vaXNlUmVkdWN0aW9uQ29sb3I9IjI1IiBjcnM6Q29sb3JOb2lzZVJlZHVjdGlvblNtb290aG5lc3M9IjUwIiBjcnM6Q29sb3JHcmFkZU1peHR1cmVBcXVhPSIwIiBjcnM6Q29sb3JHcmFkZU1peHR1cmVCbHVlPSIwIiBjcnM6Q29sb3JHcmFkZU1peHR1cmVHcmVlbj0iMCIgY3JzOkNvbG9yR3JhZGVNaXh0dXJlUmVkPSIwIiBjcnM6Q29sb3JHcmFkZU1peHR1cmVZZWxsb3c9IjAiIGNyczpHcmFpbkFtb3VudD0iMCIgY3JzOkxlbnNMaWdodGVuaW5nQ29ycmVjdGlvbnNBbHJlYWR5QXBwbGllZD0iVHJ1ZSIgY3JzOkxlbnNQcm9maWxlRW5hYmxlPSIxIiBjcnM6QXV0b0xhdGVyYWxDQT0iMCIgY3JzOkRlZnJpbmdlR3JlZW5BbW91bnQ9IjAiIGNyczpEZWZyaW5nZUdyZWVuSHVlTG89IjQwIiBjcnM6RGVmcmluZ2VHcmVlbkh1ZUhpPSI2MCIgY3JzOkRlZnJpbmdlUHVycGxlQW1vdW50PSIwIiBjcnM6RGVmcmluZ2VQdXJwbGVIdWVMbz0iMzAiIGNyczpEZWZyaW5nZVB1cnBsZUh1ZUhpPSI3MCIgcGhvdG9zaG9wOkxlZ2FjeVdyaXR0ZW49IlRydWUiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIwLjAgKE1hY2ludG9zaCkiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDYtMDhUMTI6MzA6MDktMDQ6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YTQ0NTc5OGQtODU1Mi00NjQzLTliYzUtMmY5YzA5YWRhYzMyIiB4bXBNTTpEcml2ZW5Gcm9tPSJ4bXAubXA6ZDYwZGY2MTUtNGE1OS00YjVmLWE3OGEtOTk4MGFhMDllNTRlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjEzYjk4NDQwLTVmMDItNGZjZi1iYTcxLWJiMWNhM2ZiOTkwOCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjEzYjk4NDQwLTVmMDItNGZjZi1iYTcxLWJiMWNhM2ZiOTkwOCI+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+UGF0aWwgYW5kIENvbXBhbnkgbG9nbyBpbGx1c3RyYXRpb24uPC9yZGY6bGk+IDwvcmRmOkFsdD4gPC9kYzp0aXRsZT4gPGRjOnJpZ2h0cz4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+UGl4ZWxzLnJlYWxpc3RpYyBzdG9jayBwaG90b3MgYnkgUGl4ZWxzIGlzIGZyZWUgdG8gdXNlLjwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6cmlnaHRzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxM2I5ODQ0MC01ZjAyLTRmY2YtYmE3MS1iYjFjYTNmYjk5MDgiIHN0RXZ0OndoZW49IjIwMjAtMDYtMDhUMTI6MzA6MDktMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMC4wIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9qcGVnIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpocGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9qcGVnIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphNDQ1Nzk4ZC04NTUyLTQ2NDMtOWJjNS0yZjljMDlhZGFjMzIiIHN0RXZ0OndoZW49IjIwMjAtMDYtMDhUMTI6MzA6MDktMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMC4wIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg-';

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
    { name: 'AM/NS India', logo: 'https://seeklogo.com/images/A/arcelormittal-nippon-steel-logo-A9A4308553-seeklogo.com.png', type: 'completed' },
    { name: 'Pepsico International - Frito Lay', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/PepsiCo_logo.svg/1200px-PepsiCo_logo.svg.png', type: 'completed' },
    { name: 'H & R. Johnson (I.) Limited', logo: 'https://www.hrjohnsonindia.com/assets/images/logo.png', type: 'completed' },
    { name: 'Grindwell - Nortan', logo: 'https://www.grindwellnorton.co.in/sites/gno.in/files/GNO-color.png', type: 'completed' },
    { name: 'Alta Laboratories Ltd', type: 'completed' },
    { name: 'Colt Cables Limited', type: 'completed' },
    { name: 'Indo Rama Cements Ltd', type: 'completed' },
    { name: 'Ispat Industries Limited', type: 'completed' },
    { name: 'Khopoli Municipal Council', type: 'completed' },
    { name: 'Krantivan', type: 'completed' },
    { name: 'Lona Industries Limited', type: 'completed' },
    { name: 'M/s East Coast Constructions Limited', type: 'completed' },
    { name: 'M/s Penguin Petrochemicals Private Limited', type: 'completed' },
    { name: 'M/s Wartsila India Limited', type: 'completed' },
    { name: 'Neelam Power Plant', type: 'completed' },
    { name: 'Ravin Cables Limited', type: 'completed' },
    { name: 'Renuka Sugar', type: 'completed' },
    { name: 'SKI Carbon', type: 'completed' },
    { name: 'Simplex Concrete Piles India Limited', type: 'completed' },
    { name: 'TTP Ltd', type: 'completed' },
    { name: 'Uttam Galva Steels Limited', type: 'completed' },
    { name: 'AM/NS', type: 'ongoing' },
    { name: 'Krantivan', type: 'ongoing' },
    { name: 'SKI Carbon', type: 'ongoing' },
];

export const PROJECTS: Project[] = [
    { id: 1, title: 'AM/NS Steel Plant Expansion', description: 'Ongoing structural and repair work for a major steel manufacturing facility.', category: 'Industrial', imageUrl: 'https://images.unsplash.com/photo-1581092446347-a85c4141d583?q=80&w=2070&auto=format&fit=crop' },
    { id: 2, title: 'Corporate Office Renovation', description: 'Complete interior and exterior overhaul for a commercial office building.', category: 'Commercial', imageUrl: 'https://images.unsplash.com/photo-1519994994-9128a3f68058?q=80&w=1974&auto=format&fit=crop' },
    { id: 3, title: 'Luxury Residential Villa', description: 'Ground-up construction of a high-end residential property with custom landscaping.', category: 'Residential', imageUrl: 'https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?q=80&w=1974&auto=format&fit=crop' },
    { id: 4, title: 'Industrial Warehouse Flooring', description: 'Installation of heavy-duty epoxy flooring for a high-traffic logistics center.', category: 'Industrial', imageUrl: 'https://images.unsplash.com/photo-1621947081720-869708235779?q=80&w=2070&auto=format&fit=crop' },
    { id: 5, title: 'Retail Space Build-Out', description: 'Custom interior fit-out for a new retail storefront in a shopping complex.', category: 'Commercial', imageUrl: 'https://images.unsplash.com/photo-1600880292210-859b92226bf2?q=80&w=1974&auto=format&fit=crop' },
    { id: 6, title: 'High-Rise Facade Painting', description: 'Specialized painting and waterproofing services for a multi-story residential tower.', category: 'Residential', imageUrl: 'https://images.unsplash.com/photo-1580984932353-097a8a25a0da?q=80&w=1974&auto=format&fit=crop' },
];
