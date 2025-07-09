import Header from '../components/Profile/Header';
import Footer from '../components/Footer';
import screenshot1 from '../assets/app/screen1.jpg';
import screenshot2 from '../assets/app/screen2.jpg';
import screenshot3 from '../assets/app/screen3.jpg';
import { useTranslation } from 'react-i18next';

const AppScreen = () => {

  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-200 to-indigo-300 py-20 px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            {t('app_page_title') || 'Meet Dofi: Your Learning Buddy!'}
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            {t('app_page_description') || 'Dofi is an AI-powered educational robot designed to make learning fun and interactive for kids aged 3-10. With voice commands, educational games, and emotional AI, Dofi is here to inspire the next generation!'}
          </p>
        </section>

        {/* Screenshots Gallery */}
        <section className="py-16 bg-gray-50 text-center">
          <h2 className="text-3xl font-bold mb-8">
            {t('app_slide_title')}
          </h2>
          <div className="flex justify-center flex-wrap gap-8 px-6">
            <img src={screenshot1} alt="App Screen 1" className="w-64 rounded-xl shadow-md" />
            <img src={screenshot2} alt="App Screen 2" className="w-64 rounded-xl shadow-md" />
            <img src={screenshot3} alt="App Screen 3" className="w-64 rounded-xl shadow-md" />
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-16 px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('app_testimontial_title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 bg-blue-100 rounded-xl shadow hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">
                
                {t('app_testimontial_title1')}
              </h3>
              <p>
                
                {t('app_testimontial_description1')}
              </p>
            </div>
            <div className="p-6 bg-indigo-100 rounded-xl shadow hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">
                
                {t('app_testimontial_title2')}
              </h3>
              <p>
                
                {t('app_testimontial_description2')}
              </p>
            </div>
            <div className="p-6 bg-purple-100 rounded-xl shadow hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">
                
                {t('app_testimontial_title3')}
              </h3>
              <p>
                {t('app_testimontial_description3')}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AppScreen;
