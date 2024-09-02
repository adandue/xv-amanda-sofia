import { FaWhatsapp } from "react-icons/fa";
import './buzon.css'

const Buzon = () => {
    const linkWhatsApp = "https://wa.me/522226061946?text=Amanda%20Sofía%20te%20deseo:"
    return (
        <>
        <div className='wrapper'>
            <div className='background' id='backgrounConfirmar'>
                <h1 className='title' id='confirmarTitle' style={{fontFamily: 'EdwardianScript'}}>Buzón de deseos</h1>
                <div className='evento'>
                    <p className='text'>¿Quiere dedicarle unas palabras?</p>
                    <p className='text'>Escríbale un mensaje a la festejada </p>
                </div>
                    <a className="button" href={linkWhatsApp} rel="follow noopener" role="button" target="_blank">
                        <div>
                            <FaWhatsapp />
                            <span >
                                MENSAJE
                            </span>
                        </div>
                    </a>
                
            </div>
        </div>
        </>
    )
}

export { Buzon }