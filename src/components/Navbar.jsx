import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className='topheader'>
            <Link to="/">
                <img src="/assets/imgs/pata.png" alt="paw" />
            </Link>
            <h1 className="vd">Venta Directa <br /> Pet Shop</h1>
            <ul className="nav-links">
                <li><Link to="/alimentos">Alimentos</Link></li>
                <li><Link to="/accesorios">Accesorios</Link></li>
                <li><Link to="/juguetes">Juguetes</Link></li>
            </ul>
        </nav>
    );
}