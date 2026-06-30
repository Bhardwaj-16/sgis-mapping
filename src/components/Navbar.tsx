'use client';

import Link from 'next/link';
import { Phone, Mail, ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';

const services = [
  { name: 'GIS/CAD Services', slug: 'gis-cad-services' },
  { name: 'LiDAR Processing', slug: 'lidar-processing' },
  { name: 'Aerial Triangulation', slug: 'aerial-triangulation' },
  { name: 'Digital Photogrammetry', slug: 'digital-photogrammetry' },
  { name: 'Ortho Processing', slug: 'ortho-processing' },
  { name: '3D Modeling', slug: '3d-modeling' },
  { name: 'Utility Mapping', slug: 'utility-mapping' },
  { name: 'GIS Mobile Application', slug: 'gis-mobile-applications' },
];

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex flex-col w-full bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_32px_64px_rgba(0,102,255,0.08)]">
      {/* Top Bar */}
      <div className="h-10 bg-surface-container-lowest flex items-center justify-between px-4 md:px-8 border-b border-outline-variant/10">
        <div className="flex items-center gap-4 md:gap-6">
          <a href="tel:+91 8309601671" className="flex items-center gap-2 hover:text-tertiary transition-colors group">
            <Phone className="w-3 h-3 text-tertiary group-hover:scale-110 transition-transform" />
            <span className="font-label text-xs tracking-wide text-on-surface-variant group-hover:text-on-surface transition-colors">+91 8309601671</span>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@sgismapping.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-tertiary transition-colors group">
            <Mail className="w-3 h-3 text-tertiary group-hover:scale-110 transition-transform" />
            <span className="font-label text-xs tracking-wide text-on-surface-variant group-hover:text-on-surface transition-colors">info@sgismapping.com</span>
          </a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-outline-variant">Geospatial Precision Intelligence</span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 h-20">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white font-headline">
          SGIS Mapping
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <Link href="/" className="font-headline tracking-tight text-sm uppercase text-on-surface-variant hover:text-white transition-colors">
            Home
          </Link>
          <div
            className="relative group h-full flex items-center"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="font-headline tracking-tight text-sm uppercase text-on-surface-variant hover:text-white transition-colors flex items-center gap-1 h-20">
              Services <ChevronDown className="w-4 h-4" />
            </button>

            {/* Dropdown */}
            <div className={`absolute top-20 left-1/2 -translate-x-1/2 w-[600px] bg-surface-container-high border border-outline-variant/20 rounded-xl shadow-2xl transition-all duration-300 grid grid-cols-2 p-4 gap-2 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="px-4 py-3 rounded-lg hover:bg-surface-bright text-sm font-body text-on-surface-variant hover:text-white transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/about" className="font-headline tracking-tight text-sm uppercase text-on-surface-variant hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="/why-us" className="font-headline tracking-tight text-sm uppercase text-on-surface-variant hover:text-white transition-colors">
            Why Us
          </Link>
          <Link href="/#contact-us" className="font-headline tracking-tight text-sm uppercase text-on-surface-variant hover:text-white transition-colors">
            Contact Us
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/#contact-us" className="hidden sm:block px-5 py-2 text-xs font-headline uppercase tracking-widest bg-gradient-to-r from-primary to-primary-dim text-on-primary font-bold hover:scale-[1.02] active:scale-95 transition-all rounded-md">
            Contact Us
          </Link>
          <button 
            className="lg:hidden text-on-surface-variant hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-surface-container-high border-b border-outline-variant/20 flex flex-col px-4 py-4 shadow-2xl max-h-[calc(100vh-120px)] overflow-y-auto">
          <div className="flex flex-col gap-2">
            <button 
              className="flex items-center justify-between px-4 py-3 font-headline tracking-tight text-sm uppercase text-on-surface-variant hover:text-white hover:bg-surface-bright rounded-lg transition-colors"
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            >
              Services <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isMobileServicesOpen && (
              <div className="flex flex-col pl-8 pr-4 py-2 gap-2 border-l-2 border-outline-variant/10 ml-4 mb-2">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="py-2 text-sm font-body text-on-surface-variant hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}

            <Link 
              href="/about" 
              className="px-4 py-3 font-headline tracking-tight text-sm uppercase text-on-surface-variant hover:text-white hover:bg-surface-bright rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/why-us" 
              className="px-4 py-3 font-headline tracking-tight text-sm uppercase text-on-surface-variant hover:text-white hover:bg-surface-bright rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Why Us
            </Link>
            <Link 
              href="/#contact-us" 
              className="px-4 py-3 font-headline tracking-tight text-sm uppercase text-on-surface-variant hover:text-white hover:bg-surface-bright rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            
            <div className="h-px bg-outline-variant/10 my-2"></div>
            
            <button className="px-4 py-3 font-headline tracking-tight text-sm uppercase text-on-surface-variant hover:text-white hover:bg-surface-bright rounded-lg transition-colors text-left">
              Login
            </button>
            <Link 
              href="/#contact-us" 
              className="mt-2 px-4 py-3 text-center font-headline uppercase tracking-widest bg-gradient-to-r from-primary to-primary-dim text-on-primary font-bold rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
