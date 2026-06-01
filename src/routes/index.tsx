import { createFileRoute } from "@tanstack/react-router";
import { Cursor } from "@/components/Cursor";
import { SideNav } from "@/components/SideNav";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Clients } from "@/components/Clients";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Voltcraft — Digital Creative Agency" },
      { name: "description", content: "Voltcraft is a digital creative agency designing brands, products and web experiences for ambitious teams. Based in Berlin & New York." },
      { property: "og:title", content: "Voltcraft — Digital Creative Agency" },
      { property: "og:description", content: "Brand, web, product and motion for teams ready to break the template." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-base text-mist overflow-x-hidden">
      <Cursor />
      <SideNav />
      <Hero />
      <Manifesto />
      <Services />
      <Work />
      <Clients />
      <Process />
      <Contact />
    </main>
  );
}
