import { Hero, MenuSection, AboutUs, FAQSection, Footer } from './sections';
import { CafeNavbar } from './components/CafeNavbar';

function App() {
  return (
    <div className="min-h-screen pt-0">
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
