import Image from "next/image"
import { Leaf, Award, Users, Shield } from "lucide-react"
import histoire from "@/assets/histoire.png"
import apropos1 from "@/assets/apropos1.png"
import apropos2 from "@/assets/apropos2.png"
import apropos3 from "@/assets/apropos3.png"
import apropos4 from "@/assets/apropos4.png"

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero section */}
      <section className="bg-green-50 dark:bg-green-900/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À Propos de <span className="text-green-600 dark:text-green-400">CHÊNECHAR</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Découvrez notre histoire, nos valeurs et notre engagement pour un charbon 100% écologique.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
              <div className="h-1 w-20 bg-green-500 mb-8"></div>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                CHÊNECHAR est née de la passion pour la nature et la cuisine. Nous avons constaté que le charbon traditionnel était souvent produit avec peu d'égard pour l'environnement, générant une empreinte carbone importante et des fumées nocives.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                C'est pourquoi nous avons décidé de créer un charbon différent : fabriqué à partir de chêne provenant de forêts gérées durablement, produit selon des méthodes traditionnelles améliorées, et respectueux de la nature tout en offrant des performances exceptionnelles.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Aujourd'hui, CHÊNECHAR représente l'alliance parfaite entre tradition et innovation écologique, avec un seul objectif : vous offrir le meilleur charbon pour vos grillades tout en préservant notre planète.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl h-[500px]">
              <Image
                src={histoire}
                alt="L'histoire de CHÊNECHAR"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Nos Valeurs</h2>
            <div className="h-1 w-20 bg-green-500 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Les principes qui guident chacune de nos actions et décisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
              <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Écologie</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nous plaçons la protection de l'environnement au cœur de chaque décision et processus de fabrication.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
              <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Award className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Qualité</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nous ne faisons aucun compromis sur la qualité, garantissant un produit d'excellence pour chaque utilisation.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
              <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Communauté</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nous soutenons les communautés locales par des emplois durables et des pratiques commerciales équitables.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
              <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Transparence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nous sommes transparents sur nos méthodes de production et l'origine de nos matières premières.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Process section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Notre Processus</h2>
            <div className="h-1 w-20 bg-green-500 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Découvrez comment nous transformons le bois de chêne en charbon de qualité supérieure, respectueux de l'environnement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={apropos1}
                   alt="Sélection du bois"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="bg-green-100 dark:bg-green-900 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  <span className="font-bold text-green-700 dark:text-green-400">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Sélection du Bois</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Nous sélectionnons rigoureusement du bois de chêne issu de forêts gérées durablement, garantissant la qualité et la traçabilité.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={apropos2}
                  alt="Carbonisation Écologique"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="bg-green-100 dark:bg-green-900 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  <span className="font-bold text-green-700 dark:text-green-400">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Carbonisation Écologique</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Notre méthode de carbonisation contrôlée permet d'obtenir un charbon uniforme tout en minimisant les émissions nocives.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={apropos3}
                  alt="Contrôle Qualité"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="bg-green-100 dark:bg-green-900 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  <span className="font-bold text-green-700 dark:text-green-400">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Contrôle Qualité</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Chaque lot est rigoureusement testé pour garantir les performances thermiques, la durée de combustion et l'absence de contaminants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Environmental Impact section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px]">
                <Image
                src={apropos4}
                  alt="Notre impact environnemental"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Notre Impact Environnemental</h2>
                <div className="h-1 w-20 bg-green-500 mb-8"></div>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                  Chez CHÊNECHAR, notre engagement environnemental se traduit par des actions concrètes :
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-green-100 dark:bg-green-900 rounded-full p-1 mr-3 mt-1">
                      <Leaf className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Pour chaque arbre utilisé, nous en plantons deux nouveaux.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 dark:bg-green-900 rounded-full p-1 mr-3 mt-1">
                      <Leaf className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Réduction de 80% des émissions par rapport aux méthodes traditionnelles.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 dark:bg-green-900 rounded-full p-1 mr-3 mt-1">
                      <Leaf className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Emballages biodégradables et/ou recyclables.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 dark:bg-green-900 rounded-full p-1 mr-3 mt-1">
                      <Leaf className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Utilisation d'énergie renouvelable dans notre processus de production.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}