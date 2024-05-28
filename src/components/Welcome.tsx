import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";


export default function Welcome(props: { category: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined; }){
    return(
        <>  <div className="main">
                <div className="ahorcado">
                    <div className="subtitulos">
                        <h1>Hangman Game</h1>
                        <h2>Everyone's favorite death game</h2>
                    </div>
                    <div className="imagen"></div>
                    <p>Click on the button to start playing</p>
                    <p>The hint category is: {props.category} </p>
                </div>
            </div>
        </>
    );
}

