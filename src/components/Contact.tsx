'use client';

import { MapPin, Headset } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage(null);

    const form = e.currentTarget;
    const firstName = (form.elements.namedItem('firstName') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const subject = (form.elements.namedItem('subject') as HTMLSelectElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const payload = {
      firstName,
      email,
      subject,
      message,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log('API response:', data);

      if (data.success) {
        setSubmitStatus('success');
        form.reset();
      } else {
        console.error('API Error:', data.message, data.errors);
        
        // Format validation errors into a single string to display
        if (data.errors && Object.keys(data.errors).length > 0) {
          const errorMsg = Object.values(data.errors).join(' ');
          setErrorMessage(errorMsg);
        } else {
          setErrorMessage(data.message || 'Something went wrong.');
        }
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setErrorMessage('Network error. Please try again.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-surface" id="contact-us">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="font-headline text-5xl md:text-6xl font-bold text-white mb-8">
              Ready to <span className="text-gradient">Scale</span> Your Vision?
            </h2>
            <p className="font-body text-on-surface-variant text-lg mb-12 leading-relaxed max-w-lg">
              Schedule a consultation with our senior analysts to discuss how SGIS Mapping can enhance your project outcomes.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0 border border-outline-variant/10">
                  <Headset className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-headline text-white font-bold text-lg">24/7 Strategic Support</h4>
                  <p className="font-body text-on-surface-variant text-sm mt-2 leading-relaxed">
                    Direct access to technical leads for enterprise-tier partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-surface-container-low p-10 rounded-xl border border-outline-variant/5 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block font-label text-xs uppercase tracking-widest text-outline-variant mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full bg-surface-container-highest border border-transparent focus:border-primary/50 focus:ring-1 focus:ring-primary text-white p-4 rounded-lg transition-all outline-none" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-label text-xs uppercase tracking-widest text-outline-variant mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    className="w-full bg-surface-container-highest border border-transparent focus:border-primary/50 focus:ring-1 focus:ring-primary text-white p-4 rounded-lg transition-all outline-none" 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block font-label text-xs uppercase tracking-widest text-outline-variant mb-2">Subject</label>
                <select 
                  id="subject"
                  name="subject"
                  className="w-full bg-surface-container-highest border border-transparent focus:border-primary/50 focus:ring-1 focus:ring-primary text-white p-4 rounded-lg transition-all outline-none appearance-none"
                >
                  <option value="Service Required">--Service Required--</option>
                  <option value="Aerial Triangulation">Aerial Triangulation</option>
                  <option value="Digital Photogrammetry">Digital Photogrammetry</option>
                  <option value="Ortho Processing">Ortho Processing</option>
                  <option value="LiDAR Processing">LiDAR Processing</option>
                  <option value="3D Modeling">3D Modeling</option>
                  <option value="GIS Mobile Application">GIS Mobile Application</option>
                  <option value="Utility Mapping">Utility Mapping</option>
                  <option value="GIS/CAD Services">GIS/CAD Services</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block font-label text-xs uppercase tracking-widest text-outline-variant mb-2">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  className="w-full bg-surface-container-highest border border-transparent focus:border-primary/50 focus:ring-1 focus:ring-primary text-white p-4 rounded-lg resize-none transition-all outline-none" 
                  rows={5}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-5 bg-gradient-to-r from-primary to-primary-dim text-on-primary font-bold font-headline uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-95 transition-all rounded-lg disabled:opacity-70 disabled:hover:scale-100"
              >
                {isSubmitting ? 'Sending...' : 'Submit Request'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-tertiary text-sm text-center mt-4 font-body">Thank you! Your message has been sent successfully.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm text-center mt-4 font-body">
                  {errorMessage || 'Something went wrong. Please try again later.'}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
