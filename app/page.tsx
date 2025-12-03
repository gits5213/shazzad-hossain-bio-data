'use client';

import Tabs from './components/Tabs';
import TabPanel from './components/TabPanel';
import PhotoGallery from './components/PhotoGallery';
import LanguageSwitcher from './components/LanguageSwitcher';
import { photos } from './data/photos';
import { useI18n } from './contexts/I18nContext';

export default function Home() {
  const { t } = useI18n();

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
          <div className="flex justify-end mb-4">
            <LanguageSwitcher />
          </div>
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold bg-gradient-to-r from-rose-700 via-rose-600 to-rose-800 bg-clip-text text-transparent text-center">
              {t('header.title')}
            </h1>
            <p className="text-center text-rose-600 mt-3 font-semibold text-lg tracking-wide">
              {t('header.name')}
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
            { id: 'biodata', label: t('tabs.biodata'), icon: '📋' },
            { id: 'gallery', label: t('tabs.gallery'), icon: '📷' },
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
                  {t('sections.aboutMe')}
                </h2>
                <div className="space-y-5 text-gray-700 leading-relaxed text-base md:text-lg">
                  <p className="animate-slide-in">
                    {t('about.p1', { 
                      dhaka: `<strong>${t('about.dhaka')}</strong>`,
                      universities: `<strong>${t('about.universities')}</strong>`
                    }).split(/(<strong>.*?<\/strong>)/g).map((part, i) => 
                      part.startsWith('<strong>') ? <span key={i} dangerouslySetInnerHTML={{ __html: part.replace(/<strong>/g, '<strong class="text-rose-700 font-semibold">') }} /> : part
                    )}
                  </p>
                  <p className="animate-slide-in">
                    {t('about.p2', {
                      usCitizen: `<strong>${t('about.usCitizen')}</strong>`,
                      countries: `<strong>${t('about.countries')}</strong>`,
                      jobTitle: `<strong>${t('about.jobTitle')}</strong>`,
                      companyType: `<strong>${t('about.companyType')}</strong>`,
                      realEstate: `<strong>${t('about.realEstate')}</strong>`
                    }).split(/(<strong>.*?<\/strong>)/g).map((part, i) => 
                      part.startsWith('<strong>') ? <span key={i} dangerouslySetInnerHTML={{ __html: part.replace(/<strong>/g, '<strong class="text-rose-700 font-semibold">') }} /> : part
                    )}
                  </p>
                  <p className="animate-slide-in">
                    {t('about.p3', {
                      lifestyle: `<strong>${t('about.lifestyle')}</strong>`
                    }).split(/(<strong>.*?<\/strong>)/g).map((part, i) => 
                      part.startsWith('<strong>') ? <span key={i} dangerouslySetInnerHTML={{ __html: part.replace(/<strong>/g, '<strong class="text-rose-700 font-semibold">') }} /> : part
                    )}
                  </p>
                  <div className="mt-6 p-5 bg-gradient-to-r from-rose-50 to-amber-50 rounded-xl border-l-4 border-rose-400 animate-fade-in">
                    <p className="text-rose-800 font-semibold text-lg">
                      💝 {t('about.highlight')}
                    </p>
                  </div>
                </div>
              </section>

              {/* Basic Information & Lifestyle */}
              <section className="glass rounded-3xl shadow-xl shadow-rose-100/50 p-8 md:p-10 border border-rose-200/50 hover:shadow-2xl hover:shadow-rose-200/50 transition-all duration-300 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-r from-rose-700 to-rose-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
                  <span className="text-2xl">📋</span>
                  {t('sections.basicInfo')}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <InfoItem label={t('basicInfo.dateOfBirth')} value={t('basicInfo.values.dateOfBirth')} />
                    <InfoItem label={t('basicInfo.citizenship')} value={t('basicInfo.values.citizenship')} />
                    <InfoItem label={t('basicInfo.currentLocation')} value={t('basicInfo.values.currentLocation')} />
                    <InfoItem label={t('basicInfo.bornRaised')} value={t('basicInfo.values.bornRaised')} />
                    <InfoItem label={t('basicInfo.maritalStatus')} value={t('basicInfo.values.maritalStatus')} />
                  </div>
                  <div className="space-y-3">
                    <InfoItem label={t('basicInfo.children')} value={t('basicInfo.values.children')} />
                    <InfoItem label={t('basicInfo.height')} value={t('basicInfo.values.height')} />
                    <InfoItem label={t('basicInfo.diet')} value={t('basicInfo.values.diet')} />
                    <InfoItem label={t('basicInfo.bloodGroup')} value={t('basicInfo.values.bloodGroup')} />
                    <InfoItem label={t('basicInfo.health')} value={t('basicInfo.values.health')} />
                  </div>
                </div>
              </section>

              {/* Religious Background */}
              <section className="glass rounded-3xl shadow-xl shadow-rose-100/50 p-8 md:p-10 border border-rose-200/50 hover:shadow-2xl hover:shadow-rose-200/50 transition-all duration-300 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-r from-rose-700 to-rose-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
                  <span className="text-2xl">🕌</span>
                  {t('sections.religiousBackground')}
                </h2>
                <div className="text-gray-700">
                  <InfoItem label={t('religious.faith')} value={t('religious.value')} />
                </div>
              </section>

              {/* Family Details */}
              <section className="glass rounded-3xl shadow-xl shadow-rose-100/50 p-8 md:p-10 border border-rose-200/50 hover:shadow-2xl hover:shadow-rose-200/50 transition-all duration-300 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-r from-rose-700 to-rose-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                  {t('sections.familyDetails')}
                </h2>
                <div className="space-y-4 text-gray-700 text-base md:text-lg">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-rose-50/50 to-transparent hover:from-rose-50 transition-all duration-200">
                    <span className="font-bold text-rose-700">{t('family.father')}:</span>{" "}
                    <span>{t('family.fatherValue')}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-r from-rose-50/50 to-transparent hover:from-rose-50 transition-all duration-200">
                    <span className="font-bold text-rose-700">{t('family.mother')}:</span>{" "}
                    <span>{t('family.motherValue')}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-r from-rose-50/50 to-transparent hover:from-rose-50 transition-all duration-200">
                    <span className="font-bold text-rose-700">{t('family.elderBrother')}:</span>{" "}
                    <span>{t('family.elderBrotherValue')}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-r from-rose-50/50 to-transparent hover:from-rose-50 transition-all duration-200">
                    <span className="font-bold text-rose-700">{t('family.elderSister')}:</span>{" "}
                    <span>{t('family.elderSisterValue')}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-r from-rose-50/50 to-transparent hover:from-rose-50 transition-all duration-200">
                    <span className="font-bold text-rose-700">{t('family.youngerBrother')}:</span>{" "}
                    <span>{t('family.youngerBrotherValue')}</span>
                  </div>
                  <div className="mt-6 pt-6 border-t-2 border-rose-200 p-4 rounded-xl bg-gradient-to-r from-amber-50/50 to-rose-50/50">
                    <span className="font-bold text-rose-700 text-lg">{t('family.familyResidences')}:</span>{" "}
                    <span className="text-base md:text-lg">{t('family.familyResidencesValue')}</span>
                  </div>
                </div>
              </section>

              {/* Education & Career */}
              <section className="glass rounded-3xl shadow-xl shadow-rose-100/50 p-8 md:p-10 border border-rose-200/50 hover:shadow-2xl hover:shadow-rose-200/50 transition-all duration-300 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-r from-rose-700 to-rose-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
                  <span className="text-2xl">🎓</span>
                  {t('sections.educationCareer')}
                </h2>
                <div className="space-y-6 text-gray-700 text-base md:text-lg">
                  <div className="p-5 rounded-xl bg-gradient-to-r from-rose-50/50 to-transparent">
                    <h3 className="font-bold text-rose-700 mb-3 text-lg">{t('education.highestQualifications')}:</h3>
                    <ul className="space-y-2 ml-2">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 mt-1">✓</span>
                        <span>{t('education.qualification1')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 mt-1">✓</span>
                        <span>{t('education.qualification2')}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-5 rounded-xl bg-gradient-to-r from-amber-50/50 to-transparent">
                    <h3 className="font-bold text-rose-700 mb-3 text-lg">{t('education.universitiesAttended')}:</h3>
                    <ul className="space-y-2 ml-2">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 mt-1">🏛️</span>
                        <span>{t('education.university1')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 mt-1">🏛️</span>
                        <span>{t('education.university2')}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-5 rounded-xl bg-gradient-to-r from-rose-50/50 to-amber-50/50">
                    <h3 className="font-bold text-rose-700 mb-2 text-lg">{t('education.currentRole')}:</h3>
                    <p className="ml-2">{t('education.currentRoleValue')}</p>
                  </div>
                </div>
              </section>

              {/* Hobbies & Interests */}
              <section className="glass rounded-3xl shadow-xl shadow-rose-100/50 p-8 md:p-10 border border-rose-200/50 hover:shadow-2xl hover:shadow-rose-200/50 transition-all duration-300 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-r from-rose-700 to-rose-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  {t('sections.hobbiesInterests')}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    t('hobbies.gardening'),
                    t('hobbies.traveling'),
                    t('hobbies.gym'),
                    t('hobbies.running'),
                    t('hobbies.cycling'),
                    t('hobbies.swimming'),
                    t('hobbies.cricket'),
                    t('hobbies.badminton'),
                    t('hobbies.movies')
                  ].map((hobby, index) => (
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
                  {t('sections.assetsFinancial')}
                </h2>
                <div className="space-y-6">
                  <div className="p-5 rounded-xl bg-gradient-to-r from-rose-50/50 to-transparent">
                    <h3 className="font-bold text-rose-700 mb-4 text-lg">{t('assets.familyOwned')}</h3>
                    <ul className="space-y-3 ml-2 text-gray-700 text-base md:text-lg">
                      <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors">
                        <span className="text-rose-500 mt-1 text-xl">🏘️</span>
                        <span>{t('assets.property1')}</span>
                      </li>
                      <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors">
                        <span className="text-rose-500 mt-1 text-xl">🏘️</span>
                        <span>{t('assets.property2')}</span>
                      </li>
                      <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors">
                        <span className="text-rose-500 mt-1 text-xl">🏘️</span>
                        <span>{t('assets.property3')}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-5 rounded-xl bg-gradient-to-r from-amber-50/50 to-transparent">
                    <h3 className="font-bold text-rose-700 mb-4 text-lg">{t('assets.personallyOwned')}</h3>
                    <ul className="space-y-3 ml-2 text-gray-700 text-base md:text-lg">
                      <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors">
                        <span className="text-rose-500 mt-1 text-xl">🏡</span>
                        <span>{t('assets.property4')}</span>
                      </li>
                      <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors">
                        <span className="text-rose-500 mt-1 text-xl">🏡</span>
                        <span>{t('assets.property5')}</span>
                      </li>
                      <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors">
                        <span className="text-rose-500 mt-1 text-xl">🚗</span>
                        <span>{t('assets.property6')}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Partner Preferences */}
              <section className="glass rounded-3xl shadow-xl shadow-rose-100/50 p-8 md:p-10 border border-rose-200/50 hover:shadow-2xl hover:shadow-rose-200/50 transition-all duration-300 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-r from-rose-700 to-rose-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
                  <span className="text-2xl">💑</span>
                  {t('sections.partnerPreferences')}
                </h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <InfoItem label={t('partner.ageRange')} value={t('partner.ageRangeValue')} />
                    <InfoItem label={t('partner.height')} value={t('partner.heightValue')} />
                    <InfoItem label={t('partner.religion')} value={t('partner.religionValue')} />
                    <InfoItem label={t('partner.maritalStatus')} value={t('partner.maritalStatusValue')} />
                    <InfoItem label={t('partner.children')} value={t('partner.childrenValue')} />
                    <InfoItem label={t('partner.career')} value={t('partner.careerValue')} />
                  </div>
                  <div className="mt-6 pt-6 border-t-2 border-rose-200 p-5 rounded-xl bg-gradient-to-r from-rose-50/50 to-amber-50/50">
                    <h3 className="font-bold text-rose-700 mb-4 text-lg">{t('partner.qualitiesDesired')}</h3>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                      {t('partner.qualitiesValue')}
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
                    {t('sections.contactInfo')}
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
                      <span className="text-lg md:text-xl font-semibold">{t('contact.email')}</span>
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
                        <span className="text-lg md:text-xl font-semibold">{t('contact.phone')}</span>
                        <span className="text-rose-100 text-sm">{t('contact.phoneLabel')}</span>
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
            {t('footer.copyright', { year: new Date().getFullYear().toString() })}
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
