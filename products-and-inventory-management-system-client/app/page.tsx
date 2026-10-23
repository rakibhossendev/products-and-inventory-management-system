
import {
  Wallet,
} from "lucide-react";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import PreviewCart from "@/components/HomePage/HeroSection/Chart";
import FeaturesSection from "@/components/HomePage/Features/FeaturesSection";
import HowToWork from "@/components/HomePage/HowToWork/HowToWork";
import Benefits from "@/components/HomePage/Benefits/Benefits";
import Footer from "@/components/HomePage/Footer";



export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F7FAF8] text-[#18251D]">
      {/* Navbar */}
   

      {/* Hero */}
      <section className="relative px-5 pb-20 pt-16 sm:pt-24 lg:px-8 lg:pb-28">
        <div className="pointer-events-none absolute left-1/2 top-0 z-0 size-125 -translate-x-1/2 rounded-full bg-[#DDF2E3]/60 blur-[100px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <HeroSection/>

          {/* Dashboard Preview */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 -z-10 rounded-[32px] bg-[#DDEFE2]/70 blur-2xl" />

              <PreviewCart/>

            <div className="absolute -right-3 top-24 hidden rounded-xl border border-[#DFE8E1] bg-white p-3 shadow-lg sm:block sm:-right-6">
              <div className="flex items-center gap-2">
                <div className="flex size-9 items-center justify-center rounded-lg bg-[#E2F3E8] text-[#0E5C33]">
                  <Wallet className="size-4" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Financial clarity</p>
                  <p className="text-sm font-semibold">All in one place</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <FeaturesSection/>

      {/* How it works */}
      <HowToWork/>

      {/* Benefits */}
     <Benefits/>

      {/* Footer */}
      <footer className="border-t border-[#DFE8E1] bg-white px-5 py-8 lg:px-8">
        <Footer/>
      </footer>
    </main>
  );
}
