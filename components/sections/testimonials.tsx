"use client"

import { useEffect, useRef } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

type TestimonialProps = {
  name: string
  role: string
  content: string
  avatar: string
  index: number
}

const Testimonial = ({ name, role, content, avatar, index }: TestimonialProps) => {
  const testimonialRef = useRef<HTMLDivElement>(null)

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

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current)
    }

    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current)
      }
    }
  }, [])

  return (
    <div 
      ref={testimonialRef}
      className={cn(
        "bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 opacity-0 translate-y-8 transition-all duration-700",
        `delay-[${index * 150}ms]`
      )}
    >
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="h-5 w-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6">"{content}"</p>
      <div className="flex items-center">
        <Avatar className="h-12 w-12 mr-4">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sofia Berrada",
      role: "Chef Restaurateur",
      content: "Ce charbon a révolutionné notre cuisine! Une chaleur constante, sans odeurs désagréables et nos clients adorent la saveur qu'il donne à nos grillades.",
      avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=120"
    },
    {
      name: "Karim Alaoui",
      role: "Amateur de Barbecue",
      content: "Depuis que j'ai découvert CHÊNECHAR, je ne reviendrai jamais aux charbons classiques. L'allumage est rapide, la chaleur dure longtemps et je me sens bien d'utiliser un produit écologique.",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=120"
    },
    {
      name: "Hamid Benani",
      role: "Propriétaire de Grill House",
      content: "Pour notre restaurant, la qualité du charbon est essentielle. CHÊNECHAR offre une combustion parfaite qui met en valeur nos viandes, tout en restant fidèle à nos valeurs environnementales.",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=120"
    }
  ]

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ce que disent nos clients
          </h2>
          <div className="h-1 w-20 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Découvrez pourquoi les professionnels et les amateurs choisissent CHÊNECHAR pour leurs grillades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              avatar={testimonial.avatar}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}