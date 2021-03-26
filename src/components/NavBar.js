import {
  Box,
  Flex,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Image,
  Text,
} from '@chakra-ui/react';
import { Link as ReachLink } from "react-router-dom"

const NavItem = (props) => {
  const { label, url } = props;
  return (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        fontWeight: 'semibold'
      }}
      as={ReachLink}
      to={url}
      fontSize="lg"
    >
      {label}
    </Link>
  )
}

const NavPicItem = (props) => {
  const { url } = props;
  return (
    <HStack
      as={'nav'}
      spacing={4}
      display={{ base: 'none', md: 'flex' }}>
      <Link as={ReachLink} to={url}><Image src="/assets/noti.png" boxSize="5.5vh" objectFit="contain" cursor="pointer" _hover={{ boxSize: "6vh" }} /></Link>
    </HStack>
  )
}

const NavDropdown = (props) => {
  const { label, dUrl, mUrl, oUrl } = props;
  return (
    <Menu placement="bottom-end">
      <MenuButton
        as={Box}
        fontSize="lg"
        variant={'link'}
        cursor={'pointer'}
        _hover={{
          fontWeight: "semibold"
        }}>

        <HStack><Text>{label}</Text><Image src="/assets/dropdown.png" boxSize="2.5vh" /></HStack>
      </MenuButton>
      <MenuList>
      <Link as={ReachLink} to={oUrl} _hover={{ textDecoration: 'none' }}><MenuItem>Overview</MenuItem></Link>
        <MenuDivider />
        <Link as={ReachLink} to={dUrl} _hover={{ textDecoration: 'none' }}><MenuItem>Daily Report</MenuItem></Link>
        <MenuDivider />
        <Link as={ReachLink} to={mUrl} _hover={{ textDecoration: 'none' }}><MenuItem>Monthly Report</MenuItem></Link>
      </MenuList>
    </Menu>
  )
}

export default function NavBar() {
  return (
    <Box bg="#94EBF6" px={8} position="fixed" minWidth="100%" filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" height="fit-content" minHeight="8vh" zIndex="10">
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Image src="/assets/logo.png" boxSize="6.5vh" objectFit="contain" />
        <Flex alignItems={'center'}>
          <HStack spacing={8} alignItems={'center'}>
            <NavItem label="Home" url="/main" />
            <NavDropdown label="Overall" oUrl="/branchSelect" dUrl="/branchSelect" mUrl="/branchSelect" />
            <NavDropdown label="Branch" oUrl="/branchSelect" dUrl="/dailyBranch" mUrl="/branchSelect" />
            <NavItem label="Logout" url="/" />
            <NavPicItem url="/recommend"></NavPicItem>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}