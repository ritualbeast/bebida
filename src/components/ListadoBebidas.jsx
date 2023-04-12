import useBebidas from "../hooks/useBebidas"
import { Row, Col, Card, Button } from "react-bootstrap"
const ListadoBebidas = () => {
    const { bebidas } = useBebidas();
    const { handleModalClick } = useBebidas();
  return (
    <Row>
        {bebidas.map(bebida => (
            <Col key={bebida.idDrink} md={4}>
                <Card>
                    <Card.Img variant="top" src={bebida.strDrinkThumb} />
                    <Card.Body>
                        <Card.Title>{bebida.strDrink}</Card.Title>
                        <Card.Text>
                            {bebida.strInstructions}
                        </Card.Text>
                        <Button 
                        type="submit" 
                        variant="warning" 
                        className="w-100"
                        onClick={() => handleModalClick(bebida.idDrink)}
                        >Ver receta</Button>
                    </Card.Body>
                </Card>
            </Col>
        ))}
    </Row>

  )
}

export default ListadoBebidas
