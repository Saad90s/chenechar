import { Button } from "@/components/ui/button"
import { ShoppingCart, Leaf, Flame, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import produit1 from "@/assets/produit1.png"
import produit2 from "@/assets/produit2.png"
import produit3 from "@/assets/produit3.png"

export default function ProductsPage() {
  return (
    <div className="pt-24">
      {/* Hero section */}
      <section className="bg-green-50 dark:bg-green-900/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos <span className="text-green-600 dark:text-green-400">Produits</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Découvrez notre gamme de charbons écologiques de qualité supérieure, conçus pour des grillades exceptionnelles tout en respectant l'environnement.
            </p>
          </div>
        </div>
      </section>

      {/* Main product section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-96 lg:h-auto">
                <Image
                  src={produit1}
                   alt="CHÊNECHAR Premium"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <span className="inline-block bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Premium
                </span>
                <h2 className="text-3xl font-bold mb-4">CHÊNECHAR Premium</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Notre charbon de chêne premium offre une expérience de grillade exceptionnelle avec son allumage rapide, sa chaleur intense et sa longue durée de combustion. 100% naturel et écologique, c'est le choix parfait pour les amateurs de barbecue exigeants.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-green-100 dark:bg-green-800 rounded-full p-2 mr-4">
                      <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">100% Naturel</h3>
                      <p className="text-gray-600 dark:text-gray-400">Fabriqué exclusivement à partir de bois de chêne, sans additifs chimiques.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 dark:bg-green-800 rounded-full p-2 mr-4">
                      <Flame className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Performance Supérieure</h3>
                      <p className="text-gray-600 dark:text-gray-400">Combustion longue durée, chaleur constante et moins de cendres.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-3">
                    <span className="font-medium">Format</span>
                    <span>Sac de 3kg</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-3">
                    <span className="font-medium">Durée de combustion</span>
                    <span>2-3 heures</span>
                  </div>
                  <div className="flex items-center justify-between pb-3">
                    <span className="font-medium">Temps d'allumage</span>
                    <span>10-15 minutes</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link 
                    href="https://wa.me/212XXXXXXXXX?text=Bonjour%2C%20je%20souhaite%20commander%20le%20charbon%20écologique%20CHÊNECHAR%20Premium%20format%203kg."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Commander sur WhatsApp
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Other products */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="relative h-48 rounded-lg overflow-hidden mb-6">
                <Image
                  src={produit2}
                   alt="CHÊNECHAR Professionnel"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">CHÊNECHAR Professionnel</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Format spécial pour les restaurateurs et professionnels. Grande capacité avec une combustion optimisée pour un usage intensif.
              </p>
              <div className="flex items-center justify-between border-b pb-3 mb-3">
                <span className="font-medium">Format</span>
                <span>Sac de 10kg</span>
              </div>
              <div className="flex justify-between items-center mt-6">
                <Link 
                  href="https://wa.me/212XXXXXXXXX?text=Bonjour%2C%20je%20souhaite%20commander%20le%20charbon%20écologique%20CHÊNECHAR%20Professionnel."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Commander</Button>
                </Link>
                <Link href="/produits/professionnel">
                  <Button variant="ghost">
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="relative h-48 rounded-lg overflow-hidden mb-6">
                <Image
                  src={produit3}
                  alt="CHÊNECHAR Allume-feu Naturel"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Allume-feu Naturel</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Notre allume-feu 100% naturel à base de bois et de cire végétale pour un démarrage rapide et écologique.
              </p>
              <div className="flex items-center justify-between border-b pb-3 mb-3">
                <span className="font-medium">Format</span>
                <span>Boîte de 24 cubes</span>
              </div>
              <div className="flex justify-between items-center mt-6">
                <Link 
                  href="https://wa.me/212XXXXXXXXX?text=Bonjour%2C%20je%20souhaite%20commander%20les%20allume-feu%20naturels%20CHÊNECHAR."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Commander</Button>
                </Link>
                <Link href="/produits/allume-feu">
                  <Button variant="ghost">
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Questions fréquentes
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Comment choisir le format qui me convient ?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Le sac de 3kg est parfait pour un usage occasionnel ou familial, tandis que le format 10kg est plus économique pour un usage fréquent ou professionnel.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Comment allumer correctement mon charbon ?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Utilisez nos allume-feu naturels, placez-les sous une pyramide de charbon, allumez-les et laissez le charbon s'embraser pendant 10-15 minutes jusqu'à ce qu'il soit recouvert d'une fine couche de cendre blanche.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Quelle est la durée de conservation du charbon ?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Conservé dans un endroit sec, notre charbon se conserve parfaitement pendant plusieurs années sans perdre ses qualités.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-green-600 dark:bg-green-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Prêt à commander ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Passez commande directement par WhatsApp et recevez votre charbon écologique CHÊNECHAR rapidement.
          </p>
          <Link 
            href="https://wa.me/212XXXXXXXXX?text=Bonjour%2C%20je%20souhaite%20commander%20le%20charbon%20écologique%20CHÊNECHAR."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Commander sur WhatsApp
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}