import React from "react";
import { useState } from "react";

type LessonNumberProp = {
    orakATanmenetben: number;
}

const LessonNumber: React.FC<LessonNumberProp> = ({orakATanmenetben}) => {
    const [teljesOraszam, setTeljesOraszam] = useState(32);
    return(
        <>
            <section className="row">
                <div className="text-lg">Teljes oraszam:</div>
                <div className="row" style={{gap:"0.5rem"}}>
                    <button className="icon-button" onClick={() => setTeljesOraszam(prev => prev + 1)}>+</button>
                    <span className="font-semibold">{teljesOraszam}</span>
                    <button className="icon-button" onClick={() => setTeljesOraszam(prev => prev - 1)}>-</button>
                </div>
            </section>

            <section className="row">
                <div className="text-lg">Hianyzo orak:</div>
                <span className="font-semibold">{teljesOraszam - orakATanmenetben}</span>
            </section>
        </>
    );
};

export default LessonNumber;