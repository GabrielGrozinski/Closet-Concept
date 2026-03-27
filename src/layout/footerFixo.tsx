import { FaInstagram, FaFacebook, FaTwitter} from "react-icons/fa";


export default function FooterFixo() {
    return (
        <footer className="bg-[#2C2C2C] text-[#F5F3F0] pt-16 pb-6">

        <div className="max-w-360 mx-auto px-6">

            <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr_1fr] gap-12 lg:gap-16 mb-12 pb-12 border-b border-[rgba(245,243,240,0.1)]">

            <div className="max-w-75">
                <div className="flex items-center gap-3 mb-4 text-[#C4B5A0]">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5"></circle>
                    <text x="24" y="32" textAnchor="middle" fill="currentColor" fontSize="24" fontFamily="serif" fontWeight="300">
                    C
                    </text>
                </svg>

                <span className="font-[Cormorant_Garamond] text-[20px] font-light tracking-[-0.3px]">
                    Closet Concept
                </span>
                </div>

                <p className="text-[14px] font-light leading-relaxed text-[#8B7D6B] mb-6">
                Onde elegância encontra estilo. Peças exclusivas para mulheres que valorizam sofisticação.
                </p>

                <div className="flex gap-3">
                    <a className="w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(196,181,160,0.1)] text-[#C4B5A0] hover:bg-[#C4B5A0] hover:text-[#FAF9F7] transition hover:-translate-y-0.5">
                        <FaInstagram/>
                    </a>
                    
                    <a className="w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(196,181,160,0.1)] text-[#C4B5A0] hover:bg-[#C4B5A0] hover:text-[#FAF9F7] transition hover:-translate-y-0.5">
                        <FaTwitter/>
                    </a>

                    <a className="w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(196,181,160,0.1)] text-[#C4B5A0] hover:bg-[#C4B5A0] hover:text-[#FAF9F7] transition hover:-translate-y-0.5">
                        <FaFacebook/>
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                <h3 className="text-[14px] font-medium uppercase mb-4">Comprar</h3>
                <ul className="space-y-3 text-[#8B7D6B] text-sm">
                    <li><a className="hover:text-[#C4B5A0]">Joias</a></li>
                    <li><a className="hover:text-[#C4B5A0]">Roupas</a></li>
                    <li><a className="hover:text-[#C4B5A0]">Acessórios</a></li>
                </ul>
                </div>

                <div>
                <h3 className="text-[14px] font-medium uppercase mb-4">Sobre</h3>
                <ul className="space-y-3 text-[#8B7D6B] text-sm">
                    <li><a className="hover:text-[#C4B5A0]">Nossa História</a></li>
                    <li><a className="hover:text-[#C4B5A0]">Blog</a></li>
                </ul>
                </div>

                <div>
                <h3 className="text-[14px] font-medium uppercase mb-4">Ajuda</h3>
                <ul className="space-y-3 text-[#8B7D6B] text-sm">
                    <li><a className="hover:text-[#C4B5A0]">FAQ</a></li>
                    <li><a className="hover:text-[#C4B5A0]">Contato</a></li>
                </ul>
                </div>
            </div>

            {/* Contato */}
            <div className="text-[#8B7D6B] text-sm space-y-3">
                <h3 className="text-[14px] font-medium uppercase text-white">Contato</h3>
                <p>(11) 9999-9999</p>
                <p>contato@closetconcept.com.br</p>
                <p>São Paulo, SP</p>
            </div>

            </div>

            {/* Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#8B7D6B] text-sm text-center md:text-left">
            <div className="flex flex-wrap gap-4">
                <a className="hover:text-[#C4B5A0]">Termos</a>
                <a className="hover:text-[#C4B5A0]">Privacidade</a>
                <a className="hover:text-[#C4B5A0]">Cookies</a>
            </div>

            <p>© 2024 Closet Concept</p>
            </div>

        </div>
        </footer>
    )
}