import React from 'react'
import Link from 'next/link'
import Dropdown from './dropdowns/Dropdown'

const Navbar = () => {
  const clube_dropdown = [
    { name: 'História', page: '/club/history' },
    { name: 'Parceiros', page: '/club/partners' },
    { name: 'Faz-te Sócio', page: '/club/membership' },
  ]
  const futebol_dropdown = [
    { name: 'Classificação', page: '/football/classification' },
    { name: 'Últimos Resultados', page: '/football/results' },
    { name: 'Calendário', page: '/football/calendar' },
    { name: 'Plantel', page: '/football/roster' },
    { name: 'Staff', page: '/football/staff' },
  ]

  return (
    <header className="bg-green-600">
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center py-6 w-full border-b border-green-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <button className="flex flex-col lg:flex-row justify-center items-center space-x-2 text-white">
                <p className="text-xl font-semibold">
                  Sporting Clube de Cabreiros
                </p>
                <p className="text-xl font-light">desde 1932</p>
              </button>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-6 sm:space-y-0 items-center">
            <Dropdown name="Clube" elements={clube_dropdown} />
            <Dropdown name="Futebol" elements={futebol_dropdown} />
            <Link href="/contact">
              <button className="py-2 px-8 h-10 w-40 text-sm font-medium text-center text-green-600 bg-white rounded-md border border-transparent shadow-sm hover:bg-green-50">
                Contacte-nos
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
