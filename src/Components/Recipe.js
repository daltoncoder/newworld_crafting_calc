import React, { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Recipe = ({
  recipe,
  index,
  prices,
  ingredientList,
  howManyNeeded,
  whatToBuy,
}) => {
  const [unpriced, setUnpriced] = useState(null)

  useEffect(() => {
    if (Object.keys(whatToBuy.totalPrice.unPriced).length > 0) {
      const arr = []
      Object.keys(whatToBuy.totalPrice.unPriced).forEach((element, index) => {
        arr.push(
          <span key={index}>
            +{ingredientList[element] * howManyNeeded}
            {'   '}
            {element}{' '}
          </span>
        )
      })
      setUnpriced(arr)
    } else {
      setUnpriced(null)
    }
  }, [howManyNeeded, whatToBuy, ingredientList])

  return (
    <Accordion.Item eventKey={index}>
      <Accordion.Header>
        <Row>
          <Col lg={12}>
            {recipe.itemName}
            <br />
            {recipe.xp}XP
          </Col>
          <Col>
            {' '}
            You need to craft{' '}
            <span style={{ color: 'green' }}>{howManyNeeded}</span> to reach
            desired level <br />
            This will cost{' '}
            <span style={{ color: 'yellow' }}>
              {(whatToBuy.totalPrice.price * howManyNeeded).toFixed(2)}
            </span>{' '}
            {unpriced}
          </Col>
        </Row>
      </Accordion.Header>
      <Accordion.Body>
        <Table>
          <thead>
            <tr>
              <th>Ingredient</th>
              <th>Quantity</th>
              <th>Total Quantity to reach Desired Level</th>
            </tr>
          </thead>
          <tbody>
            {ingredientList &&
              Object.keys(ingredientList).map((element, index) => (
                <tr key={index}>
                  <td>{element}</td>
                  <td>{ingredientList[element]}</td>
                  <td>
                    {howManyNeeded && ingredientList[element] * howManyNeeded}
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        <Table>
          <thead>
            <tr>
              <th>What to buy and cost</th>
              <th>To make one</th>
              <th>To reach desired level</th>
              <th>Cost for one</th>
              <th>Cost to reach desired level</th>
            </tr>
          </thead>
          <tbody>
            {whatToBuy &&
              Object.keys(whatToBuy.whatToBuy).map((element, index) => (
                <tr key={index}>
                  <td>{element}</td>
                  <td>{whatToBuy.whatToBuy[element]}</td>
                  <td>{whatToBuy.whatToBuy[element] * howManyNeeded}</td>
                  <td>
                    {prices[element]
                      ? (
                          prices[element] * whatToBuy.whatToBuy[element]
                        ).toFixed(2)
                      : 'Unknown Price'}
                  </td>
                  <td>
                    {prices[element]
                      ? (
                          prices[element] *
                          whatToBuy.whatToBuy[element] *
                          howManyNeeded
                        ).toFixed(2)
                      : 'Unknown Price'}
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan='3'>Total</td>
              <td>{whatToBuy.totalPrice.price.toFixed(2)}</td>
              <td>{(whatToBuy.totalPrice.price * howManyNeeded).toFixed(2)}</td>
            </tr>
          </tfoot>
        </Table>
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default Recipe
