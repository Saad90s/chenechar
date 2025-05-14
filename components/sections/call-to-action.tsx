"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Phone, Mail } from 'lucide-react'

export default function CallToAction() {
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ctaRef.current) {
      observer.observe(ctaRef.current)
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current)
      }
    }
  }, [])

  return (
    <section className="py-20 bg-green-700 dark:bg-green-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-green-600 dark:bg-green-700 rounded-full opacity-30"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-green-600 dark:bg-green-700 rounded-full opacity-20"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-green-600 dark:bg-green-700 rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={ctaRef}
          className="max-w-3xl mx-auto text-center text-white opacity-0 translate-y-8 transition-all duration-1000"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à essayer le meilleur charbon écologique?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Commandez dès maintenant et découvrez la différence pour vos barbecues et grillades.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link 
              href="https://wa.me/212XXXXXXXXX?text=Bonjour%2C%20je%20souhaite%20commander%20le%20charbon%20écologique%20CHÊNECHAR."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 px-8">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Commander sur WhatsApp
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-black hover:bg-white/10 px-8">
                Nous contacter
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-center">
              <Phone className="mr-3 h-5 w-5" />
              <span>+212 XXXXXXXX</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-3 h-5 w-5" />
              <span>contact@chenechar.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}