import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import Table from './Components/Table'

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Table />
        </Col>
      </Row>
    </Container>
  )
}

export default App
