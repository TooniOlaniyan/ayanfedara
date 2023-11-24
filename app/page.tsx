import Biography from "@/components/Biography";
import ContactMe from "@/components/ContactMe";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-[15rem]">
      <Hero/>
      <Biography/>
      <Gallery/>
      <ContactMe/>
      
    </main>
  )
}
