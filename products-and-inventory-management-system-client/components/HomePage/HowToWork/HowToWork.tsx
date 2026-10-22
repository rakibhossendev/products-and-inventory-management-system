export default function HowToWork() {

    return (
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
    )
}