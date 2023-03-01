/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/

import Image from 'next/image';
import Form from './Form'
import Link from "next/link";

export default function Example() {
  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
        <div className="text-base max-w-prose mx-auto lg:max-w-none">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Uvoz vozil</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Ne najdete željenega vozila v naši ponudbi?
          </p>
        </div>
        <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">

        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div className="relative z-10">
            <div className="prose prose-red text-gray-500 mx-auto lg:max-w-none">
              <p>
              Ne najdete željenega vozila v naši ponudbi?

Kupovanje rabljenega vozila od kupca zahteva sprejemanje kompromisov. Če želite imeti vozilo po vaših željah, vam ne preostane drugega, kot da kupite novega. Vendar novo vozilo ni poceni in danes marsikateri evro več v denarnici pomeni ogromno.
              </p>

              <p className={"mt-3"}>
              Pri rabljenem vozilu je potrebno marsikaj spregledati ali sprejeti pomanjkljivosti. Da bi bilo rabljeno vozilo čim bolj podobno vašim željam, potrebujete veliko časa in strpnosti pri iskanju. In zakaj bi to počeli vi? Ni vam treba. Pokličite in nam sporočite vaše želje. Našli bomo primerno vozilo za vas. 
              </p>
              <p className={"mt-3"}>
                
Že vrsto let imamo izkušnje s poslovanjem na mednarodnih trgih. Prav tako smo vzpostavili stik z mnogimi ponudniki rabljenih in novih vozil, tako v tujini kot tudi pri nas v Sloveniji, katerih ponudba lahko ustreza ravno vam. Specializirali smo se za prodajo vozil po naročilu stranke.
              </p>
              
              <p className={"mt-3"}>
              Zaupajte nam vaše želje. Morda vam lahko pomagamo tudi pri izbiri znamke, tipa vozila ali celo motorne različice. Naše izkušnje na področju poznavanja vozil in njihove zgodovine vam bodo prav gotovo koristile. Naš cilj je vaše zadovoljstvo z vozilom - tako vsebinsko kot časovno.
              </p>
            </div>
            <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
              <div className="rounded-md shadow">
                <Link
                  href="#forma"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                >
                  Obrazec za uvoz
                </Link>
              </div>

            </div>
          </div>
          <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
            </svg>
            <blockquote className="relative bg-white rounded-lg shadow-lg">
              <img className={"rounded-lg"} src={"/bmw.png"} alt="bmw-car" />
            </blockquote>
          </div>
        </div>
      </div>

      <Form/>
    </div>
  )
}
