import React from "react";
import products from "../data/alimentos.json";


export default function Alimentos() {
const alimentos = products.alimentos || [];
return (
<main className="main-wrapper">

<h2 className="catalogue-underheader">Alimentos</h2>
<div className="list alimentos">
<ul>
{alimentos.map((item, i) => (
<div className="item-body">
<li key={i} className="item">
{item.name}
{item.imgsrc && <img src={item.imgsrc} alt={item.name} className="list-image" />}
<button>
<a href="/comprar">Comprar</a>
</button>
</li>
<div class="list-description">
    <ul>
        <li>Peso neto: {item['weight_in_kg']}kg</li>
        {item.proteina && <li>Proteinas: {item['proteina']}%</li>}
    </ul>
</div>
</div>
))}
</ul>
</div>
</main>
);
}