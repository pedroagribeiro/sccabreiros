import React from 'react'

const Navbar = () => {
    return (
        <header className="bg-green-600">
            <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
                <div className="flex justify-between items-center py-6 w-full border-b border-green-500 lg:border-none">
                    <div className="flex items-center">
                        <a href="/" className="flex flex-col md:flex-row justify-center items-center space-x-2 text-white">
                            <p className="text-xl font-semibold">Sporting Clube de Cabreiros</p>
                            <p className="text-xl font-light">desde 1932</p>
                        </a>
                    </div>
                    <div className="flex space-x-6 text-white">
                        <button className="rounded-md bg-green-500 px-3 py-2">Sobre</button>
                        <button className="rounded-md bg-green-500 px-3 py-2">Plantel</button>
                        <button className="rounded-md bg-green-500 px-3 py-2">Contacte-nos</button>
                        <button className="rounded-md bg-white px-3 py-2 text-green-600 text-semibold">Subscreve-nos</button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;