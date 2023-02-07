/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'

const features = [

  { name: 'Kakovost', description: 'Vse naše rabljene avtomobile dobro pregledamo, da zagotovimo najvišjo kakovost.' },
  { name: 'Garancija', description: 'Vsak rabljeni avtomobil, ki ga kupite pri nas, ima 12 mesecev garancije.' },
  { name: 'Uvoz vozil', description: 'Ponujamo hiter uvoz vozil po naročilu.' },
  { name: 'Ugodno', description: 'Cene naših avtomibilov so konkurenčne.' },

]

export default function Features() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="text-base font-semibold text-red-600 uppercase tracking-wide">Zakaj kupiti avtomobil pri nas</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">Kaj nudimo?</p>
          <p className="mt-4 text-lg text-gray-500">
            Kupovanje rabljenega avtomobila ponuja številne prednosti, kot so nižja cena, manjša izguba vrednosti.
            Ob upoštevanju pravega pregleda in dobrega prodajalca, lahko rabljen avtomobil postane odlična naložba.
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}