import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Impact from "../components/Impact";
import Form from "../components/Form";
import Approach from "../components/Approach";
import Learning from "../components/Learning";
import Classfeat from "../components/Classfeat";
import Learning2 from "../components/Learning2";
import Coursetab from "../components/Coursetab";
import Roadmap from "../components/Roadmap";
import Slider from "../components/Slider";
import Join from "../components/Join";
import Parentstestimonial from "../components/Parentstestimonial";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <main> 
        <Hero />
        <Impact />
        <Form />
        <Approach />
        <Classfeat />
        <Learning />
        <Learning2 />
        <Coursetab />
        <Roadmap />
        <Slider />
        <Join />
        <Parentstestimonial />
        <Footer />
      </main>
    </div>
  );
}
