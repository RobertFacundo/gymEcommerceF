import { Outlet } from "react-router-dom";
import Header from '../../shared/components/header/Header.tsx'
import Footer from '../../shared/components/footer/Footer.tsx';

export const MainLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}