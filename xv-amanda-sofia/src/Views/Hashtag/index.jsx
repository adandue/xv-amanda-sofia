import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import './hashtag.css'

const Hashtag = () => {
    return (
        <>
        <div className='wrapper' style={{backgroundImage: `url("https://www.lahiguera.net/musicalia/artistas/mago_de_oz/disco/11003/tema/24337/mago_de_oz_el_cervezo_el_arbol_de_la_birra-portada.jpg")`}}>
            <div className='background'>
                <h1 className='title ' style={{fontFamily: 'EdwardianScript'}}>Hashtag</h1>
                <p className='text' style={{fontFamily: 'Baskerville'}}>No olvides etiquetarme en todas tus publicaciones usando el Hashtag</p>
                <div className='evento'>
                    <h1 className='hashtag' style={{fontFamily: 'Baskerville'}}>#XVAmandaSofia</h1>
                    <div className="social">
                    <FaInstagramSquare className="icon"/>
                    <FaTiktok  className="icon"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export { Hashtag }