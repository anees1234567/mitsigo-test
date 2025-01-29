import { lazy, Suspense } from "react";
import "./App.css";

// Lazy load all components
const Header = lazy(() => import("./components/Header/Header"));
const RecognitionSection = lazy(() => import("./components/Recognition"));
const TabInterface = lazy(() => import("./components/Tabs/Devicetab"));
const Slider = lazy(() => import("./components/Slider/Slider"));
const Footer = lazy(() => import("./components/footer/Footer"));
const Features = lazy(() => import("./components/Features/Features"));
const Testimonials = lazy(() => import("./components/Customers/Testimonials"));
const Home = lazy(() => import("./components/Home/index"));

function App() {
  return (
    <div className="w-[100vw] bg-black">
      {/* Use Suspense with a fallback loader for lazy-loaded components */}
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>

      <Suspense fallback={<div>Loading Home...</div>}>
        <div id="home">
          <Home />
        </div>
      </Suspense>

      <Suspense fallback={<div>Loading Recognition Section...</div>}>
        <div id="recognition">
          <RecognitionSection />
        </div>
      </Suspense>

      <Suspense fallback={<div>Loading Features...</div>}>
        <div id="features">
          <Features />
        </div>
      </Suspense>

      <Suspense fallback={<div>Loading Devices...</div>}>
        <div id="devices">
          <TabInterface />
        </div>
      </Suspense>

      <Suspense fallback={<div>Loading Testimonials...</div>}>
        <div id="testimonials">
          <Testimonials />
        </div>
      </Suspense>

      <Suspense fallback={<div>Loading Slider...</div>}>
        <div id="slider">
          <Slider />
        </div>
      </Suspense>

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
