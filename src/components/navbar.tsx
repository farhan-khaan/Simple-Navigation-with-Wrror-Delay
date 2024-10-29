'use client'
import Link from "next/link";

export default function Navbar() {
    return (
        <div> 
            <nav className="bg-orange-600 text-white h-12 py-4 px-3 flex justify-between items-center"> 
            
                <div>
                <h1 className="text-2xl"> The Khan's Academy</h1>
                </div>
            
            <div>
                <ul className="flex space-x-4">
                    <li><Link href="/" className="hover:text-black">Home</Link></li>
                    <li><Link href="/introduction" className="hover:text-black">Introduction</Link></li>
                    <li><Link href="/goal" className="hover:text-black">Goal</Link></li>
                    <li><Link href="/registration" className="hover:text-black">Registration</Link></li>
                    <li><Link href="/about" className="hover:text-black">About us</Link></li>
                </ul>
            </div>

            <div>
                <ul>
                    <li><Link href="#!" className="flex hover:text-black"> Student Portal</Link></li>
                </ul>
            </div>
        </nav>
    </div>
    )
}
