"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import image1 from '@/assets/1.png'
import image2 from '@/assets/2.png'
import image3 from '@/assets/3.png'
import image4 from '@/assets/4.png'
import image5 from '@/assets/5.png'

export default function InstagramFeed() {
  const instagramPosts = [
    image1,
    image2,
    image3,
    image4,
    image5,
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % instagramPosts.length)
    }, 2500) // Change d'image toutes les 2.5 secondes

    return () => clearInterval(interval)
  }, [instagramPosts.length])

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Suivez-nous sur Instagram
          </h2>
          <div className="h-1 w-20 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
            Découvrez nos dernières publications, conseils et inspirations.
          </p>
          <p className="text-xl font-medium text-green-600 dark:text-green-400 mb-6">
            @chenechar
          </p>
        </div>

        <div className="relative w-full max-w-md mx-auto aspect-square">
          <Image
            src={instagramPosts[current]}
            alt="Instagram post"
            width={400}
            height={400}
            className="w-full h-full object-cover rounded-lg transition-all duration-700"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Instagram className="text-white h-8 w-8" />
          </div>
          {/* Petits points pour indiquer la position */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {instagramPosts.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full ${current === idx ? 'bg-green-500' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="https://www.instagram.com/chenechar/?hl=fr" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              <Instagram className="mr-2 h-5 w-5" />
              Suivre sur Instagram
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}