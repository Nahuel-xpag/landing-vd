import React from "react";
import Slideshow from "../components/Slideshow";
import products from "../data/products.json";

export default function Home() {
    const alimentos = products.alimentos || [];
    return (
        <main>
            <div className="main-container">
                <div className="underheader">
                    <div className="textarea">
                        <p>Nos encontras en la calle 3 esquina 47 en Santa Teresita <br/>Lunes a Sábados 09hs - 13hs 16:30hs - 20:00hs</p>
                        <a href="#contacto" className="button1">Contactos</a>
                    </div>
                    <Slideshow images={alimentos.imgsrc} />
                </div>
            </div>
        </main>
    )
}