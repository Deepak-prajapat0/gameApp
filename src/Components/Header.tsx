// 4d9419fce745878aae6d7679715451
import { AiOutlineSearch } from 'react-icons/ai';
import { HStack, Input, InputGroup, InputLeftElement, Show, Text } from '@chakra-ui/react';
import SideDrawer from './Drawer/SideDrawer';

import useGameQueryStore from '../store';
import { useCallback } from 'react';
import { debounce } from 'lodash';
// import {lodas}


export default function Header() {
  const setSearch = useGameQueryStore(s => s.setSearch)

  const delayedQuery = useCallback(debounce(q => setSearch(q), 500), []);
  const handleChange = (e: any) => {
    delayedQuery(e.target.value);
  };



  return (
    <HStack spacing='24px' p="1rem" w="100vw" bg="black" color="white" justifyContent="space-between" position="fixed" top="0" left="0" zIndex={10}>
      <Text fontWeight={900} letterSpacing={2} fontSize="lg">FantasyX</Text>
      <InputGroup width={"40rem"} color="black"   >
        <InputLeftElement pointerEvents='none' >
          <AiOutlineSearch />
        </InputLeftElement>
        <Input type='search' onChange={handleChange} placeholder='Search here ...' bg={"#414141"} border={"none"} _hover={{ bg: "white", color: "black" }} _focus={{ bg: "white", color: "black" }} borderRadius={"2rem"} />
      </InputGroup>
      <Show below='md'>
        <SideDrawer />
      </Show>
    </HStack>
  )
}
