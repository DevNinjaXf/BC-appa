import About from "@/app/About us/About us";
import Calculator from "@/components/calculator/calcualtor";
import Features from "@/app/Features/Features";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Trust from "@/components/trust/Trust";
import Trust2 from "@/components/trust/Trust2";
import Appsec1 from "@/app/Appsec1/OurApp";
import Appsec2 from "@/components/Appsec2/OurApp2";
import Proofs from "@/app/proofs/proofs";
import Values from "@/components/values/Corevalues"; 
import Guide from "@/app/guide/Guide";
import Articles from "@/app/articles/articles";
import Questions from "@/app/questions/questions";

export default function Home() {
  return (
    <>
      <section id="home" className="pt-[80px] sm:pt-[90px] lg:pt-[106px]">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="values">
        <Values />
      </section>

      <section id="calculator">
        <Calculator />
      </section>

      <section id="guide">
        <Guide />
      </section>

      <section id="trust">
        <Trust />
      </section>

      <section id="features">
        <Features />
      </section>
 
      <section id="trust2">
      <Trust2 />
      </section>  

      <section id="appsec1">
        <Appsec1/>
      </section>
    
    <section id="articles">
        <Articles />
      </section>

      <section id="proofs">
        <Proofs />
      </section>

      <section id="questions">
        <Questions />
      </section>

      <section>
        <Appsec2 />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}
