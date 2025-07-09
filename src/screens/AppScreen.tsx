import Header from '../components/Profile/Header';
import Footer from '../components/Footer';
import screenshot1 from '../assets/app/screen1.jpg';
import screenshot2 from '../assets/app/screen2.jpg';
import screenshot3 from '../assets/app/screen3.jpg';

const AppScreen = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-200 to-indigo-300 py-20 px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Meet Dofi: Your Child’s Smart AI Companion</h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Dofi is an interactive, fun, and educational robot designed to help children learn, play, and grow. 🎓🤖
          </p>
        </section>

        {/* Screenshots Gallery */}
        <section className="py-16 bg-gray-50 text-center">
          <h2 className="text-3xl font-bold mb-8">📱 App Preview</h2>
          <div className="flex justify-center flex-wrap gap-8 px-6">
            <img src={screenshot1} alt="App Screen 1" className="w-64 rounded-xl shadow-md" />
            <img src={screenshot2} alt="App Screen 2" className="w-64 rounded-xl shadow-md" />
            <img src={screenshot3} alt="App Screen 3" className="w-64 rounded-xl shadow-md" />
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-16 px-6">
          <h2 className="text-3xl font-bold text-center mb-12">✨ What Dofi Can Do</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 bg-blue-100 rounded-xl shadow hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">🎙️ Voice Command</h3>
              <p>Dofi understands and responds to kids’ voice instructions in Azerbaijani and English.</p>
            </div>
            <div className="p-6 bg-indigo-100 rounded-xl shadow hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">📚 Educational Games</h3>
              <p>Offers math quizzes, language games, and memory challenges tailored for ages 3-10.</p>
            </div>
            <div className="p-6 bg-purple-100 rounded-xl shadow hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">🧠 Emotional AI</h3>
              <p>Dofi reacts with emotions through animated eyes and expressions. It feels alive!</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AppScreen;
