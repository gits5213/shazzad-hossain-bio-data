'use client';

import Tabs from './components/Tabs';
import TabPanel from './components/TabPanel';
import PhotoGallery from './components/PhotoGallery';
import { photos } from './data/photos';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-rose-100">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-rose-900 text-center">
            Marriage Bio-Data
          </h1>
          <p className="text-center text-rose-700 mt-2 font-medium">
            Shazzad Hossain
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <Tabs
          tabs={[
            { id: 'biodata', label: 'Bio-Data', icon: '📋' },
            { id: 'gallery', label: 'Photo Gallery', icon: '📷' },
          ]}
          defaultTab="biodata"
        >
          {/* Bio-Data Tab */}
          <TabPanel tabId="biodata">
            <div className="space-y-12">
              {/* About Me Section */}
              <section className="bg-white rounded-2xl shadow-lg p-8 border border-rose-100">
                <h2 className="text-3xl font-playfair font-bold text-rose-900 mb-6 flex items-center gap-3">
                  <span className="text-rose-500">📌</span>
                  About Me
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    I am a smart, well-educated, and energetic IT professional, widely known for my honesty, discipline, and organized behavior. Originally from <strong className="text-rose-900">Dhaka</strong>, I've had the opportunity to study at renowned universities in <strong className="text-rose-900">Malaysia, the United Kingdom, and the United States</strong>.
                  </p>
                  <p>
                    I am a <strong className="text-rose-900">U.S. citizen</strong>, professionally and financially well-established in both the <strong className="text-rose-900">United States and Bangladesh</strong>, with properties and homes in both countries. Currently, I work as a <strong className="text-rose-900">Software Engineer on a U.S. Federal Government project</strong>. In addition, I founded and manage a <strong className="text-rose-900">small S-corporation IT firm</strong>. I am also actively exploring <strong className="text-rose-900">real estate investment opportunities in the U.S.</strong>
                  </p>
                  <p>
                    I lead a <strong className="text-rose-900">healthy and responsible lifestyle</strong>, free from smoking or alcohol.
                  </p>
                  <p className="text-rose-800 font-medium">
                    I have a deep love for children and believe they bring immense joy and strengthen the bond in a marriage. I hope my future partner shares my passion for building a happy, family-oriented life soon after marriage.
                  </p>
                </div>
              </section>

              {/* Basic Information & Lifestyle */}
              <section className="bg-white rounded-2xl shadow-lg p-8 border border-rose-100">
                <h2 className="text-3xl font-playfair font-bold text-rose-900 mb-6 flex items-center gap-3">
                  <span className="text-rose-500">📌</span>
                  Basic Information & Lifestyle
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <InfoItem label="Date of Birth" value="December 1978" />
                    <InfoItem label="Citizenship" value="United States of America" />
                    <InfoItem label="Current Location" value="Washington, D.C., USA" />
                    <InfoItem label="Born & Raised" value="Dhaka, Bangladesh" />
                    <InfoItem label="Marital Status" value="Divorced (with valid reasons)" />
                  </div>
                  <div className="space-y-3">
                    <InfoItem label="Children" value="None" />
                    <InfoItem label="Height" value={'5\'5" (165 cm)'} />
                    <InfoItem label="Diet" value="Non-Vegetarian" />
                    <InfoItem label="Blood Group" value="AB+" />
                    <InfoItem label="Health" value="Excellent; no health issues or disabilities" />
                  </div>
                </div>
              </section>

              {/* Religious Background */}
              <section className="bg-white rounded-2xl shadow-lg p-8 border border-rose-100">
                <h2 className="text-3xl font-playfair font-bold text-rose-900 mb-6 flex items-center gap-3">
                  <span className="text-rose-500">📌</span>
                  Religious Background
                </h2>
                <div className="text-gray-700">
                  <InfoItem label="Faith" value="Islam (Sunni)" />
                </div>
              </section>

              {/* Family Details */}
              <section className="bg-white rounded-2xl shadow-lg p-8 border border-rose-100">
                <h2 className="text-3xl font-playfair font-bold text-rose-900 mb-6 flex items-center gap-3">
                  <span className="text-rose-500">📌</span>
                  Family Details
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <span className="font-semibold text-rose-900">Father:</span>{" "}
                    <span>Deceased</span>
                  </div>
                  <div>
                    <span className="font-semibold text-rose-900">Mother:</span>{" "}
                    <span>Homemaker; resides in both the USA and Dhaka</span>
                  </div>
                  <div>
                    <span className="font-semibold text-rose-900">Elder Brother:</span>{" "}
                    <span>Medical Doctor from Dhaka Medical College; currently working with the <strong>World Health Organization (WHO)</strong></span>
                  </div>
                  <div>
                    <span className="font-semibold text-rose-900">Elder Sister:</span>{" "}
                    <span>Associate Professor of Physics at a government college in Dhaka</span>
                  </div>
                  <div>
                    <span className="font-semibold text-rose-900">Younger Brother:</span>{" "}
                    <span>BUET graduate; Master's from LSBU (UK) and Texas Tech University (USA) | Former employee at Google, currently working with the U.S. Federal Government, residing in Texas</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-rose-100">
                    <span className="font-semibold text-rose-900">Family Residences:</span>{" "}
                    <span>Dhaka (Bangladesh), Washington D.C., Maryland, and Texas (USA)</span>
                  </div>
                </div>
              </section>

              {/* Education & Career */}
              <section className="bg-white rounded-2xl shadow-lg p-8 border border-rose-100">
                <h2 className="text-3xl font-playfair font-bold text-rose-900 mb-6 flex items-center gap-3">
                  <span className="text-rose-500">📌</span>
                  Education & Career
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold text-rose-900 mb-2">Highest Qualifications:</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Master's in Information Technology & E-Commerce</li>
                      <li>Executive MBA</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-rose-900 mb-2">Universities Attended:</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>The George Washington University (USA)</li>
                      <li>University of Greenwich (UK)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-rose-900 mb-2">Current Role:</h3>
                    <p className="ml-4">IT Professional with the U.S. Federal Government</p>
                  </div>
                </div>
              </section>

              {/* Hobbies & Interests */}
              <section className="bg-white rounded-2xl shadow-lg p-8 border border-rose-100">
                <h2 className="text-3xl font-playfair font-bold text-rose-900 mb-6 flex items-center gap-3">
                  <span className="text-rose-500">📌</span>
                  Hobbies & Interests
                </h2>
                <div className="flex flex-wrap gap-3">
                  {["Gardening", "Traveling", "Gym", "Running", "Cycling", "Swimming", "Cricket", "Badminton", "Movies"].map((hobby) => (
                    <span
                      key={hobby}
                      className="px-4 py-2 bg-rose-100 text-rose-900 rounded-full text-sm font-medium"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </section>

              {/* Assets & Financial Stability */}
              <section className="bg-white rounded-2xl shadow-lg p-8 border border-rose-100">
                <h2 className="text-3xl font-playfair font-bold text-rose-900 mb-6 flex items-center gap-3">
                  <span className="text-rose-500">📌</span>
                  Assets & Financial Stability
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-rose-900 mb-3 text-lg">Family-Owned Properties</h3>
                    <ul className="space-y-2 ml-4 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 mt-1">•</span>
                        <span>Five-storied house in <strong className="text-rose-900">Pallabi, Mirpur</strong> (near Metro Station)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 mt-1">•</span>
                        <span>Separate house in <strong className="text-rose-900">Mirpur-1</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 mt-1">•</span>
                        <span><strong className="text-rose-900">3-katha residential plot</strong> in Savar</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-rose-900 mb-3 text-lg">Personally Owned Properties</h3>
                    <ul className="space-y-2 ml-4 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 mt-1">•</span>
                        <span><strong className="text-rose-900">7-katha plot</strong> in <strong className="text-rose-900">Sagutta Housing</strong> (adjacent to Mirpur DOHS)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 mt-1">•</span>
                        <span><strong className="text-rose-900">Three-storied single-family home</strong> on a <strong className="text-rose-900">0.54-acre lot in Washington, D.C.</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 mt-1">•</span>
                        <span>Multiple personal vehicles</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Partner Preferences */}
              <section className="bg-white rounded-2xl shadow-lg p-8 border border-rose-100">
                <h2 className="text-3xl font-playfair font-bold text-rose-900 mb-6 flex items-center gap-3">
                  <span className="text-rose-500">📌</span>
                  Partner Preferences
                </h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <InfoItem label="Age Range" value="21–30 years" />
                    <InfoItem label="Height" value={'4\'11"–5\'4"'} />
                    <InfoItem label="Religion/Community" value="Muslim preferred" />
                    <InfoItem label="Marital Status" value="Never married preferred" />
                    <InfoItem label="Children" value="Should not have children" />
                    <InfoItem label="Career" value="Career/job is not a priority; preference for someone with a homely, nurturing nature" />
                  </div>
                  <div className="mt-6 pt-6 border-t border-rose-100">
                    <h3 className="font-semibold text-rose-900 mb-3 text-lg">Qualities Desired</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Polite, well-organized, homely, family-oriented, enjoys cooking, caring and loving toward family and children, respectful and supportive of her husband, and values traditional morals and ethics.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section className="bg-gradient-to-r from-rose-600 to-rose-700 rounded-2xl shadow-lg p-8 text-white">
                <h2 className="text-3xl font-playfair font-bold mb-6 flex items-center gap-3">
                  <span>📌</span>
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a
                      href="mailto:nilay1997@gmail.com"
                      className="text-lg hover:underline font-medium"
                    >
                      nilay1997@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a
                      href="tel:+15716349960"
                      className="text-lg hover:underline font-medium"
                    >
                      +1-571-634-9960
                    </a>
                    <span className="text-rose-100 text-sm">(Phone / WhatsApp)</span>
                  </div>
                </div>
              </section>
            </div>
          </TabPanel>

          {/* Photo Gallery Tab */}
          <TabPanel tabId="gallery">
            <PhotoGallery photos={photos} />
          </TabPanel>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-rose-100 py-6">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Shazzad Hossain - Marriage Bio-Data</p>
        </div>
      </footer>
    </div>
  );
}

// Helper component for info items
function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="font-semibold text-rose-900">{label}:</span>{" "}
      <span className="text-gray-700">{value}</span>
    </div>
  );
}
