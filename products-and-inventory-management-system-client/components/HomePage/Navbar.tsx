import Link from "next/link";

import {
  ArrowRight,
  Boxes,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar(){


    return (
         <header className="sticky top-0 z-50 border-b border-[#DFE8E1]/80 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-xl bg-[#0E5C33] text-white">
              <Boxes className="size-5" />
            </div>
            <span className="text-base font-bold tracking-tight sm:text-lg">
              Stock<span className="text-[#0E5C33]">wise</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
            <a href="#features" className="transition hover:text-[#0E5C33]">
              Features
            </a>
            <a href="#how-it-works" className="transition hover:text-[#0E5C33]">
              How it works
            </a>
            <a href="#benefits" className="transition hover:text-[#0E5C33]">
              Benefits
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/sign-in"
              className="hidden text-sm font-semibold text-gray-700 hover:text-[#0E5C33] sm:block"
            >
              Sign in
            </Link>
            <Button
            
              className="rounded-lg bg-[#0E5C33] hover:bg-[#094A29]"
            >
              <Link href="/sign-up">
                Get started <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </nav>
      </header>
    )
}