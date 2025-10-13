import React from "react";
import products from "../data/alimentos.json";


export default function Alimentos() {
const alimentos = products.alimentos || [];
return (
<main className="main-wrapper">
<div className="topheader">
<a href="/">
<img src="/assets/imgs/pata.png" alt="paw" />
</a>
<h1 className="catalogue-topheader">Nuestros productos</h1>
</div>


<h2 className="catalogue-underheader">Alimentos</h2>
<div className="list alimentos">
<ul>
{alimentos.map((item, i) => (
<li key={i} className="item">
{item.name}
{item.imgsrc && <img src={item.imgsrc} alt={item.name} className="list-image" />}
<button>
<a href="/comprar">Comprar</a>
</button>
</li>
))}
</ul>
</div>
</main>
);
}