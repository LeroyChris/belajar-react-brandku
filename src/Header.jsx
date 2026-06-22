const Header = () => { 
    return (
        <header className="flex items-center justify-between p-4">
            <h1 className="text-sky-600 font-bold text-2xl">BrandKu</h1>
            <nav className="text-slate-600 space-x-4">
            <a href="#" className="hover:text-black">Beranda</a>
            <a href="#" className="hover:text-black">Fitur</a>
            <a href="#" className="hover:text-black">Harga</a> 
            </nav>
    </header>
    )
}

export default Header;