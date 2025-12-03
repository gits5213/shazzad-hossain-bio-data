'use client';

import Tabs from './components/Tabs';
import TabPanel from './components/TabPanel';
import PhotoGallery from './components/PhotoGallery';
import { photos } from './data/photos';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white via-amber-50 to-rose-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="glass sticky top-0 z-50 border-b border-rose-200/50 shadow-lg shadow-rose-100/50">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold bg-gradient-to-r from-rose-700 via-rose-600 to-rose-800 bg-clip-text text-transparent text-center">
              Marriage Bio-Data
            </h1>
            <p className="text-center text-rose-600 mt-3 font-semibold text-lg tracking-wide">
              Shazzad Hossain
            </p>
            <div className="flex justify-center mt-4">
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-rose-400 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12 relative z-10">
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
              <section className="glass rounded-3xl shadow-xl shadow-rose-100/50 p-8 md:p-10 border border-rose-200/50 hover:shadow-2xl hover:shadow-rose-200/50 transition-all duration-300 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-r from-rose-700 to-rose-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
                  <span className="text-2xl">✨</span>
                  About Me
                </h2>
                <div className="space-y-5 text-gray-700 leading-relaxed text-base md:text-lg">
                  <p className="animate-slide-in">
                    I am a smart, well-educated, and energetic IT professional, widely known for my honesty, discipline, and organized behavior. Originally from <strong className="text-rose-700 font-semibold">Dhaka</strong>, I've had the opportunity to study at renowned universities in <strong className="text-rose-700 font-semibold">Malaysia, the United Kingdom, and the United States</strong>.
                  </p>
                  <p className="animate-slide-in">
                    I am a <strong className="text-rose-700 font-semibold">U.S. citizen</strong>, professionally and financially well-established in both the <strong className="text-rose-700 font-semibold">United States and Bangladesh</strong>, with properties and homes in both countries. Currently, I work as a <strong className="text-rose-700 font-semibold">Software Engineer on a U.S. Federal Government project</strong>. In addition, I founded and manage a <strong className="text-rose-700 font-semibold">small S-corporation IT firm</strong>. I am also actively exploring <strong className="text-rose-700 font-semibold">real estate investment opportunities in the U.S.</strong>
                  </p>
                  <p className="animate-slide-in">
                    I lead a <strong className="text-rose-700 font-semibold">healthy and responsible lifestyle</strong>, free from smoking or alcohol.
                  </p>
                  <div className="mt-6 p-5 bg-gradient-to-r from-rose-50 to-amber-50 rounded-xl border-l-4 border-rose-400 animate-fade-in">
                    <p className="text-rose-800 font-semibold text-lg">
                      💝 I have a deep love for children and believe they bring immense joy and strengthen the bond in a marriage. I hope my future partner shares my passion for building a happy, family-oriented life soon after marriage.
                    </p>
                  </div>
                </div>
              </section>

              {/* Basic Information & Lifestyle */}
              <section className="glass rounded-3xl shadow-xl shadow-rose-100/50 p-8 md:p-10 border border-rose-200/50 hover:shadow-2xl hover:shadow-rose-200/50 transition-all duration-300 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-r from-rose-700 to-rose-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
                  <span className="text-2xl">📋</span>
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
              <section className="glass rounded-3xl shadow-xl shadow-rose-100/50 p-8 md:p-10 border border-rose-200/50 hover:shadow-2xl hover:shadow-rose-200/50 transition-all duration-300 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-r from-rose-700 to-rose-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
                  <span className="text-2xl">🕌</span>
                  Religious Background
                </h2>
                <div className="text-gray-700">
                  <InfoItem label="Faith" value="Islam (Sunni)" />
                </div>
              </section>

              {/* Family Details */}
              <section className="glass rounded-3xl shadow-xl shadow-rose-100/50 p-8 md:p-10 border border-rose-200/50 hover:shadow-2xl hover:shadow-rose-200/50 transition-all duration-300 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-r from-rose-700 to-rose-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                  Family Details
                </h2>
                <div className="space-y-4 text-gray-700 text-base md:text-lg">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-rose-50/50 to-transparent hover:from-rose-50 transition-all duration-200">
                    <span className="font-bold text-rose-700">Father:</span>{" "}
                    <span>Deceased</span>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-r from-rose-50/50 to-transparent hover:from-rose-50 transition-all duration-200">
                    <span className="font-bold text-rose-700">Mother:</span>{" "}
                    <span>Homemaker; resides in both the USA and Dhaka</span>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-r from-rose-50/50 to-transparent hover:from-rose-50 transition-all duration-200">
                    <span className="font-bold text-rose-700">Elder Brother:</span>{" "}
                    <span>Medical Doctor from Dhaka Medical College; currently working with the <strong className="text-rose-700">World Health Organization (WHO)</strong></span>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-r from-rose-50/50 to-transparent hover:from-rose-50 transition-all duration-200">
                    <span className="font-bold text-rose-700">Elder Sister:</span>{" "}
                    <span>Associate Professor of Physics at a government college in Dhaka</span>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-r from-rose-50/50 to-transparent hover:from-rose-50 transition-all duration-200">
                    <span className="font-bold text-rose-700">Younger Brother:</span>{" "}
                    <span>BUET graduate; Master's from LSBU (UK) and Texas Tech University (USA) | Former employee at Google, currently working with the U.S. Federal Government, residing in Texas</span>
                  </div>
                  <div className="mt-6 pt-6 border-t-2 border-rose-200 p-4 rounded-xl bg-gradient-to-r from-amber-50/50 to-rose-50/50">
                    <span className="font-bold text-rose-700 text-lg">Family Residences:</span>{" "}
                    <span className="text-base md:text-lg">Dhaka (Bangladesh), Washington D.C., Maryland, and Texas (USA)</span>
                  </div>
                </div>
              </section>

              {/* Education & Career */}
              <section className="glass rounded-3xl shadow-xl shadow-rose-100/50 p-8 md:p-10 border border-rose-200/50 hover:shadow-2xl hover:shadow-rose-200/50 transition-all duration-300 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-r from-rose-700 to-rose-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
                  <span className="text-2xl">🎓</span>
                  Education & Career
                </h2>
                <div className="space-y-6 text-gray-700 text-base md:text-lg">
                  <div className="p-5 rounded-xl bg-gradient-to-r from-rose-50/50 to-transparent">
                    <h3 className="font-bold text-rose-700 mb-3 text-lg">Highest Qualifications:</h3>
                    <ul className="space-y-2 ml-2">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 mt-1">✓</span>
                        <span>Master's in Information Technology & E-Commerce</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 mt-1">✓</span>
                        <span>Executive MBA</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-5 rounded-xl bg-gradient-to-r from-amber-50/50 to-transparent">
                    <h3 className="font-bold text-rose-700 mb-3 text-lg">Universities Attended:</h3>
                    <ul className="space-y-2 ml-2">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 mt-1">🏛️</span>
                        <span>The George Washington University (USA)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 mt-1">🏛️</span>
                        <span>University of Greenwich (UK)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-5 rounded-xl bg-gradient-to-r from-rose-50/50 to-amber-50/50">
                    <h3 className="font-bold text-rose-700 mb-2 text-lg">Current Role:</h3>
                    <p className="ml-2">IT Professional with the U.S. Federal Government</p>
                  </div>
                </div>
              </section>

              {/* Hobbies & Interests */}
              <section className="glass rounded-3xl shadow-xl shadow-rose-100/50 p-8 md:p-10 border border-rose-200/50 hover:shadow-2xl hover:shadow-rose-200/50 transition-all duration-300 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-r from-rose-700 to-rose-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  Hobbies & Interests
                </h2>
                <div className="flex flex-wrap gap-3">
                  {["Gardening", "Traveling", "Gym", "Running", "Cycling", "Swimming", "Cricket", "Badminton", "Movies"].map((hobby, index) => (
                    <span
                      key={hobby}
                      className="px-5 py-2.5 bg-gradient-to-r from-rose-100 to-rose-50 text-rose-800 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border border-rose-200/50"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </section>

              {/* Assets & Financial Stability */}
              <section className="glass rounded-3xl shadow-xl shadow-rose-100/50 p-8 md:p-10 border border-rose-200/50 hover:shadow-2xl hover:shadow-rose-200/50 transition-all duration-300 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-r from-rose-700 to-rose-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
                  <span className="text-2xl">🏠</span>
                  Assets & Financial Stability
                </h2>
                <div className="space-y-6">
                  <div className="p-5 rounded-xl bg-gradient-to-r from-rose-50/50 to-transparent">
                    <h3 className="font-bold text-rose-700 mb-4 text-lg">Family-Owned Properties</h3>
                    <ul className="space-y-3 ml-2 text-gray-700 text-base md:text-lg">
                      <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors">
                        <span className="text-rose-500 mt-1 text-xl">🏘️</span>
                        <span>Five-storied house in <strong className="text-rose-700">Pallabi, Mirpur</strong> (near Metro Station)</span>
                      </li>
                      <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors">
                        <span className="text-rose-500 mt-1 text-xl">🏘️</span>
                        <span>Separate house in <strong className="text-rose-700">Mirpur-1</strong></span>
                      </li>
                      <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors">
                        <span className="text-rose-500 mt-1 text-xl">🏘️</span>
                        <span><strong className="text-rose-700">3-katha residential plot</strong> in Savar</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-5 rounded-xl bg-gradient-to-r from-amber-50/50 to-transparent">
                    <h3 className="font-bold text-rose-700 mb-4 text-lg">Personally Owned Properties</h3>
                    <ul className="space-y-3 ml-2 text-gray-700 text-base md:text-lg">
                      <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors">
                        <span className="text-rose-500 mt-1 text-xl">🏡</span>
                        <span><strong className="text-rose-700">7-katha plot</strong> in <strong className="text-rose-700">Sagutta Housing</strong> (adjacent to Mirpur DOHS)</span>
                      </li>
                      <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors">
                        <span className="text-rose-500 mt-1 text-xl">🏡</span>
                        <span><strong className="text-rose-700">Three-storied single-family home</strong> on a <strong className="text-rose-700">0.54-acre lot in Washington, D.C.</strong></span>
                      </li>
                      <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors">
                        <span className="text-rose-500 mt-1 text-xl">🚗</span>
                        <span>Multiple personal vehicles</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Partner Preferences */}
              <section className="glass rounded-3xl shadow-xl shadow-rose-100/50 p-8 md:p-10 border border-rose-200/50 hover:shadow-2xl hover:shadow-rose-200/50 transition-all duration-300 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-r from-rose-700 to-rose-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
                  <span className="text-2xl">💑</span>
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
                  <div className="mt-6 pt-6 border-t-2 border-rose-200 p-5 rounded-xl bg-gradient-to-r from-rose-50/50 to-amber-50/50">
                    <h3 className="font-bold text-rose-700 mb-4 text-lg">Qualities Desired</h3>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                      Polite, well-organized, homely, family-oriented, enjoys cooking, caring and loving toward family and children, respectful and supportive of her husband, and values traditional morals and ethics.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section className="bg-gradient-to-br from-rose-600 via-rose-700 to-rose-800 rounded-3xl shadow-2xl shadow-rose-900/30 p-8 md:p-10 text-white relative overflow-hidden animate-fade-in-up">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 flex items-center gap-3">
                    <span className="text-3xl">📞</span>
                    Contact Information
                  </h2>
                  <div className="space-y-5">
                    <a
                      href="mailto:nilay1997@gmail.com"
                      className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-200 hover:scale-[1.02] border border-white/20"
                    >
                      <div className="p-2 bg-white/20 rounded-lg">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-lg md:text-xl font-semibold">nilay1997@gmail.com</span>
                    </a>
                    <a
                      href="tel:+15716349960"
                      className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-200 hover:scale-[1.02] border border-white/20"
                    >
                      <div className="p-2 bg-white/20 rounded-lg">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg md:text-xl font-semibold">+1(571)634-9960</span>
                        <span className="text-rose-100 text-sm">(Phone / WhatsApp)</span>
                      </div>
                    </a>
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
      <footer className="glass border-t border-rose-200/50 py-8 mt-12 relative z-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm md:text-base font-medium">
            © {new Date().getFullYear()} Shazzad Hossain - Marriage Bio-Data
          </p>
        </div>
      </footer>
    </div>
  );
}

// Helper component for info items
function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-3 rounded-lg hover:bg-rose-50/50 transition-colors duration-200">
      <span className="font-bold text-rose-700">{label}:</span>{" "}
      <span className="text-gray-700">{value}</span>
    </div>
  );
}
