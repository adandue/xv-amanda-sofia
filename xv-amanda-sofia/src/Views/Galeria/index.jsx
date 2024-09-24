import { Slider } from '../../Components/Slider'
import './galeria.css'


const Galeria = () => {

    return (
        <>
        <div className='wrapper'>
            <div className=" background" id='background-galeria'>
                <h1 className="title">Galería</h1>
                <div className='slider-container'>
                    <Slider />
                </div>
            </div>
        </div>
        </>
    )
}

export { Galeria }