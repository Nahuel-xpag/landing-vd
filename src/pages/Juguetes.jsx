import React from "react";
import products from "../data/juguetes.json";


export default function Juguetes() {
const juguetes = products.juguetes || [];
return (
<main className="main-wrapper">


<h2 className="catalogue-underheader">Juguetes</h2>
<div className="list juguetes">
<ul>
{juguetes.map((item, i) => (
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