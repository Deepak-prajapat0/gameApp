import useGenres, { Genre } from '../../hooks/useGenre';
import { HStack, Image, List, ListItem, Skeleton } from '@chakra-ui/react';
import getCroppedImageUrl from '../../service/image-url';


interface Props {
    selectedGenre: Genre | null;
    onSelectGenre: (genre: Genre) => void
}

const GenreList = ({ onSelectGenre }: Props) => {
    const { data, isLoading } = useGenres();
    const length = 15;
    const skeleton = new Array(length).fill(null)

    if (isLoading) return <>{skeleton.map((s, index) => <Skeleton key={s||index} width={"100%"} height="20px" p={4} />)}</>;

    return (
        <List>
            {data.map(genre =>
                <HStack key={genre.id} onClick={() => onSelectGenre(genre)} cursor={"pointer"} borderRadius={5} _hover={{ bg:"#222121"}} >
                    <Image height="30px" width="30px" borderRadius={5} objectFit={'cover'} src={getCroppedImageUrl(genre.image_background)}
                        alt={genre.name} />
                    <ListItem p="8px" >{genre.name}</ListItem>
                </HStack>)}
        </List>
    )
}

export default GenreList