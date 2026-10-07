import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Users, 
  MapPin, 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle,
  FileCheck,
  Calendar,
  MessageCircle
} from 'lucide-react';
import { FARM_INFO } from '../data/farmData';

export default function AboutPage({ onOpenBooking }) {
  return (
    <div className="about-page-view">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="section-tag section-tag-green">
            <ShieldCheck size={12} /> Modern Dairy Husbandry
          </span>
          <h1 className="page-headline">About Classic Dairy Farm Ltd</h1>
          <p className="page-subline">
            Pioneering hygienic zero-grazing, pedigree genetics, and science-backed cow nutrition in Nkubu, Meru County.
          </p>
        </div>
      </section>

      {/* Farm Story Section */}
      <section className="section">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-text">
              <span className="section-tag">Our Mission</span>
              <h2 className="section-title">Demonstrating Profitable, High-Yield Dairy in Mount Kenya</h2>
              <p className="text-secondary mb-3 leading-relaxed">
                Classic Dairy Farm Ltd was founded in Nkubu with a single guiding mission: to demonstrate that high-yielding dairy farming in Kenya is not a matter of luck, but a discipline of nutrition, hygiene, and cow comfort.
              </p>
              <p className="text-secondary mb-3 leading-relaxed">
                Many dairy enterprises across Meru struggle with feed costs eating up their milk revenue, cows staying open past 150 days, and chronic mastitis draining yields. By adopting a Total Mixed Ration (TMR) feeding model, free-stall zero-grazing housing, and strict cold-chain refrigeration, our farm maintains consistent production regardless of wet or dry seasons.
              </p>
              <p className="text-secondary leading-relaxed">
                Today, our farm serves both as a trusted source of pure whole milk for Meru residents and a living classroom where thousands of visiting farmers learn practical, repeatable techniques.
              </p>

              {/* Owner Placeholders Transparency Box */}
              <div className="owner-placeholder-banner mt-4">
                <strong>Owner Details Verification Status:</strong>
                <ul className="text-xs mt-1 space-y-1">
                  <li>• Herd Size: <em>{FARM_INFO.ownerPlaceholders.herdSize}</em></li>
                  <li>• Established: <em>{FARM_INFO.ownerPlaceholders.yearsInOperation}</em></li>
                  <li>• Herd Breeds: <em>{FARM_INFO.ownerPlaceholders.breedsKept}</em></li>
                  <li>• Daily Milk Yield: <em>{FARM_INFO.ownerPlaceholders.dailyMilkYield}</em></li>
                </ul>
              </div>
            </div>

            <div className="about-story-media">
              <div className="card about-media-card">
                <img 
                  src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80" 
                  alt="Healthy dairy cattle feed area"
                  className="about-card-img"
                />
                <div className="owner-placeholder-banner mt-2">
                  <strong>Photo Notice:</strong> Real photography of the Nkubu farm facility and herd to replace temporary reference images.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Farm Practices */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-green">
              <Sparkles size={12} /> Standard Operating Procedures
            </span>
            <h2 className="section-title">Our 5 Pillars of Farm Husbandry</h2>
            <p className="section-subtitle">
              The operational disciplines behind our milk purity and verified 4.7-star visitor rating.
            </p>
          </div>

          <div className="pillars-grid">
            <div className="card pillar-card">
              <span className="pillar-num">01</span>
              <h4>Cow Comfort & Bedding</h4>
              <p>
                Spacious cubicles bedded with clean sand and rubber mattresses. High ridge-ventilation ceilings keep ammonia out and cows resting 14+ hours daily.
              </p>
            </div>

            <div className="card pillar-card">
              <span className="pillar-num">02</span>
              <h4>Total Mixed Ration (TMR)</h4>
              <p>
                Calculated Dry Matter intake combining high-energy maize silage, cured Rhodes grass fibre, and balanced dairy concentrates with bypass fat.
              </p>
            </div>

            <div className="card pillar-card">
              <span className="pillar-num">03</span>
              <h4>Rigorous Mastitis Control</h4>
              <p>
                Pre-dipping, single-use udder towels, and post-dipping teat sealant on every milking. Routine California Mastitis Test (CMT) screening twice monthly.
              </p>
            </div>

            <div className="card pillar-card">
              <span className="pillar-num">04</span>
              <h4>Instant &lt;4°C Bulk Chilling</h4>
              <p>
                Milk flows through sanitised food-grade stainless piping into our refrigerated bulk milk tank within 30 minutes of extraction. Zero preservatives.
              </p>
            </div>

            <div className="card pillar-card">
              <span className="pillar-num">05</span>
              <h4>Pedigree Sire Selection</h4>
              <p>
                All breeding uses certified high-reliability artificial insemination (AI) sires selected for daughter milk yield, udder attachment, and foot angle.
              </p>
            </div>

            <div className="card pillar-card">
              <span className="pillar-num">06</span>
              <h4>Biosecurity Gate Protocols</h4>
              <p>
                Footbaths at the farm gate, vehicle tire sprays, and isolated quarantine cubicles for newly introduced heifers ensure herd disease protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Regulatory Standards */}
      <section className="section">
        <div className="container">
          <div className="card certifications-card">
            <div className="flex items-center gap-2 mb-2">
              <FileCheck size={24} className="text-accent" />
              <h3 className="text-xl font-bold">Certifications & Regulatory Alignment</h3>
            </div>
            <p className="text-secondary text-sm mb-3">
              We operate in full alignment with Kenyan agricultural, dairy, and veterinary statutory authorities.
            </p>

            <div className="cert-items-grid">
              <div className="cert-item">
                <span className="badge badge-placeholder">Pending Upload</span>
                <h4>Kenya Dairy Board (KDB) Registration</h4>
                <p>Licensed dairy production and commercial cold-chain distribution adherence.</p>
              </div>

              <div className="cert-item">
                <span className="badge badge-placeholder">Pending Upload</span>
                <h4>Public Health & Food Hygiene Permits</h4>
                <p>Nkubu Sub-County public health inspection compliance for dairy processing.</p>
              </div>

              <div className="cert-item">
                <span className="badge badge-placeholder">Pending Upload</span>
                <h4>Veterinary Movement & Transit Clearance</h4>
                <p>Sub-County Director of Veterinary Services transit health certification for breeding stock.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit the Farm CTA */}
      <section className="section section-alt text-center">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-bold mb-3">Experience Our Zero-Grazing Unit in Person</h2>
          <p className="text-secondary mb-4">
            Book an on-site masterclass, inspect our silage pits, or discuss herd breeding with our farm manager in Nkubu.
          </p>
          <div className="flex justify-center gap-3">
            <button onClick={() => onOpenBooking()} className="btn btn-primary btn-lg">
              <Calendar size={18} />
              <span>Book a Farm Training Visit</span>
            </button>
            <a 
              href={`https://wa.me/${FARM_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Classic Dairy Farm, I would like to schedule a private advisory consultation on my farm setup.')}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
