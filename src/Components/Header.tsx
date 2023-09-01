// 534d9419fce745878aae6d7679715451
import { Box, HStack, List, ListItem } from '@chakra-ui/react'

export default function Header() {
    const list =['Home',"About","Contact"]
    return (
        <HStack spacing='24px' p="12px" w="100vw" bg="black" color="white">
          <List p="6px 0 0 0" display={"flex"} gap={5} >
             {list.map(link=>
             <ListItem key={link} p="2px 16px" borderBottom="2px solid black" _hover={{borderBottom:"2px solid white"}} transition={"all .3s ease-in-out"} cursor={"pointer"}>
                {link}
            </ListItem>
            )}
          </List>
        </HStack>
    )
}
