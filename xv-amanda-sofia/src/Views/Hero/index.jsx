import escudo from '../../assets/escudo.svg'
import './hero.css'

const Hero = () => {
    return (
        <>
        <div className='wrapper'>
            <div className='background'>
                <img src={escudo} alt='Logo' className='Logo'/>
            </div>
        </div>
        </>
    )
}

export { Hero }