import About from "app/about/About";
import Exp from "app/exp/Exp";
import Footer from "app/footer/Footer";
import Header from "app/header/Header";
import Navigation from "app/navigation/Navigation";
import Skills from "app/skills/Skills";

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <Exp />
      <About />
      <Skills />
      <Footer />
    </>
  );
}
