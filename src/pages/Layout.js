import { Outlet, Link } from "react-router-dom";
import "../LayoutStyle.css";


const Layout = () => {
    return (
        <>
        <nav className="nav">
            <ul>
                <li ><Link to="/" >Home</Link> </li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/latest-news" >Latest News</Link></li>
            </ul>
        </nav>
    
        <Outlet /> 
        
        </>
        
    )
};

export default Layout;