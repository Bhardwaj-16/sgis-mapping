"use client";

import { ArrowRight } from "lucide-react";
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-surface">
      <div className="absolute inset-0 z-0">
        <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-50"
      >
        <source
          src="https://user-cdn.hackclub-assets.com/019ec58f-da42-72f1-a858-80a1fd4c9302/untitled_design_.mp4__720p_.mp4"
          type="video/mp4"
        />
      </video>
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
      </div>

      <div className="relative z-10 flex h-full flex-col items-start justify-center px-8 max-w-7xl mx-auto w-full pointer-events-none">
        <div className="max-w-4xl pointer-events-auto">
          <span className="inline-block px-3 py-1 mb-6 text-[10px] font-label uppercase tracking-[0.3em] bg-primary/10 text-primary border border-primary/20 rounded-sm">
            Expert Mapping Solutions
          </span>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter text-white mb-8">
            Your Vision, Our <br className="hidden md:block" />
            <span className="text-gradient">Mapping Expertise</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
            Precision geospatial solutions from aerial to ground level. We bridge the gap between abstract coordinate systems and real-world strategic decisions.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link href="#services" className="px-10 py-4 bg-gradient-to-r from-primary to-primary-dim text-on-primary font-bold font-headline uppercase tracking-widest rounded-lg flex items-center gap-3 group hover:scale-[1.02] transition-transform">
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
