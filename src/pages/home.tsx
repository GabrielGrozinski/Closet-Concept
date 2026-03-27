import "../styles/home.css";
import { 
    Gem, 
    Shirt, 
    ShoppingBag, 
    Watch, 
    Heart, 
    Footprints,
    MoveRight,
    ChevronRightCircle,
    ShoppingCart,
    Mail,
    Send,
} from "lucide-react";
import { observerHome } from "../hooks/observer";


export default function Home() {
    const itemsCategoria = [
        {
            icone: Gem,
            titulo: "Joias",
            quantidade: 156
        },
        {
            icone: Shirt,
            titulo: "Vestidos",
            quantidade: 89
        },
        {
            icone: ShoppingBag,
            titulo: "Bolsas",
            quantidade: 67
        },
        {
            icone: Footprints,
            titulo: "Sapatos",
            quantidade: 94
        },
        {
            icone: Watch,
            titulo: "Acessórios",
            quantidade: 164
        },
        {
            icone: Heart,
            titulo: "Lingerie",
            quantidade: 78
        },
    ];

    const cardsColecoes = [
    {
        title: "Joias Exclusivas",
        description: "Peças únicas que realçam sua beleza",
        image: "https://images.unsplash.com/photo-1758995115475-7b7d6eb060ba?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwZ29sZHxlbnwwfHx8fDE3NzQ0NDk2MTF8MA&ixlib=rb-4.1.0&q=85"
    },
    {
        title: "Alta Costura",
        description: "Roupas que traduzem sofisticação",
        image: "https://images.unsplash.com/photo-1759229874914-c1ffdb3ebd0c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGNsb3RoaW5nfGVufDB8fHx8MTc3NDQ0OTYxNXww&ixlib=rb-4.1.0&q=85"
    },
    {
        title: "Acessórios Premium",
        description: "Detalhes que fazem a diferença",
        image: "https://images.unsplash.com/photo-1767921804162-9c55a278768d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBqZXdlbHJ5JTIwZ29sZHxlbnwwfHx8fDE3NzQ0NDk2MTF8MA&ixlib=rb-4.1.0&q=85"
    }
    ];

    const produtos = [
    {
        id: 1,
        badge: "Novo",
        favorite: true,
        img: "https://images.unsplash.com/photo-1758995115475-7b7d6eb060ba?auto=format&fit=crop&w=600&q=80",
        rating: "★★★★☆",
        ratingValue: 4.9,
        title: "Colar Ouro Venezia",
        category: "Joias",
        price: "R$ 2.890,00",
    },
    {
        id: 2,
        badge: "Destaque",
        favorite: true,
        img: "https://images.unsplash.com/photo-1767921804162-9c55a278768d?auto=format&fit=crop&w=600&q=80",
        rating: "★★★★★",
        ratingValue: 5,
        title: "Anel Diamante Étoile",
        category: "Joias",
        price: "R$ 4.590,00",
    },
    {
        id: 3,
        badge: null,
        favorite: true,
        img: "https://images.unsplash.com/photo-1758995116121-60090f17ae20?auto=format&fit=crop&w=600&q=80",
        rating: "★★★★☆",
        ratingValue: 4.8,
        title: "Pulseira Aurora",
        category: "Joias",
        price: "R$ 1.690,00",
    },
    ];

    const home1 = observerHome();
    const home2 = observerHome();
    const home3 = observerHome();
    const home4 = observerHome();
    const home5 = observerHome();

    return (
            <main>
                <section className="relative h-screen min-h-150 flex items-center justify-center overflow-hidden">

                {/* Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-zoom"
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1764179690227-af049306cd20?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmFzaGlvbiUyMHdvbWFufGVufDB8fHx8MTc3NDQ0OTYwOHww&ixlib=rb-4.1.0&q=85')"}}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-[rgba(44,44,44,0.7)] to-[rgba(107,78,55,0.5)] z-1">
                    
                </div>

                {/* Content */}
                <div className="relative z-2 text-center text-[#FAF9F7] max-w-200 px-6">

                    {/* Title */}
                    <h1 className="font-[Cormorant_Garamond] text-[86px] leading-[1.1] font-light tracking-[-1px] mb-4 text-shadow-sm">
                    Closet Concept
                    </h1>

                    {/* Subtitle */}
                    <p className="font-[Cormorant_Garamond] font-light text-[28px] tracking-[1px] mb-4 text-[#ffe9cf] text-shadow-sm">
                    Onde Elegância Encontra Estilo
                    </p>

                    {/* Description */}
                    <p className="font-[Montserrat] text-[18px] font-light leading-relaxed mb-8 text-[#F5F3F0] text-shadow-sm">
                    Descubra uma coleção exclusiva de joias e moda feminina que define seu estilo único
                    </p>

                    {/* CTA */}
                    <button className="inline-flex cursor-pointer items-center gap-2 bg-[#dfc5a3] text-[#FAF9F7] text-sm font-medium uppercase tracking-[1px] px-12 py-4 rounded-md transition-all duration-300 hover:bg-[#e9c89e] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(196,181,160,0.3)]">
                    Explorar Coleção
                        <MoveRight />
                    </button>

                </div>
                </section>
                {/* ínicio */}

                <section ref={home1.ref} id="collections" className="bg-[#FAF9F7]">
                    <div className={`max-w-360 mx-auto px-6 py-24 opacity-0 ${home1.value && 'animacao-entrada opacity-100'}`}>

                        {/* Header */}
                        <div className="text-center mb-16">
                        <h2 className="font-[Cormorant_Garamond] text-[48px] font-light tracking-[-0.5px] text-[#2C2C2C] mb-4">
                            Coleções em Destaque
                        </h2>

                        <p className="font-[Montserrat] text-[16px] font-light text-[#8B7D6B] leading-relaxed max-w-200 mx-auto">
                            Explore nossas coleções exclusivas, cuidadosamente curadas para você
                        </p>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {cardsColecoes.map((card, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-lg overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                            >
                                <div className="relative w-full h-100 overflow-hidden">
                                <img
                                    src={card.image}
                                    loading="lazy"
                                    decoding="async"
                                    alt={card.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-[rgba(44,44,44,0.7)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                                    <button className="flex items-center gap-2 bg-[#C4B5A0] text-[#FAF9F7] text-[14px] font-medium uppercase tracking-[1px] px-8 py-3 rounded-md transition hover:bg-[#B3A490] hover:-translate-y-0.5 cursor-pointer">
                                    Explorar
                                        <ChevronRightCircle />
                                    </button>
                                </div>
                                </div>

                                <div className="p-6">
                                <h3 className="font-[Cormorant_Garamond] text-[28px] font-light text-[#2C2C2C] mb-2">
                                    {card.title}
                                </h3>

                                <p className="font-[Montserrat] text-[14px] font-light text-[#8B7D6B]">
                                    {card.description}
                                </p>
                                </div>
                            </div>
                            ))}

                        </div>

                    </div>
                </section>
                {/*  */}

                <section ref={home2.ref} className="bg-[#F5F3F0]">

                    <div className={`max-w-360 mx-auto px-6 py-24 opacity-0 ${home2.value && 'animacao-entrada opacity-100'}`}>

                        {/* Header */}
                        <div className="text-center mb-16">
                            <h2 className="font-[Cormorant_Garamond] text-[48px] font-light tracking-[-0.5px] text-[#2C2C2C] mb-4">
                                Explore por Categoria
                            </h2>

                            <p className="font-[Montserrat] text-[16px] font-light text-[#8B7D6B]">
                                Encontre exatamente o que você procura
                            </p>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">

                            {itemsCategoria.map((item, index) => 
                                <button key={index} className="group bg-white border border-[rgba(196,181,160,0.2)] rounded-lg px-4 py-8 text-center transition-all duration-300 hover:bg-[#C4B5A0] hover:border-[#C4B5A0] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(196,181,160,0.3)] active:bg-[#C4B5A0] active:border-[#C4B5A0] active:-translate-y-1 active:shadow-[0_8px_24px_rgba(196,181,160,0.3)] cursor-pointer">

                                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-[#C4B5A0] group-hover:text-[#FAF9F7] group-active:text-[#FAF9F7]">
                                        <item.icone className="w-6 h-6" />
                                    </div>

                                    <h3 className="font-[Montserrat] text-[14px] font-medium tracking-[0.5px] text-[#2C2C2C] mb-1 group-hover:text-[#FAF9F7] group-active:text-[#FAF9F7] transition-colors">
                                    {item.titulo}
                                    </h3>

                                    <p className="font-[Montserrat] text-[12px] font-light text-[#8B7D6B] group-hover:text-[#F5F3F0] group-active:text-[#F5F3F0] transition-colors">
                                    {item.quantidade} itens
                                    </p>

                                </button>
                            )}





                        </div>

                    </div>
                </section>

                <section ref={home3.ref} className="bg-[#FAF9F7]">
                    <div className={`max-w-360 mx-auto px-6 py-24 opacity-0 ${home3.value && 'animacao-entrada opacity-100'}`}>

                        {/* Header */}
                        <div className="text-center mb-16">
                        <h2 className="font-[Cormorant_Garamond] text-[48px] font-light tracking-[-0.5px] text-[#2C2C2C] mb-4">
                            Produtos em Destaque
                        </h2>

                        <p className="font-[Montserrat] text-[16px] font-light text-[#8B7D6B]">
                            Peças selecionadas especialmente para você
                        </p>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

                            {produtos.map((produto) => (
                                <div
                                key={produto.id}
                                className="group relative bg-white rounded-lg overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] cursor-pointer"
                                >
                                {/* Badge */}
                                {produto.badge && (
                                    <div className="absolute top-4 left-4 z-10 bg-[#C4B5A0] text-[#FAF9F7] text-[11px] font-medium tracking-[1px] uppercase px-3 py-1 rounded">
                                    {produto.badge}
                                    </div>
                                )}

                                {/* Favorite */}
                                {produto.favorite && (
                                    <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-[#8B7D6B] transition hover:bg-[#C4B5A0] hover:text-white">
                                    ❤️
                                    </button>
                                )}

                                {/* Image */}
                                <div className="relative w-full h-87.5 overflow-hidden">
                                    <img
                                    loading="lazy"
                                    decoding="async"
                                    src={produto.img}
                                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-br from-[rgba(44,44,44,0.09)] to-[rgba(107,78,55,0.34)] z-1">
                                        
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center z-2 opacity-0 translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                    <button className="bg-[#C4B5A0] text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-[#B3A490] font-medium  text-lg font-[Cormorant_Garamond]">
                                        <ShoppingCart /> 
                                        Adicionar
                                    </button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-1 mb-3 text-[#C4B5A0] text-xs">
                                    {produto.rating}
                                    <span className="text-[#8B7D6B] ml-1">{produto.ratingValue}</span>
                                    </div>

                                    <h3 className="font-[Cormorant_Garamond] text-[22px] font-light text-[#2C2C2C] mb-1">
                                    {produto.title}
                                    </h3>

                                    <p className="text-[13px] text-[#8B7D6B] mb-3">{produto.category}</p>

                                    <p className="text-[18px] font-medium text-[#6B4E37]">{produto.price}</p>
                                </div>
                                </div>
                            ))}

                        </div>

                        {/* CTA */}
                        <div className="text-center">
                        <button className="border-2 border-[#C4B5A0] text-[#2C2C2C] uppercase tracking-[1px] px-10 py-4 font-medium transition hover:bg-[#C4B5A0] hover:text-white hover:-translate-y-1">
                            Ver Toda Coleção
                        </button>
                        </div>

                    </div>
                </section>

                <section ref={home4.ref} className="bg-[#F5F3F0]">
                    <div className={`max-w-360 mx-auto px-6 py-24 opacity-0 ${home4.value && 'animacao-entrada opacity-100'}`}>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* IMAGE */}
                        <div className="relative">
                            <div className="relative rounded-lg overflow-hidden">

                            <img 
                            src="https://images.pexels.com/photos/3762938/pexels-photo-3762938.jpeg?auto=compress&cs=tinysrgb&w=1200"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-125 lg:h-150 object-cover rounded-lg"
                            />

                            {/* Accent */}
                            <div className="absolute -top-4 -left-4 right-4 bottom-4 border-2 border-[#C4B5A0] rounded-lg -z-10"></div>

                            </div>
                        </div>

                        {/* CONTENT */}
                        <div className="py-6">

                            {/* Header */}
                            <div className="mb-6">
                                <h2 className="font-[Cormorant_Garamond] text-[48px] font-light tracking-[-0.5px] text-[#2C2C2C] mb-2">
                                    Nossa História
                                </h2>

                                <p className="font-[Cormorant_Garamond] text-[24px] font-medium text-[#db9e49]">
                                    Onde Cada Peça Conta uma História
                                </p>
                            </div>

                            {/* Description */}
                            <p className="font-[Montserrat] text-[16px] font-light leading-[1.8] text-[#2C2C2C] mb-8">
                            O Closet Concept nasceu da paixão por criar experiências únicas através da moda.
                            Cada peça em nossa coleção é cuidadosamente selecionada para mulheres que valorizam
                            elegância, qualidade e exclusividade.
                            </p>

                            {/* VALUES */}
                            <div className="flex flex-col gap-6">

                            {/* Card */}
                            <div className="group flex gap-4 p-5 bg-white rounded-lg border border-[rgba(196,181,160,0.2)] transition-all duration-300 hover:border-[#C4B5A0] hover:shadow-[0_4px_16px_rgba(196,181,160,0.2)] hover:translate-x-2">

                                <div className="w-12 h-12 flex items-center justify-center bg-[#C4B5A0]/10 rounded-lg text-[#C4B5A0] shrink-0">
                                ✨
                                </div>

                                <div>
                                <h3 className="font-[Montserrat] text-[16px] font-medium text-[#2C2C2C] mb-1">
                                    Exclusividade
                                </h3>
                                <p className="text-[14px] text-[#8B7D6B] font-light">
                                    Peças únicas e edições limitadas
                                </p>
                                </div>

                            </div>

                            {/* Card */}
                            <div className="group flex gap-4 p-5 bg-white rounded-lg border border-[rgba(196,181,160,0.2)] transition-all duration-300 hover:border-[#C4B5A0] hover:shadow-[0_4px_16px_rgba(196,181,160,0.2)] hover:translate-x-2">

                                <div className="w-12 h-12 flex items-center justify-center bg-[#C4B5A0]/10 rounded-lg text-[#C4B5A0] shrink-0">
                                🏆
                                </div>

                                <div>
                                <h3 className="font-[Montserrat] text-[16px] font-medium text-[#2C2C2C] mb-1">
                                    Qualidade Premium
                                </h3>
                                <p className="text-[14px] text-[#8B7D6B] font-light">
                                    Materiais nobres e acabamento impecável
                                </p>
                                </div>

                            </div>

                            {/* Card */}
                            <div className="group flex gap-4 p-5 bg-white rounded-lg border border-[rgba(196,181,160,0.2)] transition-all duration-300 hover:border-[#C4B5A0] hover:shadow-[0_4px_16px_rgba(196,181,160,0.2)] hover:translate-x-2">

                                <div className="w-12 h-12 flex items-center justify-center bg-[#C4B5A0]/10 rounded-lg text-[#C4B5A0] shrink-0">
                                ❤️
                                </div>

                                <div>
                                <h3 className="font-[Montserrat] text-[16px] font-medium text-[#2C2C2C] mb-1">
                                    Atendimento Personalizado
                                </h3>
                                <p className="text-[14px] text-[#8B7D6B] font-light">
                                    Experiência única para cada cliente
                                </p>
                                </div>

                            </div>

                            </div>

                        </div>

                        </div>

                    </div>
                </section>

                <section ref={home5.ref} className="bg-[#FAF9F7] py-16">
                    <div className={`max-w-7xl mx-auto px-4 ${home5.value && 'animacao-entrada opacity-100'}`}>

                        <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold text-[#2C2C2C] mb-2">
                            O Que Nossas Clientes Dizem
                        </h2>
                        <p className="text-[#8B7D6B] text-sm">
                            Histórias reais de mulheres que transformaram seu estilo
                        </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* CARD 1 */}
                        <div className="bg-white rounded-lg p-8 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] transform hover:-translate-y-2 transition-all duration-400 ease-out relative">

                            <div className="absolute top-6 right-6 text-[rgba(196,181,160,0.2)]">
                            {/* SVG */}
                            </div>

                            <div className="flex gap-1 mb-4">
                            {/* estrelas */}
                            </div>

                            <p className="font-[Montserrat] text-[15px] font-light leading-[1.7] text-[#2C2C2C] mb-6 italic">
                            "A qualidade das peças do Closet Concept é incomparável. Cada item é uma obra de arte que transforma meu guarda-roupa."
                            </p>

                            <div className="flex items-center gap-3">
                            <img
                            className="w-12 h-12 rounded-full object-cover bg-gray-200"
                            loading="lazy"
                            decoding="async"
                            src="https://images.pexels.com/photos/3762938/pexels-photo-3762938.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                            alt="Mariana Silva"
                            />
                            <div>
                                <h4 className="font-[Montserrat] text-sm font-medium text-[#2C2C2C]">
                                Mariana Silva
                                </h4>
                                <p className="font-[Montserrat] text-xs font-light text-[#8B7D6B]">
                                Cliente VIP
                                </p>
                            </div>
                            </div>

                        </div>

                        {/* CARD 2 */}
                        <div className="bg-white rounded-lg p-8 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] transform hover:-translate-y-2 transition-all duration-400 ease-out relative">

                            <div className="absolute top-6 right-6 text-[rgba(196,181,160,0.2)]">
                            {/* SVG */}
                            </div>

                            <div className="flex gap-1 mb-4">
                            {/* estrelas */}
                            </div>

                            <p className="font-[Montserrat] text-[15px] font-light leading-[1.7] text-[#2C2C2C] mb-6 italic">
                            "Encontrei no Closet Concept o equilíbrio perfeito entre elegância e modernidade. Simplesmente impecável!"
                            </p>

                            <div className="flex items-center gap-3">
                            <img
                            className="w-12 h-12 rounded-full object-cover bg-gray-200"
                            loading="lazy"
                            decoding="async"
                            src="https://images.unsplash.com/photo-1700756739057-f6ec705ffc1e?auto=format&fit=crop&w=100&q=80"
                            alt="Beatriz Costa"
                            />
                            <div>
                                <h4 className="font-[Montserrat] text-sm font-medium text-[#2C2C2C]">
                                Beatriz Costa
                                </h4>
                                <p className="font-[Montserrat] text-xs font-light text-[#8B7D6B]">
                                Fashion Blogger
                                </p>
                            </div>
                            </div>

                        </div>

                        {/* CARD 3 */}
                        <div className="bg-white rounded-lg p-8 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] transform hover:-translate-y-2 transition-all duration-400 ease-out relative">

                            <div className="absolute top-6 right-6 text-[rgba(196,181,160,0.2)]">
                            {/* SVG */}
                            </div>

                            <div className="flex gap-1 mb-4">
                            {/* estrelas */}
                            </div>

                            <p className="font-[Montserrat] text-[15px] font-light leading-[1.7] text-[#2C2C2C] mb-6 italic">
                            "Peças exclusivas que realmente fazem diferença. O atendimento e a qualidade são excepcionais."
                            </p>

                            <div className="flex items-center gap-3">
                            <img
                            className="w-12 h-12 rounded-full object-cover bg-gray-200"
                            loading="lazy"
                            decoding="async"
                            src="https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                            alt="Carolina Mendes"
                            />
                            <div>
                                <h4 className="font-[Montserrat] text-sm font-medium text-[#2C2C2C]">
                                Carolina Mendes
                                </h4>
                                <p className="font-[Montserrat] text-xs font-light text-[#8B7D6B]">
                                Executiva
                                </p>
                            </div>
                            </div>

                        </div>

                        </div>

                    </div>
                </section>

                <section className="bg-linear-to-br from-[#D4C4B0] to-[#C4B5A0] py-24 px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center">

                        {/* ICON */}
                        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-white/20 rounded-full text-[#FAF9F7]">
                            <Mail/>
                        </div>

                        <h2 className="text-[42px] font-light text-[#FAF9F7] mb-4 font-serif">
                            Fique por Dentro
                        </h2>

                        <p className="text-base text-[#F5F3F0] leading-relaxed mb-8">
                            Receba em primeira mão nossas novidades, ofertas exclusivas e dicas de estilo
                        </p>

                        <form className="mb-4">
                            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">

                            <input
                                type="email"
                                placeholder="Seu melhor e-mail"
                                className="flex-1 h-14 bg-white rounded px-5 text-[15px] outline-none"
                            />

                            <button
                                type="submit"
                                className="h-14 bg-[#6B4E37] text-[#FAF9F7] font-medium tracking-wide uppercase px-8 rounded whitespace-nowrap transition-all duration-300 hover:bg-[#5A4230] hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2"
                            >
                                Inscrever-se

                                <Send/>
                            </button>

                            </div>
                        </form>

                        <p className="text-xs font-light text-white">
                            Ao se inscrever, você concorda com nossa política de privacidade
                        </p>

                        </div>
                    </div>
                </section>
            </main>
    )
}