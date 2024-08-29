import location from '../../assets/location.svg'
import './lugar.css'

const Lugar = () => {
    return (
        <div className='wrapper' style={{ backgroundImage: `url("https://cdn0.bodas.com.mx/vendor/1431/3_2/960/jpeg/whatsapp-image-2023-02-08-at-3-55-17-pm_5_251431-167589478986635.webp")`}}>
            <div className='background'>
                <p className='text' id='celebracion' style={{fontFamily: 'Baskerville'}}>La celebración Religiosa y recepción se llevará a cabo en </p>
                <h1 className='title' id='haras' style={{fontFamily: 'EdwardianScript'}}>Antiguo Hípico las Haras</h1>
                <a 
                href='https://www.google.com/maps/place/Antiguo+H%C3%ADpico+las+Haras/@19.0121628,-98.1283891,15z/data=!4m6!3m5!1s0x85cfeaab8003c14f:0x893a25e0536ee0d9!8m2!3d19.0121628!4d-98.1283891!16s%2Fg%2F11c2pt1k4p?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D'
                target='_blank'
                rel='noreferrer'
                >
                    <img src={location} alt='location' className='location'/>
                </a>
            </div>
        </div>
    )
}

export { Lugar }