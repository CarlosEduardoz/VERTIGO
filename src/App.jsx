import { Image } from './components/ComponenTImage/Image'
import { Form } from './components/Formulario/Form'
import { Header } from './components/Logo/Header'

export function App() {

  return (
    <>
       <header>
        <Header />
        </header>
        <main>
        <Form />  
        <Image />
       </main>
    </>
  )
}

