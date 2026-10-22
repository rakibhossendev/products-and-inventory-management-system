
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Check,
  ChevronRight,
  Clock3,
  CreditCard,
  LayoutDashboard,
  Package,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  Wallet,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";


const features = [
  {
    icon: Package,
    title: "Product Management",
    description:
      "Organize products, prices, categories, and stock quantities in one place.",
  },
  {
    icon: ShoppingCart,
    title: "Sales Tracking",
    description:
      "Record sales, monitor transactions, and keep your inventory up to date.",
  },
  {
    icon: CreditCard,
    title: "Credit Management",
    description:
      "Track customer dues, repayments, and supplier balances without messy notebooks.",
  },
  {
    icon: BarChart3,
    title: "Business Insights",
    description:
      "Understand your sales, expenses, and estimated profits through clear reports.",
  },
  {
    icon: Clock3,
    title: "Expiry Alerts",
    description:
      "Identify products approaching their expiry dates and reduce avoidable waste.",
  },
  {
    icon: Wallet,
    title: "Cash Management",
    description:
      "Keep business income, expenses, and cash balances organized.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F7FAF8] text-[#18251D]">
      {/* Navbar */}
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

      {/* Hero */}
      <section className="relative px-5 pb-20 pt-16 sm:pt-24 lg:px-8 lg:pb-28">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-0 size-[500px] -translate-x-1/2 rounded-full bg-[#DDF2E3]/60 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
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

          {/* Dashboard Preview */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 -z-10 rounded-[32px] bg-[#DDEFE2]/70 blur-2xl" />

            <Card className="overflow-hidden rounded-2xl border-[#DFE8E1] bg-white p-0 shadow-2xl shadow-green-950/10">
              <div className="flex items-center justify-between border-b border-[#E7EEE8] px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-[#E2F3E8] text-[#0E5C33]">
                    <LayoutDashboard className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Business overview</p>
                    <p className="text-xs text-gray-500">Dashboard preview</p>
                  </div>
                </div>
                <span className="rounded-full bg-[#E2F3E8] px-3 py-1 text-xs font-medium text-[#0E5C33]">
                  Sample data
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 p-4 sm:gap-4 sm:p-5">
                <div className="rounded-xl border border-[#E5ECE6] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{`Today's sales`}</span>
                    <ShoppingCart className="size-4 text-[#0E5C33]" />
                  </div>
                  <p className="mt-3 text-2xl font-bold tracking-tight">৳18,450</p>
                  <p className="mt-1 text-xs text-gray-500">Illustrative amount</p>
                </div>

                <div className="rounded-xl border border-[#E5ECE6] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Gross profit</span>
                    <TrendingUp className="size-4 text-[#0E5C33]" />
                  </div>
                  <p className="mt-3 text-2xl font-bold tracking-tight">৳3,250</p>
                  <p className="mt-1 text-xs text-gray-500">Illustrative amount</p>
                </div>
              </div>

              <div className="mx-4 mb-4 rounded-xl border border-[#E5ECE6] p-4 sm:mx-5 sm:mb-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">Sales overview</p>
                    <p className="mt-1 text-xs text-gray-500">
                      Illustrative weekly activity
                    </p>
                  </div>
                  <BarChart3 className="size-5 text-[#0E5C33]" />
                </div>

                <div className="flex h-28 items-end justify-between gap-3">
                  {[42, 65, 48, 82, 58, 94, 72].map((height, index) => (
                    <div
                      key={index}
                      className="flex h-full flex-1 items-end"
                    >
                      <div
                        style={{ height: `${height}%` }}
                        className={`w-full rounded-t-md ${
                          index === 5 ? "bg-[#0E5C33]" : "bg-[#D7EBDD]"
                        }`}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex justify-between text-[11px] text-gray-400">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (day) => (
                      <span key={day}>{day}</span>
                    )
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 px-4 pb-5 sm:px-5">
                <div className="flex items-center gap-3 rounded-xl bg-amber-50 p-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                    <Package className="size-4" />
                  </div>
                  <div>
                    <p className="text-xs text-amber-800">Low stock</p>
                    <p className="text-sm font-bold text-amber-950">5 products</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-[#EDF7EF] p-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#D8EEDF] text-[#0E5C33]">
                    <ShieldCheck className="size-4" />
                  </div>
                  <div>
                    <p className="text-xs text-[#386347]">Stock status</p>
                    <p className="text-sm font-bold text-[#0E5C33]">
                      Monitor stock
                    </p>
                  </div>
                </div>
              </div>
            </Card>

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
      <section id="features" className="border-y border-[#E3EBE5] bg-white px-5 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0E5C33]">
              Everything in one place
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              The essentials your shop needs
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Spend less time managing notebooks and more time understanding
              how your business operates.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <Card
                  key={feature.title}
                  className="group rounded-2xl border-[#E3EBE5] bg-white p-6 shadow-none transition duration-200 hover:-translate-y-1 hover:border-[#B8D9C2] hover:shadow-lg hover:shadow-green-950/5"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-[#EAF5ED] text-[#0E5C33] transition group-hover:bg-[#0E5C33] group-hover:text-white">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="px-5 py-20 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0E5C33]">
                Simple workflow
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                From incoming stock to clear business records.
              </h2>
              <p className="mt-5 max-w-lg leading-7 text-gray-600">
                Keep daily operations connected. Record purchases, sell
                products, update inventory, and review financial summaries
                through a consistent workflow.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  title: "Record purchases",
                  detail: "Add products, quantities, and purchase costs.",
                },
                {
                  number: "02",
                  title: "Track every sale",
                  detail: "Record transactions and update stock automatically.",
                },
                {
                  number: "03",
                  title: "Review your numbers",
                  detail: "Check cash, outstanding dues, and profit reports.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="flex gap-4 rounded-2xl border border-[#DFE8E1] bg-white p-5"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#E2F3E8] text-sm font-bold text-[#0E5C33]">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
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

      {/* Footer */}
      <footer className="border-t border-[#DFE8E1] bg-white px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Boxes className="size-5 text-[#0E5C33]" />
            Stockwise
          </Link>

          <p className="text-sm text-gray-500">
            A simpler way to manage everyday retail operations.
          </p>

          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Stockwise
          </p>
        </div>
      </footer>
    </main>
  );
}
