import { FaWhatsapp } from "react-icons/fa";
import './confirmar.css'

const Confirmar = () => {
    const linkWhatsApp = "https://wa.me/522221642380?text=Confirmo%20asistencia%20a%20los%20XV%20de%20Amanda%20Sofía%20a:"
    return (
        <>
        <div className='wrapper'>
            <div className='background' id='backgroundConfirmar'>
                <h1 className='title' id='confirmarTitle' style={{fontFamily: 'EdwardianScript'}}>Confirma tu asistencia</h1>
                <div className='evento'>
                    <p className='text'>Será una noche increíble</p>
                    <p className='text'>¡Lo esperamos!</p>
                </div>
                <div className="dress-code" id="dress-code">
                    <p className="dress-code-text">ATENCIÓN:</p>
                    <p className="dress-code-text">Dress code: Etiqueta rigurosa</p>
                    <p className="dress-code-text">Agradecemos su puntualidad</p>
                    <p className="dress-code-text"><strong>En atención al protocolo, rogamos evitar el color azul</strong></p>
                </div>
                    <a className="button" id="confirmar-button" href={linkWhatsApp} rel="follow noopener" role="button" target="_blank">
                        <div>
                            <FaWhatsapp />
                            <span >
                                CONFIRMAR
                            </span>
                        </div>
                    </a>
                
            </div>
        </div>
        </>
    )
}

export { Confirmar }