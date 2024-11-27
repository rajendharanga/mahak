import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-orange-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-orange-400">About</Link></li>
              <li><Link href="/inventory" className="hover:text-orange-400">Inventory</Link></li>
              <li><Link href="/opportunities" className="hover:text-orange-400">Opportunities</Link></li>
              <li><Link href="/contact" className="hover:text-orange-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-orange-400">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-orange-400">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-400"><Facebook /></a>
              <a href="#" className="hover:text-orange-400"><Twitter /></a>
              <a href="#" className="hover:text-orange-400"><Instagram /></a>
              <a href="#" className="hover:text-orange-400"><Linkedin /></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="flex">
              <input type="email" placeholder="Your email" className="px-4 py-2 w-full" />
              <button type="submit" className="bg-orange-600 text-white px-4 py-2 hover:bg-orange-700 transition duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Maha Kumbh Mela 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

