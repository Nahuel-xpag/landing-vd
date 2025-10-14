import React from "react";
import products from "../data/accesorios.json";


export default function Accesorios() {
const accesorios = products.accesorios || [];
return (
<main className="main-wrapper">

<h2 className="catalogue-underheader">Accesorios</h2>
<div className="list accesorios">
<ul>
{accesorios.map((item, i) => (
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