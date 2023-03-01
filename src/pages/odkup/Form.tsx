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
import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [agreed, setAgreed] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
 const [lastnik, setLastnik] = useState('')
  const [opissaniranih, setOpissaniranih] = useState('')
  const [ocena, setOcena] = useState('')
  const [karambol, setKarambol] = useState('')
  const [km, setKm] = useState('')
  const [barva, setBarva] = useState('')
  const [oprema, setOprema] = useState('')
  const [model, setModel] = useState('')
  const [prostorninamotorja, setProstorninamotorja] = useState('')
  const [moc, setMoc] = useState('')
  const [opistrenutnih, setOpistrenutnih] = useState('')
  const [obvescanje, setObvescanje] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)





const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      message,
      lastnik,
      opissaniranih,
      ocena,
      karambol,
      km,
      barva,
      oprema,
      model,
      prostorninamotorja,
      moc,
      opistrenutnih,
      obvescanje,
    };

    const emailMessage = `
      Ime: ${data.name}
      Email: ${data.email}
      Telefon: ${data.phone}
      Sporočilo: ${data.message}
      Lastnik: ${data.lastnik}
      Opis stanja: ${data.opissaniranih}
      Ocena: ${data.ocena}
      Karambol: ${data.karambol}
      Kilometri: ${data.km}
      Barva: ${data.barva}
      Oprema: ${data.oprema}
      Model: ${data.model}
      Prostornina motorja: ${data.prostorninamotorja}
      Moč: ${data.moc}
      Opis trenutnih stanj: ${data.opistrenutnih}
      Obveščanje: ${data.obvescanje}
      `;

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      // Write a email message from the data object


      body: JSON.stringify({
        message: emailMessage,
      }),
    });

  

    console.log(data);
    setFormSubmitted(true);
    // clear form
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setLastnik('');
    setOpissaniranih('');
    setOcena('');
    setKarambol('');
    setKm('');
    setBarva('');
    setOprema('');
    setModel('');
    setProstorninamotorja('');
    setMoc('');
    setOpistrenutnih('');
    setObvescanje('');

    };




  return (
    <div id={"forma"} className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute left-full transform translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Obrazec za odkup</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Izpolnite spodnji obrazec z vašimi podatki in podatki o vašem vozilu in vas bomo v najkrajšem možnem času kontaktirali.
          </p>
        </div>
        <div className="mt-12">
          <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Ime in priimek
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  autoComplete="name"
                  className="py-3  border-2  px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 border-2 rounded-md"
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Telefon
              </label>
              <div className="mt-1">
                <input
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="phone"
                  autoComplete="phone"
                  className="py-3  border-2  px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="model" className="block text-sm font-medium text-gray-700">
                Znamka in model vozila
              </label>
              <div className="mt-1">
                <input
                  id="model"
                  name="model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  type="text"
                  className="py-3  border-2  px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="">
              <label htmlFor="prostorninamotorja" className="block text-sm font-medium text-gray-700">
               Prostornina motorja(ccm)
              </label>
              <div className="mt-1">
                <input
                  id="prostorninamotorja"
                  name="prostorninamotorja"
                  value={prostorninamotorja}
                  onChange={(e) => setProstorninamotorja(e.target.value)}
                  type="number"
                  className="py-3  border-2  px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="">
              <label htmlFor="moc" className="block text-sm font-medium text-gray-700">
                Moč motorja(kW)
              </label>
              <div className="mt-1">
                <input
                  id="moc"
                  name="moc"
                  value={moc}
                  onChange={(e) => setMoc(e.target.value)}
                  type="number"
                  className="py-3  border-2  px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="">
              <label htmlFor="barva" className="block text-sm font-medium text-gray-700">
                Barva vozila
              </label>
              <div className="mt-1">
                <input
                  id="barva"
                  name="barva"
                  value={barva}
                  onChange={(e) => setBarva(e.target.value)}
                  type="text"
                  className="py-3  border-2  px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="">
              <label htmlFor="km" className="block text-sm font-medium text-gray-700">
                Prevoženi kilometri
              </label>
              <div className="mt-1">
                <input
                  id="km"
                  name="km"
                  value={km}
                  onChange={(e) => setKm(e.target.value)}
                  type="number"
                  className="py-3  border-2  px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="oprema" className="block text-sm font-medium text-gray-700">
                Dodatna oprema
              </label>
              <div className="mt-1">
                <textarea
                  id="oprema"
                  name="oprema"
                  value={oprema}
                  onChange={(e) => setOprema(e.target.value)}
                  rows={2}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border border-gray-300 rounded-md"
                  defaultValue={''}
                />
              </div>
            </div>

            <div className={""}>
              <label htmlFor="lastnik" className="block text-sm font-medium text-gray-700">
                Lastnik
              </label>
              <div  className="mt-1">
                <select
                  id="lastnik"
                  value={lastnik}
                  onChange={(e) => setLastnik(e.target.value)}
                  name="lastnik"
                  className="py-3  border-2  px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                  defaultValue="1. Lastnik"
                >
                  <option value={"1. lastnik"}>1. Lastnik</option>
                  <option value={"2. lastnik"}>2. Lastnik</option>
                  <option value={"3. lastnik"}>3. Lastnik</option>
                  <option value={"4. lastnik"}>4. Lastnik</option>
                </select>
              </div>

            </div>

            <div className={""}>
              <label htmlFor="karambol" className="block text-sm font-medium text-gray-700">
                Je bilo vozilo karambolirano?
              </label>
              <div  className="mt-1">
                <select
                  id="karambol"
                  name="karambol"
                  value={karambol}
                  onChange={(e) => setKarambol(e.target.value)}
                  className="py-3  border-2  px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                  defaultValue="Ne"
                >
                  <option>Da</option>
                  <option>Ne</option>

                </select>
              </div>

            </div>

            <div className="sm:col-span-2">
              <label htmlFor="opissaniranih" className="block text-sm font-medium text-gray-700">
                Opis saniranih poškodb
              </label>
              <div className="mt-1">
                <textarea
                  id="opissaniranih"
                  name="opissaniranih"
                  value={opissaniranih}
                  onChange={(e) => setOpissaniranih(e.target.value)}
                  rows={3}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border border-gray-300 rounded-md"
                  defaultValue={''}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="opistrenutnih" className="block text-sm font-medium text-gray-700">
                Opis trenutnih poškodb
              </label>
              <div className="mt-1">
                <textarea
                  id="opistrenutnih"
                  name="opistrenutnih"
                  value={opistrenutnih}
                  onChange={(e) => setOpistrenutnih(e.target.value)}
                  rows={3}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border border-gray-300 rounded-md"
                  defaultValue={''}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="ocena" className="block text-sm font-medium text-gray-700">
                Koliko cenite vaše vozilo (€) ?
              </label>
              <div className="mt-1">
                <input
                  id="ocena"
                  name="ocena"
                  value={ocena}
                  onChange={(e) => setOcena(e.target.value)}
                  type="number"
                  className="py-3  border-2  px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                />
              </div>
            </div>


            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Dodatni komentar
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border border-gray-300 rounded-md"
                  defaultValue={''}
                />
              </div>
            </div>

            <div className={"sm:col-span-2"}>
              <label htmlFor="obvescanje" className="block text-sm font-medium text-gray-700">
                Kako želite da vas kontaktiramo?
              </label>
              <div  className="mt-1">
                <select
                  id="obvescanje"
                  value={obvescanje}
                  onChange={(e) => setObvescanje(e.target.value)}
                  name="obvescanje"
                  className="py-3  border-2  px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                  defaultValue="po telefonu"
                >
                  <option value={"po telefonu"}>po telefonu</option>
                  <option value={"po elektronski pošti"}>po elektronski pošti</option>
                  <option value={"po SMSu"}>po SMSu</option>

                </select>
              </div>

            </div>
            <div className="sm:col-span-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? 'bg-red-600' : 'bg-gray-200',
                      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? 'translate-x-5' : 'translate-x-0',
                        'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                      )}
                    />
                  </Switch>
                </div>
                <div className="ml-3">
                  <p className="text-base text-gray-500">
                  Strinjam se, da bodo moji podatki uporabljeni za potrebe kontaktiranja.
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              {formSubmitted? <div className="text-center text-green-500 text-2xl font-bold">Obrazec je uspešno oddan!</div> : <button
                type="submit"
                onClick={handleSubmit}
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Pošlji
              </button>
              }

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
