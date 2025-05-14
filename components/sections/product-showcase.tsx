"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import imageproduit from '@/assets/imageproduit.png'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Check, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ProductShowcase() {
  const productRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-x-0')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (productRef.current) {
      observer.observe(productRef.current)
    }

    if (benefitsRef.current) {
      observer.observe(benefitsRef.current)
    }

    return () => {
      if (productRef.current) {
        observer.unobserve(productRef.current)
      }
      if (benefitsRef.current) {
        observer.unobserve(benefitsRef.current)
      }
    }
  }, [])

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div 
            ref={productRef}
            className="w-full lg:w-1/2 opacity-0 -translate-x-16 transition-all duration-1000"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={imageproduit}
                alt="Charbon écologique CHÊNECHAR"
                width={800}
                height={600}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <div className="inline-block bg-green-600 px-3 py-1 text-sm rounded-full mb-3">
                  Premium
                </div>
                <h3 className="text-2xl font-bold mb-1">Charbon Végétal Premium</h3>
                <p className="opacity-90">Disponible en sacs de 3kg et 5kg</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold mb-6">
                Notre charbon de <span className="text-green-600 dark:text-green-500">qualité supérieure</span>
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                Le charbon CHÊNECHAR est fabriqué à partir de bois de chêne de haute qualité, soigneusement sélectionné et transformé selon des méthodes traditionnelles respectueuses de l'environnement.
              </p>
              
              <ul 
                ref={benefitsRef}
                className="space-y-4 mb-8 opacity-0 translate-x-16 transition-all duration-1000 delay-300"
              >
                {[
                  "Allumage rapide et sans produits chimiques",
                  "Durée de combustion exceptionnelle",
                  "Chaleur constante et puissante",
                  "100% naturel et sans additifs",
                  "Production locale et responsable",
                  "Faible taux de cendres"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-green-100 dark:bg-green-900 rounded-full p-1 mr-3 mt-1">
                      <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="https://wa.me/212XXXXXXXXX?text=Bonjour%2C%20je%20souhaite%20commander%20le%20charbon%20écologique%20CHÊNECHAR."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Commander maintenant
                  </Button>
                </Link>
                
                <Link href="/produits">
                  <Button variant="outline" size="lg">
                    En savoir plus
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}