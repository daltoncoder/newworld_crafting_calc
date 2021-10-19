import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { Accordion, Form } from 'react-bootstrap'
import { Formik } from 'formik'

const Header = ({
  selectedSkill,
  setSelectedSkill,
  currentLevel,
  setCurrentLevel,
  desiredLevel,
  setDesiredLevel,
  setPrices,
  prices,
}) => {
  const [show, setShow] = useState(false)

  return (
    <Container fluid>
      <Row className='mb-5 mt-3'>
        <Col md={3} style={{ fontSize: 24 }}>
          New World Crafting Calc
        </Col>
        <Col md={2}>
          <Dropdown onSelect={(e) => setSelectedSkill(e)}>
            <Dropdown.Toggle variant='secondary' id='skill-select'>
              {selectedSkill}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey='Armoring'>Armoring</Dropdown.Item>
              <Dropdown.Item eventKey='Weaponsmithing'>
                Weaponsmithing
              </Dropdown.Item>
              <Dropdown.Item eventKey='Engineering'>Engineering</Dropdown.Item>
              <Dropdown.Item eventKey='Furnishing'>Furnishing</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col md={5}>
          <Form
            style={{
              flexDirection: 'row',
              display: 'flex',
              justiftConent: 'flex-start',
            }}
          >
            <div>Current Level</div>
            <Form.Control
              size='xs'
              type='number'
              style={{ maxWidth: 80 }}
              value={currentLevel}
              onChange={(e) =>
                e.target.value > 200
                  ? setCurrentLevel(200)
                  : e.target.value < 1
                  ? setCurrentLevel(1)
                  : setCurrentLevel(e.target.value)
              }
            />
            <div>Desired Level</div>
            <Form.Control
              size='xs'
              type='number'
              style={{ maxWidth: 80 }}
              value={desiredLevel}
              onChange={(e) =>
                e.target.value > 200
                  ? setDesiredLevel(200)
                  : e.target.value < 1
                  ? setDesiredLevel(1)
                  : setDesiredLevel(e.target.value)
              }
            />
          </Form>
        </Col>
        <Col md={2}>
          <Button onClick={() => setShow(!show)}>Set Market Prices</Button>
        </Col>
      </Row>
      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        style={{ zIndex: 10000 }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Set Your Servers Market Prices</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Col>
            <Formik
              initialValues={prices}
              onSubmit={(values) => {
                setPrices(values)
                setShow(false)
              }}
            >
              {({ handleSubmit, handleChange, values }) => (
                <Form>
                  <Accordion>
                    <Accordion.Item eventKey={1}>
                      <Accordion.Header>Metals</Accordion.Header>
                      <Accordion.Body>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Iron Ore'
                        >
                          <Form.Control
                            placeholder='iron ore'
                            type='number'
                            name='Iron Ore'
                            value={values['Iron Ore']}
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Iron Ingot'
                        >
                          <Form.Control
                            placeholder='iron Ingot'
                            type='number'
                            value={values['Iron Ingot']}
                            name='Iron Ingot'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Steel Ingot'
                        >
                          <Form.Control
                            placeholder='Steel Ingot'
                            type='number'
                            value={values['Steel Ingot']}
                            name='Steel Ingot'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Sand Flux'
                        >
                          <Form.Control
                            placeholder='sand flux'
                            type='number'
                            name='Sand Flux'
                            value={values['Sand Flux']}
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Starmetal Ore'
                        >
                          <Form.Control
                            placeholder='starmetal ore'
                            type='number'
                            value={values['Starmetal Ore']}
                            name='Starmetal Ore'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Starmetal Ingot'
                        >
                          <Form.Control
                            placeholder='starmetal ingot'
                            type='number'
                            name='Starmetal Ingot'
                            value={values['Starmetal Ingot']}
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Orichalcum Ore'
                        >
                          <Form.Control
                            placeholder='orichalcum ore'
                            type='number'
                            name='Orichalcum Ore'
                            value={values['Orichalcum Ore']}
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Orichalcum Ingot'
                        >
                          <Form.Control
                            placeholder='oricalcum Ingot'
                            type='number'
                            value={values['Orichalcum Ingot']}
                            name='Orichalcum Ingot'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Silver Ore'
                        >
                          <Form.Control
                            placeholder='Silver Ore'
                            type='number'
                            name='Silver Ore'
                            value={values['Silver Ore']}
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Silver Ingot'
                        >
                          <Form.Control
                            placeholder='Silver Ingot'
                            type='number'
                            value={values['Silver Ingot']}
                            name='Silver Ingot'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Gold Ore'
                        >
                          <Form.Control
                            placeholder='Gold Ore'
                            type='number'
                            value={values['Gold Ore']}
                            name='Gold Ore'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Gold Ingot'
                        >
                          <Form.Control
                            placeholder='Gold Ingot'
                            type='number'
                            value={values['Gold Ingot']}
                            name='Gold Ingot'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Platinum Ore'
                        >
                          <Form.Control
                            placeholder='Platinum Ore'
                            type='number'
                            value={values['Platinum Ore']}
                            name='Platinum Ore'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Platinum Ingot'
                        >
                          <Form.Control
                            placeholder='Platinum Ingot'
                            type='number'
                            value={values['Platinum Ingot']}
                            name='Platinum Ingot'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Void Steel'
                        >
                          <Form.Control
                            placeholder='Void Steel'
                            type='number'
                            value={values['Void Steel']}
                            name='Void Steel'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Fae Iron'
                        >
                          <Form.Control
                            placeholder='Fae Iron'
                            type='number'
                            value={values['Fae Iron']}
                            name='Fae Iron'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Saltpeter'
                        >
                          <Form.Control
                            placeholder='Saltpeter'
                            type='number'
                            value={values['Saltpeter']}
                            name='Saltpeter'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel controlId='floatingInput' label='Stone'>
                          <Form.Control
                            placeholder='Stone'
                            type='number'
                            value={values['Stone']}
                            name='Stone'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Stone Block'
                        >
                          <Form.Control
                            placeholder='Stone Block'
                            type='number'
                            value={values['Stone Block']}
                            name='Stone Block'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Stone Brick'
                        >
                          <Form.Control
                            placeholder='Stone Brick'
                            type='number'
                            value={values['Stone Brick']}
                            name='Stone Brick'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Lodestone Brick'
                        >
                          <Form.Control
                            placeholder='Lodestone Brick'
                            type='number'
                            value={values['Lodestone Brick']}
                            name='Lodestone Brick'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Obsidian Voidstone'
                        >
                          <Form.Control
                            placeholder='Obsidian Voidstone'
                            type='number'
                            value={values['Obsidian Voidstone']}
                            name='Obsidian Voidstone'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Lodestone'
                        >
                          <Form.Control
                            placeholder='Lodestone'
                            type='number'
                            value={values['Lodestone']}
                            name='Lodestone'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey={2}>
                      <Accordion.Header>Leathers</Accordion.Header>
                      <Accordion.Body>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Raw Hide'
                        >
                          <Form.Control
                            placeholder='raw hide'
                            type='number'
                            name='Raw Hide'
                            value={values['Raw Hide']}
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel controlId='floatingInput' label='Tannin'>
                          <Form.Control
                            placeholder='Tannin'
                            type='number'
                            value={values['Tannin']}
                            name='Tannin'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Coarse Leather'
                        >
                          <Form.Control
                            placeholder='coarse leather'
                            type='number'
                            name='Coarse Leather'
                            value={values['Coarse Leather']}
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Rugged Leather'
                        >
                          <Form.Control
                            placeholder='rugged leather'
                            type='number'
                            value={values['Rugged Leather']}
                            name='Rugged Leather'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Thick Hide'
                        >
                          <Form.Control
                            placeholder='thick hide'
                            type='number'
                            value={values['Thick Hide']}
                            name='Thick Hide'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Layered Leather'
                        >
                          <Form.Control
                            placeholder='layered leather'
                            type='number'
                            value={values['Layered Leather']}
                            name='Layered Leather'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Iron Hide'
                        >
                          <Form.Control
                            placeholder='iron hide'
                            type='number'
                            value={values['Iron Hide']}
                            name='Iron Hide'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Infused Leather'
                        >
                          <Form.Control
                            placeholder='infused leather'
                            type='number'
                            value={values['Infused Leather']}
                            name='Infused Leather'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel controlId='floatingInput' label='Fur'>
                          <Form.Control
                            placeholder='Fur'
                            type='number'
                            value={values['Fur']}
                            name='Fur'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Thick Fur'
                        >
                          <Form.Control
                            placeholder='Thick Fur'
                            type='number'
                            value={values['Thick Fur']}
                            name='Thick Fur'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Infused Fur'
                        >
                          <Form.Control
                            placeholder='Infused Fur'
                            type='number'
                            value={values['Infused Fur']}
                            name='Infused Fur'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel controlId='floatingInput' label='Oil'>
                          <Form.Control
                            placeholder='Infused Fur'
                            type='number'
                            value={values['Oil']}
                            name='Oil'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey={3}>
                      <Accordion.Header>Cloths</Accordion.Header>
                      <Accordion.Body>
                        <FloatingLabel controlId='floatingInput' label='Fiber'>
                          <Form.Control
                            placeholder='Fiber'
                            type='number'
                            value={values['Fiber']}
                            name='Fiber'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel controlId='floatingInput' label='Linen'>
                          <Form.Control
                            placeholder='Linen'
                            type='number'
                            value={values['Linen']}
                            name='Linen'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Crossweave'
                        >
                          <Form.Control
                            placeholder='Crossweave'
                            type='number'
                            value={values['Crossweave']}
                            name='Crossweave'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel controlId='floatingInput' label='Sateen'>
                          <Form.Control
                            placeholder='Sateen'
                            type='number'
                            value={values['Sateen']}
                            name='Sateen'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Silk Threads'
                        >
                          <Form.Control
                            placeholder='silk threads'
                            type='number'
                            value={values['Silk Threads']}
                            name='Silk Threads'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel controlId='floatingInput' label='Silk'>
                          <Form.Control
                            placeholder='silk'
                            type='number'
                            value={values['Silk']}
                            name='Silk'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Wire Fiber'
                        >
                          <Form.Control
                            placeholder='wire Fiber'
                            type='number'
                            name='Wire Fiber'
                            value={values['Wire Fiber']}
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Infused Silk'
                        >
                          <Form.Control
                            placeholder='Infused Silk'
                            type='number'
                            value={values['Infused Silk']}
                            name='Infused Silk'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel controlId='floatingInput' label='Hyssop'>
                          <Form.Control
                            placeholder='Hyssop'
                            type='number'
                            value={values['Hyssop']}
                            name='Hyssop'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey={4}>
                      <Accordion.Header>Wood</Accordion.Header>
                      <Accordion.Body>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Green Wood'
                        >
                          <Form.Control
                            placeholder='green wood'
                            type='number'
                            name='Green Wood'
                            value={values['Green Wood']}
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel controlId='floatingInput' label='Timber'>
                          <Form.Control
                            placeholder='Timber'
                            type='number'
                            name='Timber'
                            value={values['Timber']}
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Coarse Sandpaper'
                        >
                          <Form.Control
                            placeholder='coarse sandpaper'
                            type='number'
                            name='Coarse Sandpaper'
                            value={values['Coarse Sandpaper']}
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Aged Wood'
                        >
                          <Form.Control
                            placeholder='aged wood'
                            type='number'
                            name='Aged Wood'
                            value={values['Aged Wood']}
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel controlId='floatingInput' label='Lumber'>
                          <Form.Control
                            placeholder='Lumber'
                            type='number'
                            name='Lumber'
                            value={values['Lumber']}
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Wyrdwood'
                        >
                          <Form.Control
                            placeholder='wyrewood'
                            type='number'
                            name='Wyrdwood'
                            value={values['Wyrdwood']}
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Wyrdwood Planks'
                        >
                          <Form.Control
                            placeholder='wyrdwood planks'
                            type='number'
                            value={values['Wyrdwood Planks']}
                            name='Wyrdwood Planks'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Ironwood'
                        >
                          <Form.Control
                            placeholder='ironwood'
                            type='number'
                            value={values['Ironwood']}
                            name='Ironwood'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Ironwood Planks'
                        >
                          <Form.Control
                            placeholder='ironwood planks'
                            type='number'
                            name='Ironwood Planks'
                            value={values['Ironwood Planks']}
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey={5}>
                      <Accordion.Header>Alchemy</Accordion.Header>
                      <Accordion.Body>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Water Mote'
                        >
                          <Form.Control
                            placeholder='Water Mote'
                            type='number'
                            name='Water Mote'
                            value={values['Water Mote']}
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Fire Mote'
                        >
                          <Form.Control
                            placeholder='Fire Mote'
                            type='number'
                            value={values['Fire Mote']}
                            name='Fire Mote'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Earth Mote'
                        >
                          <Form.Control
                            placeholder='Earth Mote'
                            type='number'
                            value={values['Earth Mote']}
                            name='Earth Mote'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Air Mote'
                        >
                          <Form.Control
                            placeholder='Air Mote'
                            type='number'
                            value={values['Air Mote']}
                            name='Air Mote'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Death Mote'
                        >
                          <Form.Control
                            placeholder='Death Mote'
                            type='number'
                            value={values['Death Mote']}
                            name='Death Mote'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Life Mote'
                        >
                          <Form.Control
                            placeholder='Life Mote'
                            type='number'
                            value={values['Life Mote']}
                            name='Life Mote'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Soul Mote'
                        >
                          <Form.Control
                            placeholder='Soul Mote'
                            type='number'
                            value={values['Soul Mote']}
                            name='Soul Mote'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Water Wisp'
                        >
                          <Form.Control
                            placeholder='Water Wisp'
                            type='number'
                            value={values['Water Wisp']}
                            name='Water Wisp'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Fire Wisp'
                        >
                          <Form.Control
                            placeholder='Fire Wisp'
                            type='number'
                            name='Fire Wisp'
                            value={values['Fire Wisp']}
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Earth Wisp'
                        >
                          <Form.Control
                            placeholder='Earth Wisp'
                            type='number'
                            value={values['Earth Wisp']}
                            name='Earth Wisp'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Air Wisp'
                        >
                          <Form.Control
                            placeholder='Air Wisp'
                            type='number'
                            value={values['Air Wisp']}
                            name='Air Wisp'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Death Wisp'
                        >
                          <Form.Control
                            placeholder='Death Wisp'
                            type='number'
                            value={values['Death Wisp']}
                            name='Death Wisp'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Life Wisp'
                        >
                          <Form.Control
                            placeholder='Life Wisp'
                            type='number'
                            value={values['Life Wisp']}
                            name='Life Wisp'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Soul Wisp'
                        >
                          <Form.Control
                            placeholder='Soul Wisp'
                            type='number'
                            value={values['Soul Wisp']}
                            name='Soul Wisp'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Water Essence'
                        >
                          <Form.Control
                            placeholder='Water Essence'
                            type='number'
                            value={values['Water Essence']}
                            name='Water Essence'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Fire Essence'
                        >
                          <Form.Control
                            placeholder='Fire Essence'
                            type='number'
                            value={values['Fire Essence']}
                            name='Fire Essence'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Earth Essence'
                        >
                          <Form.Control
                            placeholder='Earth Essence'
                            type='number'
                            value={values['Earth Essence']}
                            name='Earth Essence'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Air Essence'
                        >
                          <Form.Control
                            placeholder='Air Essence'
                            type='number'
                            value={values['Air Essence']}
                            name='Air Essence'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Death Essence'
                        >
                          <Form.Control
                            placeholder='Death Essence'
                            type='number'
                            value={values['Death Essence']}
                            name='Death Essence'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Life Essence'
                        >
                          <Form.Control
                            placeholder='Life Essence'
                            type='number'
                            value={values['Life Essence']}
                            name='Life Essence'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Soul Essence'
                        >
                          <Form.Control
                            placeholder='Soul Essence'
                            type='number'
                            value={values['Soul Essence']}
                            name='Soul Essence'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item>
                      <Accordion.Header eventKey={6}>Misc...</Accordion.Header>
                      <Accordion.Body>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Gunpowder'
                        >
                          <Form.Control
                            placeholder='Gunpowder'
                            type='number'
                            value={values['Gunpowder']}
                            name='Gunpowder'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Cinnabar'
                        >
                          <Form.Control
                            placeholder='Cinnabar'
                            type='number'
                            value={values['Cinnabar']}
                            name='Cinnabar'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Weak Solvent'
                        >
                          <Form.Control
                            placeholder='Weak Solvent'
                            type='number'
                            value={values['Weak Solvent']}
                            name='Weak Solvent'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Ash Stain'
                        >
                          <Form.Control
                            placeholder='Ash Stain'
                            type='number'
                            value={values['Ash Stain']}
                            name='Ash Stain'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Oak Stain'
                        >
                          <Form.Control
                            placeholder='Oak Stain'
                            type='number'
                            value={values['Oak Stain']}
                            name='Oak Stain'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Maple Stain'
                        >
                          <Form.Control
                            placeholder='Maple Stain'
                            type='number'
                            value={values['Maple Stain']}
                            name='Maple Stain'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId='floatingInput'
                          label='Potent Solvent'
                        >
                          <Form.Control
                            placeholder='Potent Solvent'
                            type='number'
                            value={values['Potent Solvent']}
                            name='Potent Solvent'
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Button onClick={handleSubmit}>Submit</Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  )
}

export default Header
