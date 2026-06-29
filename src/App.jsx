import Home from './pages/Home'
import FeaturesData from "./data/features";

export default function App() {
  const dataFeatures=[];

  return (
    <>
    <Home features={FeaturesData}/>
    </>
  );
}
