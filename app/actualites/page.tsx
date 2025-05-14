import Link from "next/link"
import Image from "next/image"
import { Leaf, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import actualites1 from "@/assets/actualites1.png"
import actualites2 from "@/assets/actualites2.png"
import actualites3 from "@/assets/actualites3.png"
import actualites4 from "@/assets/actualites4.png"
import actualites5 from "@/assets/actualites5.png"

const blogPosts = [
  {
    id: 1,
    title: "Les avantages écologiques du charbon végétal",
    excerpt: "Découvrez comment notre processus de fabrication réduit l'impact sur l'environnement tout en offrant un produit de qualité supérieure.",
    date: "12 Mai 2023",
    category: "Écologie",
    image: actualites1,
    slug: "avantages-ecologiques-charbon-vegetal"
  },
  {
    id: 2,
    title: "5 conseils pour un barbecue parfait",
    excerpt: "Nos astuces pour tirer le meilleur parti de notre charbon et réussir vos grillades à tous les coups.",
    date: "28 Juin 2023",
    category: "Conseils",
    image: actualites2,
    slug: "conseils-barbecue-parfait"
  },
  {
    id: 3,
    title: "Notre engagement pour une production durable",
    excerpt: "Comment CHÊNECHAR s'engage au quotidien pour préserver les forêts et promouvoir une économie circulaire.",
    date: "15 Juillet 2023",
    category: "Entreprise",
    image: actualites3,
    slug: "engagement-production-durable"
  },
  {
    id: 4,
    title: "La qualité du charbon : comment la reconnaître ?",
    excerpt: "Les critères essentiels pour évaluer la qualité d'un charbon et pourquoi CHÊNECHAR se démarque de la concurrence.",
    date: "3 Août 2023",
    category: "Produits",
    image: actualites4,
    slug: "qualite-charbon-comment-reconnaitre"
  },
  {
    id: 5,
    title: "Recettes de saison pour votre barbecue",
    excerpt: "Découvrez nos recettes favorites pour sublimer vos grillades estivales avec le charbon CHÊNECHAR.",
    date: "22 Août 2023",
    category: "Recettes",
    image: actualites5,
    slug: "recettes-saison-barbecue"
  }
]

export default function BlogPage() {
  return (
    <div className="pt-24">
      {/* Hero section */}
      <section className="bg-green-50 dark:bg-green-900/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Actualités & <span className="text-green-600 dark:text-green-400">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Découvrez nos derniers articles, conseils d'utilisation et engagements écologiques.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-96 lg:h-auto">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <span className="inline-flex items-center bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                    <Leaf className="h-4 w-4 mr-1" />
                    {blogPosts[0].category}
                  </span>
                  <span className="ml-4 text-gray-500 dark:text-gray-400 flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {blogPosts[0].date}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <Link href={`/actualites/${blogPosts[0].slug}`}>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Lire l'article
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog posts grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link href={`/actualites/${post.slug}`} key={post.id} className="group">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="relative h-56">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="inline-flex items-center bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="ml-4 text-gray-500 dark:text-gray-400 text-sm">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="text-green-600 dark:text-green-400 font-medium">
                      Lire la suite →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter section */}
      <section className="py-16 bg-green-50 dark:bg-green-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Abonnez-vous à notre newsletter
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Recevez nos derniers articles, conseils et offres spéciales directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800"
              />
              <Button className="bg-green-600 hover:bg-green-700">
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}