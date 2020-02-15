import React from 'react'
import { ThemeProvider, Grid, Flex, Box, Text, Button, Input } from 'theme-ui'
import {
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Circle,
  Search,
  UserPlus,
  Share2,
  MapPin
} from 'react-feather'
import Dot from './Dot'
import theme from './theme'

const BigButton = () => (
  <Button variant="bigsquare" sx={{ gridArea: 'span 2' }}>
    <Text
      sx={{
        fontSize: 54,
        background: 'linear-gradient(90deg, blue, aqua)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
      }}
    >
      Aa
    </Text>
  </Button>
)

const LeftButton = () => (
  <Button variant="square">
    <ChevronLeft size={20} />
  </Button>
)

const RightButton = () => (
  <Button variant="square">
    <ChevronRight size={20} />
  </Button>
)

const CircleButton = () => (
  <Button variant="circular">
    <Circle size={20} />
  </Button>
)

const DotButton = () => (
  <Button variant="circular">
    <Dot />
  </Button>
)

const ShareButton = () => (
  <Button>
    <span>Share</span>
    <Share2 size={20} />
  </Button>
)

const PinButton = () => (
  <Button>
    <MapPin size={20} />
    <span>Label</span>
  </Button>
)

const AddUserButton = () => (
  <Button>
    <UserPlus size={22} />
    <span>Add User</span>
  </Button>
)

const Dropdown = () => (
  <Button sx={{ justifyContent: 'space-around' }}>
    <span>Dropdown</span>
    <ChevronDown size={20} />
  </Button>
)

const SearchInput = () => (
  <Box
    sx={{
      position: 'relative',
      gridArea: 'auto / span 2',
      mx: 2
      // fixme: not sure why this is necessary with border-box
    }}
  >
    <Input placeholder="Search for ..." variant="search" sx={{ mx: 0 }} />
    <Flex
      sx={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 18,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Search size={20} />
    </Flex>
  </Box>
)

export default () => (
  <ThemeProvider theme={theme}>
    <Grid
      m={4}
      gap={0}
      sx={{ display: 'inline-grid' }}
      columns={[2, 'repeat(5, auto)']}
    >
      {/* First row */}
      <BigButton />
      <Button>Button</Button>
      <LeftButton />
      <RightButton />
      <div>Switch</div>

      {/* Second row */}
      <Input defaultValue="Input" />
      <CircleButton />
      <DotButton />
      <div>Switch</div>

      {/* Third row */}
      <ShareButton />
      <Dropdown />
      <Box sx={{ gridArea: 'span 3 / span 3', border: '1px solid blue' }} />

      {/* Fourth row */}
      <PinButton />
      <AddUserButton />

      {/* Fifth row */}
      <SearchInput />
    </Grid>
  </ThemeProvider>
)
