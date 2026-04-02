import { Outlet } from "react-router-dom";



export default function LoginLayout() {

    return (
        <main className="lg:pt-16 sm:grid lg:grid-cols-[1fr_800px_1fr] bg-[#F5F3F0]">
            <span className="lg:col-2"><Outlet/></span>
        </main>
    )
}
