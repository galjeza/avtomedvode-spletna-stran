/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { MailIcon, PhoneIcon, MapIcon, ClockIcon } from '@heroicons/react/outline'



export default function Example() {

  const workingHours = [
    {
      day: 'Ponedeljek - petek',
      hours: '9:00 - 18:00',
    },
    {
      day: 'Sobota',
      hours: '9:00 - 12:00',
    },
    {
      day: 'Nedelja',
      hours: 'Zaprto',
    }

  ]
  return (
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-white" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Ime in priimek
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border-gray-300 border-2 rounded-md"
                  placeholder="Ime in priimek"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border-gray-300 border-2  rounded-md"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Telefonska številka
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border-gray-300 border-2  rounded-md"
                  placeholder="Telefonska številka"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Sporočilo
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border border-gray-300 rounded-md"
                  placeholder="Sporočilo"
                  defaultValue={""}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Pošlji
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-red-50 rounded-2xl py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Kje nas najdete</h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Pokličite nas in se posvetujte z nami. Ne bo vam žal.
            </p>
            <dl className="mt-8 text-base text-gray-500">

              <div className="mt-6">
                <dt className="sr-only">Naslov</dt>
                <dd className="flex">
                  <MapIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Gorenjska cesta 12, 1215 Medvode</span>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Telefonska številka</dt>
                <dd className="flex">
                  <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">041 674 294</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">avtomedvode@gmail.com </span>
                </dd>
              </div>
              <div className="mt-3">
<dt className="sr-only">Delovni čas</dt>
                <dd className="flex">
                  <ClockIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">
                   {workingHours.map((item, index) => {
                     return (
                       <div key={index}>
                         <span className={""}>{item.day}</span>:   {item.hours}
                        </div>
                      )
                    })

                   }
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
