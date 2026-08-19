import { useEffect, useState } from "react";
import NavBar from "./components/layout/NavBar";
import Hero from "./components/home/Hero";
import DeckShowcaseSection from "./components/home/DeckShowcaseSection";
import FeaturesSection from "./components/home/FeaturesSection";
import AnalyticsSection from "./components/home/AnalyticsSection";
import WorkFollowsSection from "./components/home/WorkFollowsSection";
import ActionsSection from "./components/home/ActionsSection";
import Footer from "./components/layout/Footer";

const App = () => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <NavBar mode={mode} setMode={setMode} />
      <Hero />
      <DeckShowcaseSection />
      <FeaturesSection />
      <AnalyticsSection />
      <WorkFollowsSection />
      <ActionsSection />
      <Footer />
    </div>
  );
};

export default App;