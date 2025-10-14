import React from "react";
import tarjetavd from "/assets/imgs/tarjetavd.webp";

export default function Info() {
  return (
    <main style={{ textAlign: "center", marginTop: "2rem" }}>
      <img
        src={tarjetavd}
        alt="Información"
        style={{ width: "80%", borderRadius: "12px" }}
      />
    </main>
  );
}
