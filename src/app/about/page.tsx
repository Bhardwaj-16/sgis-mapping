export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-headline text-5xl font-bold text-white">
          About Us
        </h1>

        <div className="w-20 h-1 bg-blue-500 rounded-full mt-4 mb-10" />

        <div className="bg-surface/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
          <div className="font-body text-on-surface-variant text-lg leading-8 space-y-6">
            <p>
              We are a dedicated GIS services provider with strong experience in delivering high-quality geospatial
              solutions across various domains.
            </p>

            <p>
              Our team consists of skilled professionals with hands-on expertise
              in industry-leading software’s such as ArcGIS, MicroStation and AutoCAD etc.
            </p>

            <p>
              Our team ensures accuracy, consistency, and timely delivery by following standard GIS workflows and
              quality assurance practices.
            </p>

            <p>
              With a focus on client requirements, we provide customized solutions that
              support planning, analysis, and decision-making.
            </p>

            <p>
              We are committed to delivering reliable and cost-effective GIS services, building long-term
              relationships with our clients through quality and trust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}