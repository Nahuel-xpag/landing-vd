import React from "react";
import Slideshow from "../components/Slideshow";
import alimentos from "../data/alimentos.json";
import Map from "../components/Map";

export default function Home() {
    const featuredItems = alimentos.alimentos.map(i => i);
    return (
        <main>
            <div className="main-container">
                <div className="underheader">
                    <div className="textarea">
                        <p>Nos encontras en la calle 3 esquina 47 en Santa Teresita <br/>Lunes a Sábados 09hs - 13hs 17:00hs - 20:00hs</p>
                        <a href="#contacto" className="button1">Contactos</a>
                    </div>
                    <Slideshow featured={featuredItems} />

                    <div className="imagen">
                        <img id="nego" src="/assets/imgs/0.jpg" alt="tienda" />
                    </div>
                </div>
            </div>
            <Map />
            <div className="aviso">
                <p className="upper-aviso">El envío de los pedidos se realiza únicamente en las localidades de Santa Teresita, Mar del Tuyú, Las Toninas y Costa del Este. Para envíos a otras localidades contactarse</p>
                <p className="lower-aviso">Esperamos su mensaje</p>
            </div>

            <div className="contact-div" id="contacto">
                <a href="https://wa.me/2246409886" target="_blank" rel="noreferrer">
                    <div className="whatsapp link"><img src="/assets/imgs/icons/whatsapp.png" alt="whatsapp"/><h2>2246 409-886</h2></div>
                </a>
                <a href="https://www.instagram.com/venta_directaps/" target="_blank" rel="noreferrer" className="ig link">
                    <div><img src="/assets/imgs/icons/ig.png" alt="ig"/><h2>@Venta_directaps</h2></div>
                </a>


                <a href="https://www.facebook.com/profile.php?id=100077500741070&locale=es_LA" target="_blank" rel="noreferrer" className="fb link">
                    <div><img src="/assets/imgs/icons/fb.png" alt="fb"/><h2>Venta Directa</h2></div>
                </a>
</div>

        </main>
    )
}