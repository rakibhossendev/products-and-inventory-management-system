import { Boxes } from "lucide-react";
import Link from "next/link";

export default function Footer() {

    return (
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
    )
}