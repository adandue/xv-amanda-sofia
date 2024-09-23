import { FaAngleLeft} from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import sofi1 from '../../assets/sofi-1.jpeg'
import sofi2 from '../../assets/sofi-2.jpeg'
import sofi3 from '../../assets/sofi-3.jpeg'
import sofi4 from '../../assets/sofi-4.jpeg'
import sofi5 from '../../assets/sofi-5.jpeg'
import sofi6 from '../../assets/sofi-6.jpeg'
import sofi7 from '../../assets/sofi-7.jpeg'
import sofi8 from '../../assets/sofi-8.jpeg'
import sofi9 from '../../assets/sofi-9.jpeg'
import sofi10 from '../../assets/sofi-10.jpeg'
import sofi11 from '../../assets/sofi-11.jpeg'
import sofi12 from '../../assets/sofi-12.jpeg'
import sofi13 from '../../assets/sofi-13.jpeg'
import sofi14 from '../../assets/sofi-14.jpeg'
import sofi15 from '../../assets/sofi-15.jpeg'
import sofi16 from '../../assets/sofi-16.jpeg'
import sofi17 from '../../assets/sofi-17.jpeg'
import sofi18 from '../../assets/sofi-18.jpeg'
import sofi19 from '../../assets/sofi-19.jpeg'
import sofi20 from '../../assets/sofi-20.jpeg'
import sofi21 from '../../assets/sofi-21.jpeg'
import './galeria.css'


const Galeria = () => {
    const slider = document.querySelector('.slider')
    const sliderSection = document.querySelectorAll('.slider-section')

    let operation = 0
    let widthImg = 100 / sliderSection.length
    let counter = 0

    const moveToRight = () => {
        if(counter >= sliderSection.length-1) {
            operation = 0
            counter = 0
            slider.style.transform = `translate(${operation}%)`
            slider.style.transform = 'none'
            return
        } 
        counter++
        operation = operation - widthImg
        slider.style.transform = `translate(${operation}%)`
        slider.style.transition = 'all ease .6s'
    }
    const moveToLeft = () => {
        counter--
        if(counter < 0) {
            counter = sliderSection.length-1
            operation = widthImg * (sliderSection.length-1)
            slider.style.transform = `translate(-${operation}%)`
            slider.style.transform = 'none'
            return
        }
        operation = operation + widthImg
        slider.style.transform = `translate(${operation}%)`
        slider.style.transition = 'all ease .6s'
    }

    return (
        <>
        <div className='wrapper'>
            <div className=" background" id="galeria-background">
                <h1 className="title">Galería</h1>
                <div className='slider-container'>
                    <div className='slider'>
                        <section className='slider-section'>
                            <img src={sofi1} alt='foto de la festejada' />
                        </section>
                        <section className='slider-section'>
                            <img src={sofi2} alt='foto de la festejada' />
                        </section>
                        <section className='slider-section'>
                            <img src={sofi3} alt='foto de la festejada' />
                        </section>
                        <section className='slider-section'>
                            <img src={sofi4} alt='foto de la festejada' />
                        </section>
                        <section className='slider-section'>
                            <img src={sofi5} alt='foto de la festejada' />
                        </section>
                        <section className='slider-section'>
                            <img src={sofi6} alt='foto de la festejada' />
                        </section>
                        <section className='slider-section'>
                            <img src={sofi7} alt='foto de la festejada' />
                        </section>
                        <section className='slider-section'>
                            <img src={sofi8} alt='foto de la festejada' />
                        </section>
                        <section className='slider-section'>
                            <img src={sofi9} alt='foto de la festejada' />
                        </section>
                        <section className='slider-section'>
                            <img src={sofi10} alt='foto de la festejada' />
                        </section>
                        <section className='slider-section'>
                            <img src={sofi11} alt='foto de la festejada' />
                        </section>
                        <section className='slider-section'>
                            <img src={sofi12} alt='foto de la festejada' />
                        </section>
                        <section className='slider-section'>
                            <img src={sofi13} alt='foto de la festejada' />
                        </section>
                        <section className='slider-section'>
                            <img src={sofi14} alt='foto de la festejada' />
                        </section>
                        <section className='slider-section'>
                            <img src={sofi15} alt='foto de la festejada' />
                        </section>
                        <section className='slider-section'>
                            <img src={sofi16} alt='foto de la festejada' />
                        </section>
                        <section className='slider-section'>
                            <img src={sofi17} alt='foto de la festejada' />
                        </section>
                        <section className='slider-section'>
                            <img src={sofi18} alt='foto de la festejada' />
                        </section>
                        <section className='slider-section'>
                            <img src={sofi19} alt='foto de la festejada' />
                        </section>
                        <section className='slider-section'>
                            <img src={sofi20} alt='foto de la festejada' />
                        </section>
                        <section className='slider-section'>
                            <img src={sofi21} alt='foto de la festejada' />
                        </section>
                    </div>
                    <div className='btn-left' onClick={moveToLeft}><FaAngleLeft /></div>
                    <div className='btn-right' onClick={moveToRight}><FaAngleRight /></div>
                </div>
            </div>
        </div>
        </>
    )
}

export { Galeria }