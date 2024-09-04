import Link from "next/link";

export default function Header() {
    return (
        <header className="px-4 lg:px-6 py-2.5 bg-gray-800 text-white">
            <Link href={"/"}>
                UI-Practice
            </Link>
        </header>
    );
}