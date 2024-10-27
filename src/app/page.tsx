import Hero from "../components/HERO/HERO";
import SERVICE from  "../components/SERVICE/SERVICE";
import About from "../components/About/ABOUT";
import Tech from "../components/TECH/TECH";

export default function Home() {
  return (
   <main className="bg-black hide-scrollbar ">
    <Hero />
    <SERVICE />
    <About />
    <Tech />
  
      </main>
  );
}
