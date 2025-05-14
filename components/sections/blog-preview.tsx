"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import conseils from '@/assets/conseils.png'
import durable  from '@/assets/durable.png'
import avantages from '@/assets/avantages.png'

type BlogPostProps = {
  title: string
  excerpt: string
  date: string
  image: any // Changed type to any
  slug: string
  index: number
}

const BlogPost = ({ title, excerpt, date, image, slug, index }: BlogPostProps) => {
  const postRef = useRef<HTMLDivElement>(null)

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

    if (postRef.current) {
      observer.observe(postRef.current)
    }

    return () => {
      if (postRef.current) {
        observer.unobserve(postRef.current)
      }
    }
  }, [])

  return (
    <div 
      ref={postRef}
      className={cn(
        "bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden opacity-0 translate-y-8 transition-all duration-700",
        `delay-[${index * 150}ms]`
      )}
    >
      <div className="relative h-80 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
        <h3 className="text-xl font-bold mt-2 mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{excerpt}</p>
        <Link href={`/actualites/${slug}`}>
          <Button variant="link" className="text-green-600 dark:text-green-400 px-0">
            Lire la suite <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default function BlogPreview() {
  const posts = [
    {
      title: "Les avantages écologiques du charbon végétal",
      excerpt: "Découvrez comment notre processus de fabrication réduit l'impact sur l'environnement tout en offrant un produit de qualité supérieure.",
      date: "12 Mai 2023",
      image: avantages, // Passed the variable directly
      slug: "avantages-ecologiques-charbon-vegetal"
    },
    {
      title: "5 conseils pour un barbecue parfait",
      excerpt: "Nos astuces pour tirer le meilleur parti de notre charbon et réussir vos grillades à tous les coups.",
      date: "28 Juin 2023",
      image: conseils, // Passed the variable directly
      slug: "conseils-barbecue-parfait"
    },
    {
      title: "Notre engagement pour une production durable",
      excerpt: "Comment CHÊNECHAR s'engage au quotidien pour préserver les forêts et promouvoir une économie circulaire.",
      date: "15 Juillet 2023",
      image: durable, // Passed the variable directly
      slug: "engagement-production-durable"
    }
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Actualités & Conseils
          </h2>
          <div className="h-1 w-20 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Découvrez nos derniers articles, conseils d'utilisation et engagements écologiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              image={post.image}
              slug={post.slug}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/actualites">
            <Button variant="outline" size="lg">
              Voir toutes les actualités
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}