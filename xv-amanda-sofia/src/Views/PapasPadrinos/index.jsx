import luna from '../../assets/luna.svg'
import './papasPadrinos.css'

const PapasPadrinos = () => {
    return (
        <div className='wrapper'>
            <div className='background'>
                <p className='text' id='compania' style={{fontFamily: 'Baskerville'}}>En compañía de sus padrinos</p>
                <h1 className='title' id='padrinos' style={{fontFamily: 'EdwardianScript'}}>Mario Aguas y Carmelita Martínez</h1>
                <img src={luna} alt='Luna' className='luna'/>
            </div>
        </div>
    )
}

export { PapasPadrinos }