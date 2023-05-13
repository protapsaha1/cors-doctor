import { Outlet } from "react-router-dom";
import Navbar from "../share/Navbar/Navbar";
import Footer from "../share/Footer/Footer";



const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;