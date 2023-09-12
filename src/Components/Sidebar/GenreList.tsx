import useGenres from '../../hooks/useGenre';
import { HStack, Image, List, ListItem, VStack } from '@chakra-ui/react';
import getCroppedImageUrl from '../../service/image-url';
import useGameQueryStore from '../../store';
// import { FaArrowDown } from 'react-icons/fa';


const GenreList = () => {
    const { data } = useGenres();
    const setGenreId   = useGameQueryStore(s => s.setGenre)
    const selectedGenre = useGameQueryStore(s=>s.gameQuery.genre)

    return (
       <VStack>
            <List>
                {data.map(genre =>
                    <HStack key={genre.id} background={selectedGenre === genre ? "#212121" : ""} onClick={() => setGenreId(genre) } cursor={"pointer"} borderRadius={5} _hover={{ bg: "#222121" }} >
                        <Image height="30px" width="30px" borderRadius={5} objectFit={'cover'} src={getCroppedImageUrl(genre.image_background)}
                            alt={genre.name} />
                        <ListItem p="8px" >{genre.name}</ListItem>
                    </HStack>)}
            </List>
            {/* <Button onClick={() => setMoreGenre(!moreGenre)}>{moreGenre ? <span><FaArrowDown /><span>Show less</span></span>:"Show more"}</Button> */}
       </VStack>
    )
}

export default GenreList