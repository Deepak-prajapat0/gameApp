// 534d9419fce745878aae6d7679715451
import {AiOutlineSearch} from 'react-icons/ai'
import { HStack, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
// import ColorModeSwitch from './ColorModeSwitch'

interface Props{
  onSearch:(query:string)=>void
}

export default function Header({ onSearch }:Props) {


  return (
    <HStack spacing='24px' p="2rem" w="100vw" bg="black" color="white" justifyContent="space-between">
      <Text fontWeight={900} letterSpacing={2} fontSize="xl">GameX</Text>
      <InputGroup width={"40rem"}  color="black" >
        <InputLeftElement pointerEvents='none' >
          <AiOutlineSearch />
        </InputLeftElement>
        <Input type='search' onChange={(e) => onSearch(e.target.value)} placeholder='Search here ...'  bg={"#414141"} border={"none"}  _hover={{ bg: "white", color: "black" }} _focus={{ bg: "white", color: "black" }} borderRadius={"2rem"} />
      </InputGroup>
      {/* <ColorModeSwitch/> */}
    </HStack>
  )
}
