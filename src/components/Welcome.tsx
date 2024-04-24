import hangman from '../img/ahorcado03.jpeg'

export default function Welcome(props){
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
};

