import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
            <Link to={ '/home' } >Home</Link>
            <Link to={ '/contact' } >Contact</Link>
            <Link to={ '/artilces' } >Articles</Link>
            
            
        </nav>
    );
}