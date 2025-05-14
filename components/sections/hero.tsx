"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShoppingCart, ChevronDown } from 'lucide-react'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const scrollPosition = window.scrollY
      heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed py-32"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.4)), url(https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=1920)'
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="text-green-400">CHÊNE</span>
            <span>CHAR</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light italic mb-6">
            C'est pas du bois, c'est du feu
          </p>
          <div className="h-px w-24 bg-green-500 mx-auto my-6"></div>
          <p className="text-xl md:text-2xl mb-8">
            Charbon végétal 100% écologique
          </p>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Moins d'émissions, plus de nature. Découvrez notre charbon écologique premium pour des grillades exceptionnelles tout en respectant l'environnement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link 
              href="https://wa.me/212XXXXXXXXX?text=Bonjour%2C%20je%20souhaite%20commander%20le%20charbon%20écologique%20CHÊNECHAR."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Commander sur WhatsApp
              </Button>
            </Link>
            <Link href="/produits">
              <Button variant="outline" size="lg" className="border-white text-black hover:bg-black hover:text-white px-8 py-6 text-lg">
                Découvrir nos produits
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 text-center">
        <a 
          href="#features"
          className="inline-flex items-center justify-center text-white hover:text-green-400 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </a>
      </div>
    </div>
  )
}