import Link from "next/link";

export default function UserDashboardMenu(){


    return (
        <header>
            <nav>
                <Link href={"/add-category"}>Add Products Category</Link>
                <Link href={"/add-product"}>Add Products</Link>
            </nav>
        </header>
    )
}