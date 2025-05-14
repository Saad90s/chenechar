"use client"

import { useEffect, useRef } from 'react'
import { Leaf, Wind, Flame, Recycle } from 'lucide-react'
import { cn } from '@/lib/utils'

type FeatureProps = {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

const Feature = ({ icon, title, description, index }: FeatureProps) => {
  const featureRef = useRef<HTMLDivElement>(null)

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

    if (featureRef.current) {
      observer.observe(featureRef.current)
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current)
      }
    }
  }, [])

  return (
    <div 
      ref={featureRef}
      className={cn(
        "bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg opacity-0 translate-y-8 transition-all duration-700",
        `delay-[${index * 150}ms]`
      )}
    >
      <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
        <div className="text-green-600 dark:text-green-400">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}

export default function Features() {
  const features = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "100% Écologique",
      description: "Fabriqué à partir de bois de chêne issu de forêts gérées durablement, sans produits chimiques ajoutés."
    },
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Sans Fumée Nocive",
      description: "Profitez de vos barbecues sans fumée toxique, pour des grillades plus saines et agréables."
    },
    {
      icon: <Flame className="h-8 w-8" />,
      title: "Puissance Calorifique",
      description: "Chaleur intense et durable, idéale pour tous types de grillades avec une combustion constante."
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "Empreinte Carbone Réduite",
      description: "Production locale et durable qui contribue à la réduction de l'impact environnemental."
    }
  ]

  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pourquoi choisir <span className="text-green-600 dark:text-green-400">CHÊNECHAR</span> ?
          </h2>
          <div className="h-1 w-20 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Notre charbon végétal combine performances exceptionnelles et respect de l'environnement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}