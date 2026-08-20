import { useLayoutEffect, useState } from "react";
import NavBar from "./components/layout/NavBar";
import Hero from "./components/home/Hero";
import ScrollStorySection from "./components/home/ScrollStorySection";
import DeckShowcaseSection from "./components/home/DeckShowcaseSection";
import FeaturesSection from "./components/home/FeaturesSection";
import AnalyticsSection from "./components/home/AnalyticsSection";
import WorkFollowsSection from "./components/home/WorkFollowsSection";
import ActionsSection from "./components/home/ActionsSection";
import ScrollVelocitySection from "./components/home/ScrollVelocitySection";
import Footer from "./components/layout/Footer";
import TargetCursor from "./components/ui/TargetCursor";
import Noise from "./components/ui/Noise";

const App = () => {
  const [mode, setMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("flod_theme");
      if (savedMode) return savedMode;
    }
    return "dark";
  });

  useLayoutEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("flod_theme", mode);
  }, [mode]);

  return (
    <div className="min-h-screen w-full bg-background text-foreground transition-colors duration-300 relative">
      <Noise mode={mode} patternAlpha={15} patternRefreshInterval={3} />
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
        cursorColor="#A0307A"
        cursorColorOnTarget="#B497CF"
      />
      <NavBar mode={mode} setMode={setMode} />
      <Hero />
      <ScrollStorySection />
      <DeckShowcaseSection />
      <FeaturesSection />
      <AnalyticsSection />
      <WorkFollowsSection />
      <ActionsSection />
      <ScrollVelocitySection />
      <Footer />
    </div>
  );
};

export default App;