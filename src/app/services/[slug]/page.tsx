import { servicesData } from '@/data/servicesData';
import { notFound } from 'next/navigation';

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-8 max-w-7xl mx-auto">
      <span className="inline-block px-3 py-1 mb-6 text-[10px] font-label uppercase tracking-[0.3em] bg-primary/10 text-primary border border-primary/20 rounded-sm">
        Service Detail
      </span>
      <h1 className="font-headline text-5xl font-bold text-white mb-8">{service.title}</h1>
      {service.content}
    </div>
  );
}
