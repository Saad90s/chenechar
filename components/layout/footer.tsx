import Link from 'next/link'
import { Instagram, Facebook, Twitter, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight">
              <span className="text-green-500">CHÊNE</span>
              <span>CHAR</span>
            </h3>
            <p className="text-gray-400 max-w-xs">
              Charbon végétal 100% écologique. Moins d'émissions, plus de nature.
            </p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:text-green-500">
                  <Instagram className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:text-green-500">
                  <Facebook className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:text-green-500">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-green-500 transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/produits" className="text-gray-400 hover:text-green-500 transition">
                  Nos Produits
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-400 hover:text-green-500 transition">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/actualites" className="text-gray-400 hover:text-green-500 transition">
                  Actualités
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-green-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <strong className="text-white">Email:</strong> info@chenechar.com
              </li>
              <li className="text-gray-400">
                <strong className="text-white">Téléphone:</strong> +2126 17 80 33 91
              </li>
              <li className="text-gray-400">
                <Link 
                  href="https://wa.me/212617803391?text=Bonjour%2C%20je%20souhaite%20commander%20le%20charbon%20écologique%20CHÊNECHAR."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline"
                >
                  Commander sur WhatsApp
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Inscrivez-vous pour recevoir nos actualités et offres spéciales.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Votre email" 
                className="bg-gray-800 border-gray-700"
              />
              <Button className="bg-green-600 hover:bg-green-700">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} CHÊNECHAR. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}