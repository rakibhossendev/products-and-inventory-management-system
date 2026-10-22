import { Button } from "@/components/ui/button";

import {
    ArrowRight,
    Check,
    ChevronRight,

} from "lucide-react";
import Link from "next/link";
export default function HeroSection() {

    return (

        <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D6E9DA] bg-white px-3.5 py-2 text-xs font-semibold text-[#0E5C33] shadow-sm sm:text-sm">
                <span className="size-2 rounded-full bg-[#0E5C33]" />
                Smarter tools for everyday retail
            </div>

            <h1 className="max-w-xl text-4xl font-bold leading-[1.13] tracking-tight sm:text-5xl lg:text-[60px]">
                Run your shop.
                <br />
                <span className="text-[#0E5C33]">Know your numbers.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                Manage products, track sales, monitor stock, and organize
                customer dues with one simple business management system.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                    size="lg"
                    className="h-12 rounded-xl bg-[#0E5C33] px-6 text-white shadow-lg shadow-green-900/10 hover:bg-[#094A29]"
                >
                    <Link href="/sign-up">
                        Start managing your shop
                        <ArrowRight className="ml-2 size-4" />
                    </Link>
                </Button>

                <Button

                    variant="outline"
                    size="lg"
                    className="h-12 rounded-xl border-[#D7E3DA] bg-white px-6 text-[#24382B] hover:bg-[#EDF4EF]"
                >
                    <a href="#features">
                        Explore features <ChevronRight className="ml-1 size-4" />
                    </a>
                </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-gray-500">
                {[
                    "Easy inventory tracking",
                    "Clear financial records",
                    "Mobile-friendly design",
                ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                        <Check className="size-4 text-[#0E5C33]" />
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}