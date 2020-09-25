import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Col'


const AddFilm = ({setMovies,movies})=>{

    const [show, setShow] = useState(false)
    const [addMovie, setAddMovie] = useState ({title: '', rate:'' ,  description:'', posterUrl: '' })
   

    const handleChange = e => {
      const { name, value } = e.target
      setAddMovie(prevState => ({
          ...prevState,
          [name]: value
      }))
      }

    return (
        <>
        <Button variant="primary" onClick={() => setShow(true)}>
          Add new movie
        </Button>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  New movie informations
                </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column md="4">
                    Movie title :
                  </Form.Label>
                  <Col md="8">
                    <Form.Control type="text" placeholder="movie title" name="title" onChange={handleChange} />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column md="4">
                  Movie rate :
                  </Form.Label>
                  <Col md="8">
                    <Form.Control type="text" placeholder="Movie rate" name="rate" onChange={handleChange} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column md="6">
                  Movie description :
                  </Form.Label>
                  <Col md="6">
                    <Form.Control type="text" placeholder="Movie description" name="description" onChange={handleChange} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column md="6">
                  Movie posterUrl :
                  </Form.Label>
                  <Col md="6">
                    <Form.Control type="text" placeholder="Movie posterUrl" name="posterUrl" onChange={handleChange} />
                  </Col>
                </Form.Group>
                <Button type="submit" onClick ={(e) => {
                  e.preventDefault()
                  setShow(false)
                  setMovies([...movies, addMovie])}} > Submit </Button>
              </Form>
          </Modal.Body>
        </Modal>
      </>
    )
}

export default AddFilm