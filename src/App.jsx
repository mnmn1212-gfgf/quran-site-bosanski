// Bosnian localized & redesigned version (deep Bosnian color palette)
import React from "react";

export default function App(){
  return (
    <div style={{
      background: "linear-gradient(135deg,#0b1d2a,#102a43,#1f3b4d)",
      color:"#e6f1ff",
      minHeight:"100vh",
      fontFamily:"sans-serif",
      padding:"40px"
    }}>
      <h1 style={{fontSize:"42px", fontWeight:"bold"}}>
        Sana Kur'anski Kanali
      </h1>

      <p style={{maxWidth:"700px", lineHeight:"1.8", marginTop:"20px"}}>
        Multimedijalni kanali za prijevod značenja Kur'ana na sve svjetske jezike.
        Globalni vakufski projekat.
      </p>

      <div style={{
        marginTop:"40px",
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
        gap:"20px"
      }}>
        {[
          "Ko smo mi",
          "Vizija",
          "Misija",
          "Kontakt"
        ].map((item,i)=>(
          <div key={i} style={{
            padding:"20px",
            borderRadius:"20px",
            background:"linear-gradient(145deg,#0f2a3f,#173b52)",
            boxShadow:"0 10px 25px rgba(0,0,0,0.4)"
          }}>
            <h3>{item}</h3>
            <p style={{opacity:0.8, marginTop:"10px"}}>
              Opis sekcije na bosanskom jeziku sa profesionalnim stilom.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
