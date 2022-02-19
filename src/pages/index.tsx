import About from "app/about/About";
import Exp from "app/exp/Exp";
import Header from "app/header/Header";
import Navigation from "app/navigation/Navigation";
import Projects from "app/projects/Projects";

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <Exp />
      <About />
      <Projects />
    </>
  );
}
