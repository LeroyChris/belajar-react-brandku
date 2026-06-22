import Header from "./Header";
import CardGrid from "./CardGrid";
import Hero from "./Hero";
import { useState } from "react";
import FeaturesData from "./data/features";

const App = () => {
  const [features] = useState(FeaturesData);
  const [clickCount, setClickCount] = useState(0);
  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <>
      <Header />
      <Hero clickCount={clickCount} onButtonClick={handleButtonClick} />
      <CardGrid features={features} />
      <footer className="bg-slate-900 text-white text-center py-6 text-sm">
        <p>&copy; 2025 BrandKu. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;