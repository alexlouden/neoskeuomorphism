import React from 'react'
import { Flex, Box, useThemeUI } from 'theme-ui'
import { shadow } from './theme'

const Column = ({ value = 0, height = 1 }) => (
  <Flex
    sx={{
      height: `${height * 100}%`,
      boxShadow: shadow(-3),
      borderRadius: 'pill',
      alignItems: 'flex-end',
      width: 30
    }}
  >
    <Box
      sx={{
        width: '100%',
        bg: 'primary',
        height: `${value * 100}%`,
        borderRadius: 'pill'
      }}
    ></Box>
  </Flex>
)

const Graph = () => (
  <Flex
    sx={{
      height: '100%',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }}
  >
    <Column value={0.6} height={0.7} />
    <Column value={0.8} height={0.9} />
    <Column value={0.5} height={0.45} />
    <Column value={0.8} height={1} />
    <Column value={0.7} height={0.7} />
  </Flex>
)

export default Graph
