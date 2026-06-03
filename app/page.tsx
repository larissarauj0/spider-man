import Header from "./components/Header";
import Hero from "./components/Hero";
import Feature from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className='min-h-screen bg-[url("/images/bg.png")] bg-cover bg-center flex flex-col items-center overflow-x-hidden'>
      <Header />
      <Hero />
      <Feature />
      <Footer />
    </main>
  );
}
