import { About, Skills } from "@/components/About";
import { BentoGrid } from "@/components/BentoGrid";
import { Contact, Footer } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <section id="projects" className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-2 font-mono text-sm text-violet-400">Projects</h2>
            <p className="mb-10 text-2xl font-semibold text-zinc-100">
              Selected work
            </p>
            <BentoGrid projects={projects} />
          </div>
        </section>
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
