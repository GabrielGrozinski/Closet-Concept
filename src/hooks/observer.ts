import { useEffect, useRef, useState } from "react";


export function observerHome<T extends HTMLElement>() {
    const [largura, setLargura] = useState(window.innerWidth);
    const [value, setValue] = useState(false);
    const ref = useRef<T | null>(null);

    useEffect(() => {
        const handleResize = () => setLargura(window.innerHeight);
        window.addEventListener('resize', handleResize);

        const callback: IntersectionObserverCallback = (entries) => {
            const entry = entries[0];
                if (entry.isIntersecting) {
                    setValue(true);
                }
        }

        const options: IntersectionObserverInit = {
            threshold: largura < 1024 ? 0.1 : 0.4,
            rootMargin: largura < 768 ? '50px' : largura < 1024 ? '100px' : '150px',
            root: null
        };

        const observer = new IntersectionObserver(callback, options);

        if (ref.current) observer.observe(ref.current);
        
        return () => {
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return {ref, value}
}