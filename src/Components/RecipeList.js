import React, { useEffect, useState } from 'react'
import Recipe from './Recipe'
import Accordion from 'react-bootstrap/Accordion'

import { armoringRecipes } from '../Constants/armoringRecipes'
import { engineeringRecipes } from '../Constants/engineeringRecipes'
import { furnishingRecipes } from '../Constants/furnishingRecipes'
import { weaponsmithingRecipes } from '../Constants/weaponSmithingRecipes'
import { materialConversions } from '../Constants/materialConversion'

const RecipeList = ({
  selectedSkill,
  currentLevel,
  desiredLevel,
  expNeeded,
  prices,
}) => {
  const [recipeList, setRecipeList] = useState(null)
  useEffect(() => {
    const totalGold = (ingredients) => {
      const ingredientNames = Object.keys(ingredients)

      const whatToBuy = {}
      const totalPrice = { price: 0, unPriced: {} }

      for (let i = 0; i < ingredientNames.length; i++) {
        const materialPrice =
          prices[ingredientNames[i]] * ingredients[ingredientNames[i]]

        const componentsPrice =
          getPriceOfAllComponents(ingredientNames[i]) *
          ingredients[ingredientNames[i]]

        if (materialPrice <= componentsPrice || componentsPrice === 0) {
          whatToBuy[ingredientNames[i]] = ingredients[ingredientNames[i]]
          if (Number.isNaN(materialPrice)) {
            totalPrice.unPriced[ingredientNames[i]] =
              ingredients[ingredientNames[i]]
          } else {
            totalPrice.price = totalPrice.price + materialPrice
          }
        } else {
          Object.keys(materialConversions[ingredientNames[i]]).forEach(
            (element) => {
              whatToBuy[element] =
                materialConversions[ingredientNames[i]][element] *
                ingredients[ingredientNames[i]]
            }
          )
          totalPrice.price = totalPrice.price + componentsPrice
        }
      }
      return { whatToBuy: whatToBuy, totalPrice: totalPrice }
    }

    const getPriceOfAllComponents = (material) => {
      const materialList = materialConversions[material]
      let totalCost = 0
      if (materialList === undefined) {
        console.log(`${material} is undefined in conversion list`)
        return 0
      }
      Object.keys(materialList).forEach((element) => {
        const materialPrice = prices[element]
        totalCost = totalCost + materialPrice * materialList[element]
      })

      return totalCost
    }

    const recipeArr = []
    const whichList =
      selectedSkill === 'Armoring'
        ? armoringRecipes
        : selectedSkill === 'Weaponsmithing'
        ? weaponsmithingRecipes
        : selectedSkill === 'Engineering'
        ? engineeringRecipes
        : furnishingRecipes
    const filteredRecipes = whichList.filter(
      (object) => object.recipeLevel <= currentLevel
    )
    filteredRecipes.forEach((element, index) => {
      const ingredients = {}
      for (let i = 1; i <= element.numberOfIngredients; i++) {
        ingredients[element[`ingredient${i}`]] = element[`qty${i}`]
      }
      const whatToBuy = totalGold(ingredients)

      const xp = element.xp.split(',').join('')

      const howManyNeeded = Math.ceil(expNeeded / parseInt(xp))

      recipeArr.push(
        <Recipe
          recipe={element}
          index={index}
          expNeeded={expNeeded}
          prices={prices}
          ingredientList={ingredients}
          howManyNeeded={howManyNeeded}
          whatToBuy={whatToBuy}
          key={index}
        />
      )
    })

    const sortedArr = recipeArr.sort((a, b) => {
      return (
        a.props.whatToBuy.totalPrice.price * a.props.howManyNeeded -
        b.props.whatToBuy.totalPrice.price * b.props.howManyNeeded
      )
    })
    setRecipeList(sortedArr)
  }, [currentLevel, expNeeded, selectedSkill, prices])

  return <>{recipeList != null && <Accordion>{recipeList}</Accordion>}</>
}

export default RecipeList
