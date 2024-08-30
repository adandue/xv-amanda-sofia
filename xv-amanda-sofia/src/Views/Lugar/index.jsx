import location from '../../assets/location.svg'
import './lugar.css'

const Lugar = () => {
    return (
        <div className='wrapper' id='lugarWrapper'>
            <div className='background'>
                <p className='text' id='lugarText' style={{fontFamily: 'Baskerville'}}>La celebración Religiosa y recepción se llevará a cabo en </p>
                <h1 className='title' id='lugarTitle' style={{fontFamily: 'EdwardianScript'}}>Antiguo Hípico las Haras</h1>
                <a 
                href='https://www.google.com/maps/place/Antiguo+H%C3%ADpico+las+Haras/@19.0121628,-98.1283891,15z/data=!4m6!3m5!1s0x85cfeaab8003c14f:0x893a25e0536ee0d9!8m2!3d19.0121628!4d-98.1283891!16s%2Fg%2F11c2pt1k4p?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D'
                target='_blank'
                rel='noreferrer'
                id='locationImg'
                >
                    <img src={location} alt='location' className='location'/>
                </a>
            </div>
        </div>
    )
}

export { Lugar }