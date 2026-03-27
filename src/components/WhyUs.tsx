import { ShieldCheck } from 'lucide-react';

export default function WhyUs() {
  return (
    <section className="py-24 bg-surface-container-low" id="why-us">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-4">The SGIS Mapping Advantage</h2>
          <p className="font-body text-on-surface-variant text-lg">Why industry leaders trust our geospatial intelligence.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large Feature */}
          <div className="md:col-span-2 bg-surface p-12 relative overflow-hidden group rounded-xl border border-outline-variant/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 transition-colors group-hover:bg-primary/10"></div>
            <h3 className="font-headline text-3xl font-bold text-white mb-6">Technical Superiority</h3>
            <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-12 max-w-xl">
              We employ cutting-edge sensors and proprietary processing algorithms to deliver sub-centimeter accuracy, ensuring your foundational data is flawless.
            </p>
            <div className="flex items-center gap-4 text-tertiary">
              <span className="font-headline font-bold uppercase tracking-widest text-sm">Precision Engineering</span>
              <div className="h-px w-12 bg-tertiary"></div>
            </div>
          </div>
          
          {/* Highlight Feature */}
          <div className="bg-gradient-to-br from-primary-dim to-primary p-12 flex flex-col justify-end rounded-xl shadow-2xl shadow-primary/10">
            <ShieldCheck className="text-on-primary w-16 h-16 mb-8 stroke-[1.5]" />
            <h3 className="font-headline text-2xl text-on-primary font-bold mb-4">Global Compliance</h3>
            <p className="font-body text-on-primary/90 text-sm leading-relaxed">
              Meeting the highest international standards for data security, privacy, and geospatial accuracy in every jurisdiction we operate.
            </p>
          </div>
          
          {/* Bottom Row Features */}
          <div className="md:col-span-3 grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-high p-10 border-t-2 border-tertiary/20 rounded-b-xl rounded-t-sm hover:bg-surface-bright transition-colors">
              <h4 className="font-headline text-white text-xl font-bold mb-4">Custom Integrations</h4>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                Seamlessly blending our geospatial data into your existing enterprise workflows, CAD software, and GIS platforms.
              </p>
            </div>
            <div className="bg-surface-container-high p-10 border-t-2 border-tertiary/20 rounded-b-xl rounded-t-sm hover:bg-surface-bright transition-colors">
              <h4 className="font-headline text-white text-xl font-bold mb-4">Rapid Deployment</h4>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                Agile mobilization of aerial and ground crews globally, ensuring your time-sensitive projects stay on schedule.
              </p>
            </div>
            <div className="bg-surface-container-high p-10 border-t-2 border-tertiary/20 rounded-b-xl rounded-t-sm hover:bg-surface-bright transition-colors">
              <h4 className="font-headline text-white text-xl font-bold mb-4">Domain Expertise</h4>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                Decades of combined experience across civil engineering, urban planning, environmental monitoring, and resource management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
