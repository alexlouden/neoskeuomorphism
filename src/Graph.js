import React, { useState } from 'react'
import { Flex, Box } from 'theme-ui'
import { shadow } from './theme'
import useInterval from './useInterval'

const Column = ({ value = 0, height = 1 }) => (
  <Flex
    sx={{
      height: `${height * 100}%`,
      boxShadow: shadow(-3),
      borderRadius: 'pill',
      alignItems: 'flex-end',
      width: 30,
      transition: 'height 0.2s ease-out'
    }}
  >
    <Box
      sx={{
        width: '100%',
        bg: 'primary',
        height: `${value * 100}%`,
        borderRadius: 'pill',
        transition: 'height 0.2s ease-out'
      }}
    ></Box>
  </Flex>
)

const defaults = [
  [0.6, 0.7],
  [0.8, 0.9],
  [0.5, 0.45],
  [0.8, 1],
  [0.7, 0.7]
]

const random = (min, max) => min + Math.random() * (max - min)

const Graph = ({ defaultValues = defaults }) => {
  const [values, setValues] = useState(defaultValues)
  const [autoRefresh, setAutoRefresh] = useState(true)

  const generateNewData = () => {
    // generate some new random graph data
    setValues([1, 2, 3, 4, 5].map(() => [random(0.4, 0.8), random(0.4, 1)]))
  }

  useInterval(generateNewData, autoRefresh ? 1000 : null)

  return (
    <Flex
      sx={{
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
      }}
      onClick={() => {
        setAutoRefresh(bool => !bool)
        if (!autoRefresh) generateNewData()
      }}
    >
      {values.map(([val, height], i) => (
        <Column value={val} height={height} key={i} />
      ))}
    </Flex>
  )
}

export default Graph
