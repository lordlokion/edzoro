import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Impact from "../components/Impact";
import Form from "../components/Form";
import Approach from "../components/Approach";
import Learning from "../components/Learning";
import Classfeat from "../components/Classfeat";
import Learning2 from "../components/Learning2";

import Roadmap from "../components/Roadmap";
import Slider from "../components/Slider";
import Join from "../components/Join";
import Parentstestimonial from "../components/Parentstestimonial";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import CoursesHome from "../components/CoursesHome";
import ClassVideo from "../components/ClassVideo";
import { WhatsAppFloatingButton } from "../components/WhatsApp";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf9f9]">
      <Navbar />
      <main>
        <div className="pt-2">
          <Hero />
        </div>
        <Reveal>
          <Impact />
        </Reveal>
        <Reveal>
          <Form />
        </Reveal>
        <Reveal>
          <Approach />
        </Reveal>
        <Reveal>
          <Classfeat />
        </Reveal>
        <Reveal>
          <Learning />
        </Reveal>
        <Reveal>
          <Learning2 />
        </Reveal>
        <Reveal>
          <ClassVideo />
        </Reveal>
        <CoursesHome />
        <Reveal>
          <Roadmap />
        </Reveal>
        <Reveal>
          <Slider />
        </Reveal>
        <Reveal>
          <Join />
        </Reveal>
        <Reveal>
          <Parentstestimonial />
        </Reveal>
        <Footer />
      </main>
      <WhatsAppFloatingButton />
    </div>
  );
}
