
import { Container } from "react-bootstrap"
import Formulario from "./components/Formulario"
import { CategoriasProvider } from "./context/CategoriasProvider"
import { BebidasProvider } from "./context/BebidasProvider"
import ListadoBebidas from "./components/ListadoBebidas"
import ModalBebida from "./components/ModalBebida"

function App() {
  
  return (
    <>
      <CategoriasProvider>
        <BebidasProvider>
        <header className="py-5">
          <h1>Buscador de bebidas</h1>
        </header>
        <Container className="mt-5">
          <Formulario/>
          <ListadoBebidas/>
          <ModalBebida/>
        </Container>
        <Container className="mt-5">  
          <h1>Resultados</h1>
        </Container>
        </BebidasProvider>
      </CategoriasProvider>
    </>
    
  )
}

export default App
