import Link from 'next/link';
import { Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-16 px-8 border-t border-outline-variant/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <div className="text-xl font-black text-white mb-4 font-headline">SGIS Mapping</div>
          <p className="font-body text-sm text-on-surface-variant max-w-xs leading-relaxed">
            © {new Date().getFullYear()} SGIS Mapping Services. All rights reserved.
          </p>
        </div>
        
        <div>
          <h4 className="font-headline font-bold text-white text-md mb-6 uppercase tracking-wider">Services</h4>
          <ul className="space-y-3">
            <li><Link href="/services/photogrammetry" className="font-body text-sm text-on-surface-variant hover:text-white hover:translate-x-1 transition-transform duration-200 block">Photogrammetry</Link></li>
            <li><Link href="/services/lidar-processing" className="font-body text-sm text-on-surface-variant hover:text-white hover:translate-x-1 transition-transform duration-200 block">LiDAR Analysis</Link></li>
            <li><Link href="/services/3d-modeling" className="font-body text-sm text-on-surface-variant hover:text-white hover:translate-x-1 transition-transform duration-200 block">Urban Planning</Link></li>
            <li><Link href="/services/gis-cad-services" className="font-body text-sm text-on-surface-variant hover:text-white hover:translate-x-1 transition-transform duration-200 block">Data Processing</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-headline font-bold text-white text-md mb-6 uppercase tracking-wider">Company</h4>
          <ul className="space-y-3">
            <li><Link href="/about" className="font-body text-sm text-on-surface-variant hover:text-white hover:translate-x-1 transition-transform duration-200 block">About Us</Link></li>
            <li><Link href="/team" className="font-body text-sm text-on-surface-variant hover:text-white hover:translate-x-1 transition-transform duration-200 block">Our Team</Link></li>
            <li><Link href="/career" className="font-body text-sm text-on-surface-variant hover:text-white hover:translate-x-1 transition-transform duration-200 block">Career</Link></li>
            <li><Link href="/#contact-us" className="font-body text-sm text-on-surface-variant hover:text-white hover:translate-x-1 transition-transform duration-200 block">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-headline font-bold text-white text-md mb-6 uppercase tracking-wider">Legal</h4>
          <ul className="space-y-3">
            <li><Link href="/privacy" className="font-body text-sm text-on-surface-variant hover:text-white hover:translate-x-1 transition-transform duration-200 block">Privacy Policy</Link></li>
            <li><Link href="/terms" className="font-body text-sm text-on-surface-variant hover:text-white hover:translate-x-1 transition-transform duration-200 block">Terms of Service</Link></li>
            <li><Link href="/compliance" className="font-body text-sm text-on-surface-variant hover:text-white hover:translate-x-1 transition-transform duration-200 block">Compliance</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-sm text-on-surface-variant">© {new Date().getFullYear()} SGIS Mapping Services. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
