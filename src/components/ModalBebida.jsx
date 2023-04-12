import { Modal, Image, Button } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas';

const ModalBebida = () => {
    const handleModalClick = e => {
        e.preventDefault();
        console.log('click')
    }
    const { Modal } = useBebidas();
  return (

    <Modal show={Modal} onHide={handleModalClick}>   
        
        <Modal.Body>
            <Image src="https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg" fluid />
        </Modal.Body>

        </Modal>
        


  )
}

export default ModalBebida
