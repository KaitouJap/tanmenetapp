
type LessonCardProp= {
    oraszam: string;
    cim: string;
    onKartyaTorles: () => void;
    onKartyaSzerkesztes: () => void;
}

const LessonCard : React.FC<React.PropsWithChildren<LessonCardProp>> = ({ oraszam, cim, onKartyaTorles, onKartyaSzerkesztes, children }) => {
    return(
        <article className="ora">
            <header>
                <h3>{oraszam}</h3>
                <button className="icon-button" onClick={onKartyaSzerkesztes}>edit</button>
                <button className="icon-button" onClick={onKartyaTorles}>delete</button>
            </header>
            <h4>{cim}</h4>
            <p>{children}</p>
        </article>
    );
}

export default LessonCard