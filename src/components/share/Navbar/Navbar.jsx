import { Link } from "react-router-dom";
import { FaSistrix, FaShoppingBag } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../../../Auth/AuthContext";

const Navbar = () => {
    const { user, logOut } = useContext(UserContext);
    const navLink = <>
        <li className="mx-1"><Link to="/">Home</Link></li>
        <li className="mx-1"><Link to="/about">About</Link></li>
        <li className="mx-1"><Link to="/services">Services</Link></li>
        <li className="mx-1"><Link to="/blog">Blog</Link></li>
        <li className="mx-1"><Link to="/contacts">Contact</Link></li>
    </>

    const signOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="navbar bg-base-100 h-14">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost normal-case text-xl text-purple-500">Car doctor</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            {user ?
                <div className="navbar-end">
                    <div className="avatar online">
                        <div className="w-10 h-10 rounded-full " >
                            <div className="tooltip" data-tip={user?.displayName} >
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                    </div>

                    <FaShoppingBag className="mx-2" />
                    <FaSistrix className="mx-2" />
                    <button to="/" className="btn btn-outline btn-error">Appointment</button>
                    <button className="btn btn-outline btn-secondary ms-2" onClick={signOut}>logOut</button>
                </div> :
                <div>
                    <Link to="/login"><button className="btn btn-outline btn-accent mr-2">Login</button></Link>
                    <Link to="/sign-up"><button className="btn btn-outline btn-accent">Sign Up</button></Link>
                </div>
            }
        </div>
    );
};

export default Navbar;