import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

export default function App() {
    return (
        <>
            <Header />
                <Outlet />
            <Footer />
        </>
    )
}

