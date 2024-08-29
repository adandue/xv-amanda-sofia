import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import './hashtag.css'

const Hashtag = () => {
    return (
        <>
        <div className='wrapper' style={{backgroundImage: `url("https://cdna.artstation.com/p/assets/images/images/025/445/726/medium/luna-garcia-san-segundo-4214671a-dec0-4981-b180-875f09f00be3.jpg?1585818314")`}}>
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