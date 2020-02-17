import React from 'react'
import {
  ThemeProvider,
  Grid,
  Flex,
  Box,
  Text,
  Button,
  Input,
  Link,
  useThemeUI
} from 'theme-ui'
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
import Switch from './Switch'
import Progress from './Progress'
import Graph from './Graph'

const BigButton = () => {
  const { theme } = useThemeUI()

  return (
    <Button variant="bigsquare" sx={{ gridArea: 'span 2' }}>
      <Text
        sx={{
          fontSize: 54,
          background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Aa
      </Text>
    </Button>
  )
}

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
  <Button sx={{ justifyContent: 'space-between' }}>
    <Text px={2}>Dropdown</Text>
    <ChevronDown size={22} />
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

const Title = () => (
  <Text sx={{ m: 4, gridArea: 'auto / span 5', textAlign: 'center' }}>
    <Link
      href="https://github.com/alexlouden/neoskeuomorphism"
      sx={{ color: 'primary' }}
    >
      neoskeuomorphism
    </Link>{' '}
    - the react component library.
    <br />
    <Link
      href="https://dribbble.com/shots/9527558-Freebie-Neumorphic-UX-UI-Elements"
      sx={{ color: 'primary' }}
    >
      Design by MazePixel
    </Link>
  </Text>
)

export default () => (
  <ThemeProvider theme={theme}>
    <Flex
      sx={{ alignItems: 'center', justifyContent: 'center', minHeight: '90vh' }}
    >
      <Grid
        m={4}
        gap={0}
        sx={{ display: 'inline-grid' }}
        columns={[2, 'repeat(5, auto)']}
      >
        <Title />

        {/* First row */}
        <BigButton />
        <Button>Button</Button>
        <LeftButton />
        <RightButton />
        <Switch />

        {/* Second row */}
        <Input defaultValue="Input" />
        <CircleButton />
        <DotButton />
        <Switch checked />

        {/* Third row */}
        <ShareButton />
        <Dropdown />
        <Box sx={{ m: 3, gridArea: 'span 3 / span 3' }}>
          <Graph />
        </Box>

        {/* Fourth row */}
        <PinButton />
        <AddUserButton />

        {/* Fifth row */}
        <SearchInput />

        {/* Sixth row */}
        <Box sx={{ gridArea: 'auto / span 5', p: 3, mt: 4 }}>
          <Progress value={0.38} />
        </Box>
      </Grid>
    </Flex>
  </ThemeProvider>
)
