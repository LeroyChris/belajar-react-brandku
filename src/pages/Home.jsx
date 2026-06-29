import Header from "../Header";
import CardGrid from "../CardGrid";
import Hero from "../Hero";
import FeaturesData from "../data/features";
import { useState } from "react";

function Home () {
    const [features] = useState(FeaturesData);
    const [clickCount, setClickCount] = useState(0);
    const handleButtonClick = () => {
        setClickCount(clickCount + 1);
    };
    
    return (
        <div>
            <Header />
            <Hero clickCount={clickCount} onButtonClick={handleButtonClick} />
            <CardGrid features={features} />
            <footer className="bg-slate-900 text-white text-center py-6 text-sm">
                <p>&copy; 2025 BrandKu. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;