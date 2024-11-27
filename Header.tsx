import Link from 'next/link'
import { Search } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-orange-600">Maha Kumbh Mela 2025</Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-orange-600">Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-orange-600">About</Link>
          <Link href="/inventory" className="text-gray-600 hover:text-orange-600">Inventory</Link>
          <Link href="/opportunities" className="text-gray-600 hover:text-orange-600">Opportunities</Link>
          <Link href="/contact" className="text-gray-600 hover:text-orange-600">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition duration-300">
            Advertise Now
          </button>
          <div className="relative">
            <input type="text" placeholder="Search" className="pl-8 pr-2 py-1 border rounded" />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
      </div>
    </header>
  )
}

