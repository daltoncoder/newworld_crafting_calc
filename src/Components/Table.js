import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Header from './Header'
import RecipeList from './RecipeList'
import { levelConstants } from '../Constants/levelConstants'
import { defaultMaterialPrice } from '../Constants/materialConversion'

const Table = () => {
  const [selectedSkill, setSelectedSkill] = useState('Armoring')
  const [currentLevel, setCurrentLevel] = useState(1)
  const [desiredLevel, setDesiredLevel] = useState(1)
  const [prices, setPrices] = useState(defaultMaterialPrice)
  return (
    <Container>
      <Col>
        <Row>
          <Header
            selectedSkill={selectedSkill}
            setSelectedSkill={setSelectedSkill}
            setCurrentLevel={setCurrentLevel}
            setDesiredLevel={setDesiredLevel}
            currentLevel={currentLevel}
            desiredLevel={desiredLevel}
            setPrices={setPrices}
            prices={prices}
          />
        </Row>
        <Row>
          <RecipeList
            selectedSkill={selectedSkill}
            currentLevel={currentLevel}
            desiredLevel={desiredLevel}
            expNeeded={
              levelConstants[selectedSkill][desiredLevel].exp -
                levelConstants[selectedSkill][currentLevel].exp <=
              0
                ? 0
                : levelConstants[selectedSkill][desiredLevel].exp -
                  levelConstants[selectedSkill][currentLevel].exp
            }
            prices={prices}
          />
        </Row>
        <Row>
          ©Copyright Dalton Coder please contact at daltoncoder2@gmail.com for
          any questions. Do not use website or code without permission
        </Row>
      </Col>
    </Container>
  )
}

export default Table
