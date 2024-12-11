import { FormEventHandler, useState } from "react";

interface NewOra {
    cim: string;
    leiras: string;
}

type LessonFormProp = {
    cim: string;
    leiras: string;
    szerkesztettKartyaId: number | null;
    setCim: (cim: string) => void;
    setLeiras: (leiras: string) => void;
    setSzerkesztettKartyaId: (index: number) => void;
    onOraHozzaad: (newOra: NewOra) => void;
    onSzerkeszt: (newOra: NewOra) => void;
}

const LessonForm: React.FC<LessonFormProp> = ({cim, leiras, szerkesztettKartyaId, setCim, setLeiras, setSzerkesztettKartyaId, onSzerkeszt, onOraHozzaad}) => {
    function handleFormSubmit(e: React.FormEvent) {
        e.preventDefault();
       
        const newOra: NewOra = {
            cim,
            leiras,
        };
       
        if(typeof szerkesztettKartyaId === "number"){
            onSzerkeszt(newOra);
            setSzerkesztettKartyaId(1);
        }else{
            onOraHozzaad(newOra);
        }

        setCim(""); 
        setLeiras("");
    }       
    return(
        <form onSubmit={handleFormSubmit}>
        <div className="col">
        <input type="text" placeholder="Cím" value={cim} onChange={(e) => setCim(e.target.value)}/>
        <textarea placeholder="Leírás" rows={5} value={leiras} onChange={(e) => setLeiras(e.target.value)}></textarea>
        </div>
        <aside className="col">
        <button className="btn">{typeof szerkesztettKartyaId === 'number' ? "Mentés" : "Hozzáadás"}</button>
        <button className="btn outline" onClick={() => {
            setSzerkesztettKartyaId(-1);
            setCim("");
            setLeiras("");
        }}>
            Mégsem
        </button>
        </aside>
        </form>
    );
}

export default LessonForm;