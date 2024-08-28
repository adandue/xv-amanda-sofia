import { Hero } from './Views/Hero'
import { Introduccion } from './Views/Introduccion'
import { PapasPadrinos } from './Views/PapasPadrinos'
import { Fecha } from './Views/Fecha'
import { Lugar } from './Views/Lugar'
import { Regalos } from './Views/Regalos'
import { Hashtag } from './Views/Hashtag'
import { Galeria } from './Views/Galeria'
import { Confirmar } from './Views/Confirmar'
import { Buzon } from './Views/Buzon'
import './assets/fonts/baskerville-old-face.ttf'
import './assets/fonts/edwardianscriptitc.ttf'
import './App.css'

function App() {

  return (
    <>
      <Hero />
      <Introduccion />
      <PapasPadrinos />
      <Fecha />
      <Lugar />
      <Regalos />
      <Hashtag />
      <Galeria />
      <Confirmar />
      <Buzon />
    </>
  )
}

export default App
