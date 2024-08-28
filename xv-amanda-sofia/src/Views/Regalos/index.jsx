import { GiPresent } from "react-icons/gi";
import { FaEnvelope } from "react-icons/fa";
import './regalos.css'

const Regalos = () => {
    return (
        <>
            <div className='wrapper'>
                <div className='background'>
                    <div className="evento">
                        <h1 className='title ' style={{fontFamily: 'EdwardianScript'}}>El mejor regalo es su presencia</h1>
                        <h4 className='title ' style={{fontFamily: 'EdwardianScript'}}>Si gustan también puede ser</h4>
                    </div>
                    <div className='evento'>
                        <GiPresent className="icon"/>
                        <p className='text' style={{fontFamily: 'Baskerville'}}>Liverpool</p>
                        <p className='text' style={{fontFamily: 'Baskerville'}}>No. de evento</p>
                        <p className='text' style={{fontFamily: 'Baskerville'}}>51 48 64 33</p>
                    </div>
                    <div className='evento'>
                        <FaEnvelope  className="icon"/>
                        <p className='text' style={{fontFamily: 'Baskerville'}}>Lluvia de sobres</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Regalos }