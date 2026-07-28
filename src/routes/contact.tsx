import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionTitle } from "@/components/site/Section";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Swastha NavJeevan" },
      { name: "description", content: "Reach out to the Swastha NavJeevan team at BAHRC, ISKCON Navi Mumbai." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="We are here for you."
        lead="Whether you are a patient, caregiver, donor, or partner — one conversation can change everything."
        image="/assets/cta-lamp.jpg"
      />

      <Section tone="white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Info */}
            <div>
              <SectionTitle
                eyebrow="BAHRC, ISKCON Navi Mumbai"
                title="Where Healing Happens"
              />

              <div className="mt-10 space-y-10">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      Bhaktivedanta Ayurvedic Healing & Research Centre (BAHRC)<br />
                      ISKCON Navi Mumbai, Sector 34, Kharghar<br />
                      Navi Mumbai, Maharashtra 410210
                    </div>
                    <div className="text-xs text-teal-600 mt-2">19.0274° N, 73.0650° E</div>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <a href="tel:+912200000000" className="block text-lg hover:text-teal-600 transition-colors">
                      +91 22 0000 0000
                    </a>
                    <div className="text-xs text-muted-foreground mt-1">Patient Care (9 AM – 6 PM)</div>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <a 
                      href="https://wa.me/919167484521" 
                      target="_blank"
                      className="inline-flex items-center gap-2 text-lg text-green-600 hover:underline"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:care@swasthanavjeevan.org" className="block hover:text-teal-600 transition-colors">
                      care@swasthanavjeevan.org
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Map + Form */}
            <div className="space-y-8">
              {/* Google Map Embed - Updated with exact coordinates */}
              <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.123456789!2d73.0650!3d19.0274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAxJzM4LjYiTiA3M8KwMDMnNTQuMCJF!5e0!3m2!1sen!2sin!4v1720000000000"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BAHRC ISKCON Navi Mumbai Location"
                />
              </div>

              {/* Quick Contact Form */}
              <div className="bg-white border border-gray-100 rounded-3xl p-8">
                <h3 className="font-semibold text-xl mb-6">Send us a message</h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Your name" className="rounded-lg border px-4 py-3" required />
                    <input type="tel" placeholder="Phone number" className="rounded-lg border px-4 py-3" />
                  </div>
                  <input type="email" placeholder="Email address" className="w-full rounded-lg border px-4 py-3" required />
                  <textarea 
                    rows={4} 
                    placeholder="How can we help you today?" 
                    className="w-full rounded-lg border px-4 py-3 resize-y"
                    required
                  />
                  <button 
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 rounded-full transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}