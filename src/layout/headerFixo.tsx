export default function HeaderFixo() {
    const topicos = ["Início", "Joias", "Roupas", "Acessórios", "Sobre", "Contato"];

    return (
        <header className="fixed top-0 left-0 right-0 z-1000 bg-[rgba(250,249,247)] backdrop-blur-3 border-b border-[rgba(196,181,160,0.1)] transition-all duration-300">

        <div className="max-w-360 mx-auto lg:px-6 py-4 lg:flex items-center lg:justify-between grid grid-cols-[10%_1fr_10%] justify-items-end px-4 gap-2">

            {/* Mobile Menu */}
            <button className="h-9 w-9 items-center justify-center min-w-full lg:hidden">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 12h16"></path>
                <path d="M4 18h16"></path>
                <path d="M4 6h16"></path>
                </svg>
            </button>

            {/* Logo */}
            <div className="flex items-center lg:justify-stretch justify-center gap-3 text-[#6B4E37] cursor-pointer min-w-full lg:min-w-9">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5"></circle>
                    <text
                    x="20"
                    y="27"
                    textAnchor="middle"
                    fill="currentColor"
                    fontSize="20"
                    fontFamily="serif"
                    fontWeight="300"
                    >
                    C
                    </text>
                </svg>

                <span className="font-[Cormorant_Garamond] text-[20px] font-light tracking-[-0.3px]">
                    Closet Concept
                </span>
            </div>

            {/* Nav */}
            <nav className="lg:flex gap-8 hidden">
                <div className="flex justify-between min-w-140">
                {topicos.map((label, index) => (
                    <button
                    key={index}
                    className="relative cursor-pointer text-[16px] font-normal tracking-[0.5px] text-[#2C2C2C] 
                                hover:text-[#d0a871] transition-colors duration-300 
                                after:content-[''] after:absolute after:left-0 after:bottom-0 
                                after:w-0 after:h-px after:bg-[#C4B5A0] 
                                after:transition-all after:duration-300 hover:after:w-full"
                    >
                    {label}
                    </button>
                ))}
                </div>
            </nav>

            {/* Actions */}
            <div className="lg:flex items-center gap-2">

                {/* Search */}
                <button className="h-9 w-9 lg:flex items-center justify-center text-[#2C2C2C] hover:text-[#C4B5A0] transition-colors hidden">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="m21 21-4.34-4.34"></path>
                    <circle cx="11" cy="11" r="8"></circle>
                    </svg>
                </button>

                {/* Heart */}
                <button className="h-9 w-9 lg:flex items-center justify-center text-[#2C2C2C] hover:text-[#C4B5A0] transition-colors hidden">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                </button>

                {/* User */}
                <button className="h-9 w-9 lg:flex items-center justify-center text-[#2C2C2C] hover:text-[#C4B5A0] transition-colors hidden">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </button>

                {/* Cart */}
                <button className="relative h-9 w-9 lg:flex items-center justify-center text-[#2C2C2C] hover:text-[#C4B5A0] transition-colors min-w-full lg:min-w-9">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                    <path d="M3 6h18"></path>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>

                    <span className="absolute -top-1 -right-1 bg-[#C4B5A0] text-[#FAF9F7] text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
                    0
                    </span>
                </button>

            </div>
        </div>
        </header>
    )
}
