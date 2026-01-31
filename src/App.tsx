import { Hero, MenuSection, AboutUs, FAQSection, Footer } from './sections';
import { CafeNavbar } from './components/CafeNavbar';

function App() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 lg:pt-0">
      <CafeNavbar />
      <Hero />
      <MenuSection />
      <AboutUs />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
