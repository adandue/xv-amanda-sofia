import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import './hashtag.css'

const Hashtag = () => {
    return (
        <>
        <div className='wrapper' id="hashtagWrapper">
            <div className='background'>
                <h1 className='title' id="hashtagTitle" style={{fontFamily: 'EdwardianScript'}}>Hashtag</h1>
                <p className='text' style={{fontFamily: 'Baskerville'}}>No olvides etiquetarme en todas tus publicaciones usando el Hashtag</p>
                <div className='evento' id="hashtagSocial">
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