import frame from '../../assets/frame.svg'
import escudo from '../../assets/escudo.svg'
import './hero.css'

const Hero = () => {
    return (
        <>
        <div className='wrapper'>
            <div className='background' id='backgroundHero'>
                <img src={frame} alt='marco' className='marco' />
                <img src={escudo} alt='Logo' className='logo'/>
            </div>
        </div>
        </>
    )
}

export { Hero }