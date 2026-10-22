import {
  BarChart3,
  Clock3,
  CreditCard,
  Package,
  ShoppingCart,
  Wallet,
} from "lucide-react";
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

export default function FeaturesSection(){

    return (
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
    )
}