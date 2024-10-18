import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import BasicInfo from '../components/BasicInfo';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        <Projects />
        <Skills />
        <BasicInfo />
      </main>
      <Footer />
    </div>
  );
}