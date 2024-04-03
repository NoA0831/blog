import "../../globals.css"
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-gray-800 h-16 p-4 flex justify-between items-center">
            <div>
                <h1 className="text-white text-xl font-semibold">NoA Tech Blog</h1>
            </div>
            <nav className="space-x-4">
                <Link href="/Search" className='text-white hover:text-gray-300'>
                    Search
                </Link>
                <Link href="/profile" className="text-white hover:text-gray-300">
                    Profile
                </Link>
            </nav>
        </header>
    );
}
