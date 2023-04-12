import { Button, Form, Row, Col, Alert  } from "react-bootstrap"
import useCategorias from "../hooks/useCategorias"
import { useState } from "react"
import  useBebidas  from "../hooks/useBebidas"
const Formulario = () => {
    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''

    })
    const [error, setError] = useState(false)
    const { categorias } = useCategorias();
    const { obtenerBebidas } = useBebidas();
      const handleSubmit = e => {
        e.preventDefault();
        if(Object.values(busqueda).includes('')){
            setError(true)
            return;
        }
        setError(false) 
        obtenerBebidas(busqueda);
        
        
    }
  return (
    <Form onSubmit={
        handleSubmit
    }>
        {error && <Alert variant="danger">Todos los campos son obligatorios</Alert>}
        <Row className="mb-3">
            <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre de la bebida</Form.Label>
                    <Form.Control 
                    value={busqueda.nombre}
                    onChange={e => setBusqueda({...busqueda, nombre: e.target.value})}

                    type="text" placeholder="Buscar por nombre"/>
                </Form.Group>
            
            </Col>
            <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Categoría</Form.Label>\
                    <Form.Select
                        value={busqueda.categoria}
                        onChange={e => setBusqueda({...busqueda, categoria: e.target.value})}

                    >
                        <option value=''>Selecciona una categoría</option>
                        {categorias.map(categoria => (
                            <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>
                        ))}

                    </Form.Select>

                </Form.Group>
            </Col>
                        
            
            
        </Row>
        <Row className="justify-content-end" >
            <Col md={4}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                    <Button 
                    className="w-100"
                    variant="primary" type="submit">
                        Buscar bebida
                    </Button>
                </Form.Group>
            </Col>
        </Row>
        /</Form>
  )
}

export default Formulario
