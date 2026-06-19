import { Globe, Mountain, Layers, Activity, Map, Sun, Box, Satellite, Database, MapPin, Ruler, Users } from 'lucide-react';

const services = [
  {
    title: 'Aerial Triangulation',
    description: 'Precision control for photogrammetric mapping across vast terrains.',
    icon: Globe,
  },
  {
    title: 'Digital Photogrammetry',
    description: 'Extracting 3D features and generating highly precise digital topographic maps.',
    icon: Globe,
  },
  {
    title: 'Ortho Processing',
    description: 'Creation of geometrically correct true orthophotos and ortho-rectified images.',
    icon: Globe,
  },
  {
    title: 'LiDAR Processing',
    description: 'Advanced point cloud analysis for high-fidelity 3D environments.',
    icon: Sun,
  },
  {
    title: '3D Modeling',
    description: 'Photorealistic and semantic city modeling for urban simulations.',
    icon: Box,
  },
  {
    title: 'GIS Mobile Application',
    description: 'Developing intuitive mobile solutions for remote field operations and data collection.',
    icon: Box,
  },
  {
    title: 'Utility Mapping',
    description: 'Accurately identifying and mapping subsurface utilities for safe construction.',
    icon: Box,
  },
  {
    title: 'GIS/CAD Services',
    description: 'Comprehensive drafting and geographic information system management.',
    icon: Database,
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-surface" id="services">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-6">Expert GIS Solutions</h2>
            <p className="font-body text-on-surface-variant text-lg leading-relaxed">
              Our suite of geospatial services is designed for precision, leveraging state-of-the-art technology to map every dimension of the physical world.
            </p>
          </div>
          <div className="text-right hidden md:block">
            <span className="font-headline text-8xl font-black text-surface-container-high select-none">01</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-outline-variant/10 overflow-hidden border border-outline-variant/10 rounded-xl">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group bg-surface-container-high p-8 hover:bg-surface-bright transition-all duration-300 service-card-border relative overflow-hidden">
                <Icon className="text-tertiary mb-6 w-10 h-10 stroke-[1.5]" />
                <h3 className="font-headline text-xl text-white mb-4 font-semibold">{service.title}</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
