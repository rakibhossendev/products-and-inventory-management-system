import Link from "next/link";
import {
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";



export default function Benefits() {

    return (
        <section id="benefits" className="px-5 pb-20 lg:px-8">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#0E5C33] px-6 py-12 text-white sm:px-12 sm:py-16">
                <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                    <div>
                        <p className="text-sm font-semibold text-green-200">
                            A better way to manage your shop
                        </p>
                        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                            Bring your products, sales, and finances together.
                        </h2>
                        <p className="mt-4 max-w-xl leading-7 text-green-100">
                            Start with the essentials and build a clearer picture of your
                            everyday retail operations.
                        </p>
                    </div>

                    <Button
                        size="lg"
                        className="h-12 rounded-xl bg-white px-6 text-[#0E5C33] hover:bg-green-50"
                    >
                        <Link href="/sign-up">
                            Create your account <ArrowRight className="ml-2 size-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}