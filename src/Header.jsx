import { useState } from "react";

const Header = () => { 
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        // 1. Ditambahkan class 'relative' pada header
        <header className="relative flex items-center justify-between p-4 bg-white">
            <h1 className="text-sky-600 font-bold text-2xl">BrandKu</h1>
            
            {/* 2. Ditambahkan 'hidden md:flex' agar navigasi ini hilang di mobile */}
            <nav className="hidden md:flex text-slate-600 space-x-4">
                <a href="#" className="hover:text-blue-600">Beranda</a>
                <a href="#" className="hover:text-blue-600">Fitur</a>
                <a href="#" className="hover:text-blue-600">Harga</a> 
            </nav>

            {/* Tombol hamburger otomatis sembunyi di desktop lewat 'md:hidden' */}
            <button
                className="md:hidden text-2xl z-50" 
                onClick={() => setIsMenuOpen(prev => !prev)}
            >
                {isMenuOpen ? "✕" : "☰"}
            </button>

            {/* 3. Perbaikan layout menu mobile (flex flex-col dan padding) */}
            {isMenuOpen && (
                <nav className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-md flex flex-col p-4 space-y-3 z-40">
                    <a href="#" className="text-gray-600 hover:text-blue-600">Beranda</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Fitur</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Harga</a> 
                </nav>
            )}
        </header>
    );
}

export default Header;