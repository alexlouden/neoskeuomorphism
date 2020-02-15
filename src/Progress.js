import React from 'react'
import { Flex, Box, useThemeUI } from 'theme-ui'
import { shadow } from './theme'

const Progress = ({ value = 0 }) => {
  const { theme } = useThemeUI()
  return (
    <Box sx={{ width: '100%', boxShadow: shadow(3), borderRadius: 'pill' }}>
      <Box
        sx={{
          background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
          width: `${value * 100}%`,
          height: 10,
          borderRadius: 'pill'
        }}
      ></Box>
    </Box>
  )
}
export default Progress
