import { useEffect, useState } from 'react'
import fecha from '../../assets/fecha.svg'
import './fecha.css'


const Fecha = () => {

    const [days,setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [mins, setMinutes ] = useState(0)
    const [secs, setSeconds] = useState(0)

    const deadline = 'December, 14, 2024'

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now()
        setDays(Math.floor(time/(1000*60*60*24)))
        setHours(Math.floor(time/(1000*60*60)%24))
        setMinutes(Math.floor(time/1000/60%60))
        setSeconds(Math.floor((time/1000)%60))

    }

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000)
        return () => clearInterval(interval)
    }, [])


    return (
        <>
            <div className='wrapper'>
                <div className='background'>
                    <h1 className='title' style={{fontFamily: 'Baskerville'}}>Fecha</h1>
                    <img src={fecha} alt='fecha' className='fecha'/>
                    <div className='container' style={{fontFamily: 'Baskerville'}}>
                            <div className='timer'>
                                <h1>{days<10 ? '0' + days: days}</h1>
                                <span className='text'>Días</span>
                            </div>
                            <div className='timer'>
                                <h1>{hours<10 ? '0' + hours: hours}</h1>
                                <span className='text'>Horas</span>
                            </div>
                            <div className='timer'>
                                <h1>{mins<10 ? '0' + mins: mins}</h1>
                                <span className='text'>Mins</span>
                            </div>
                            <div className='timer'>
                                <h1>{secs<10 ? '0' + secs: secs}</h1>
                                <span className='text'>Segs</span>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Fecha }