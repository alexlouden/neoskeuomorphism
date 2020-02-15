import React, { useState } from 'react'
import BaseSwitch from 'react-switch'
import { useThemeUI, Flex } from 'theme-ui'
import styled from '@emotion/styled'
import { shadow } from './theme'

const StyledSwitch = styled(BaseSwitch)`
  .react-switch-bg {
    border: 1px solid transparent;
    box-shadow: ${shadow(16)};
  }
  .react-switch-handle {
    border: 1px solid rgba(0, 0, 0, 0.1) !important;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.4);
  }
`

const Switch = ({ onChange, checked: checkedDefault = false }) => {
  const { theme } = useThemeUI()
  const [checked, setChecked] = useState(checkedDefault)
  return (
    <Flex p={3} pl={24}>
      <StyledSwitch
        checked={checked}
        onChange={setChecked}
        offColor={theme.colors.background}
        onColor={theme.colors.primary}
        offHandleColor="#fff"
        onHandleColor="#fff"
        uncheckedIcon={false}
        boxShadow={null}
        activeBoxShadow={null}
        checkedIcon={false}
        handleDiameter={38}
        height={30}
        width={60}
      />
    </Flex>
  )
}
export default Switch
