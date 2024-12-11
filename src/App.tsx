import { useState } from "react";
import LessonCard from "./components/LessonCard";
import LessonNumber from "./components/LessonNumber";
import Topics from "./components/Topics";
import LessonForm from "./components/LessonForm";


const App : React.FC = () => {
  const [cim, setCim] = useState<string>('');
  const [leiras, setLeiras] = useState<string>('');
  const [szerkesztettKartyaId, setSzerkesztettKartyaId] = useState<number | null>(null);
  const [orak, setOrak] = useState([
    {
      cim: "Bevezetés a webfejlesztésbe",
      leiras: "Weboldalak működése és HTML áttekintés.",
    },
    {
      cim: "Fejlesztői környezetek",
      leiras: "Az online és a professzionális fejlesztői eszközök áttekintése. A Visual Studio Code telepítése és alapvető használatának bemutatása.",
    },
    {
      cim: "Alapvető HTML tagek",
      leiras: "Legfontosabb tagek használata: h1-h6, p, img, a.",
    },
    {
      cim: "HTML attribútumok és szövegformázás",
      leiras: "Attribútumok: id, class, és szövegformázás.",
    },
    {
      cim: "HTML listák és táblázatok",
      leiras: "Listaelemek (ul, ol) és táblázatok (table).",
    },
  ]);

  return(
    <main>
      <h1>Hello World!</h1>
      <hr />
      <LessonNumber orakATanmenetben={orak.length} />
      <hr />
      <Topics/>
      <hr />
      <LessonForm 
        onOraHozzaad={(newOra) => setOrak((prev) => [...prev, newOra])}
        cim={cim}
        leiras={leiras}
        setCim={setCim}
        setLeiras={setLeiras}
        szerkesztettKartyaId={szerkesztettKartyaId}
        setSzerkesztettKartyaId={setSzerkesztettKartyaId}
        onSzerkeszt={(ujOra) => {
          setOrak((prev) => {
            const ujOrak = [...prev];
            ujOrak[szerkesztettKartyaId!] = ujOra;
            return ujOrak;
          })
        }}/>
      <hr />
      <section className="ora-grid">
        {orak.map((ora, index) => (
          <LessonCard 
            key={index} 
            oraszam={`${index+1}. ora`} 
            cim={ora.cim} 
            onKartyaTorles={() => setOrak((prev)=> prev.filter((ora,i) => i !== index))}
            onKartyaSzerkesztes={() => {
              setCim(ora.cim);
              setLeiras(ora.leiras);
              setSzerkesztettKartyaId(index);
            }}
          >
            {ora.leiras}
          </LessonCard>
        ))}
      </section>
    </main>
  );
}

export default App
