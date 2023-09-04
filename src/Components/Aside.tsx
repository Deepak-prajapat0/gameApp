import { Box, Container, List, ListItem, VStack } from '@chakra-ui/react'
import GenreList from './GenreList'
import { Genre } from '../hooks/useGenre';

interface Props{
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}


export default function Aside({ selectedGenre, onSelectGenre }:Props) {
    const list = ['Home', "About", "Contact"]
  return (  
    <Container display={{minWidth:"400px"?"none":"block"}} w="16rem" minHeight="80vh" maxHeight="fit-content">
        <VStack>
            <Box p={3} bg={"purple-200"} w="100%">
                <List >
                    {list.map(item=>
                      <ListItem key={item} textAlign={"left"} p={1} w="100%" fontSize={25} fontWeight={600} cursor={"pointer"} _hover={{ color: "darkgray" }} >{item}</ListItem>    
                    )}
                </List>
            </Box>
        <GenreList selectedGenre={selectedGenre}  onSelectGenre={onSelectGenre} />
        </VStack>
    </Container>
  )
}
