import {
  BarChart3,
  LayoutDashboard,
  Package,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import { Card } from "@/components/ui/card";

export default function PreviewCart() {


    return (
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
                                className={`w-full rounded-t-md ${index === 5 ? "bg-[#0E5C33]" : "bg-[#D7EBDD]"
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

    )
}