import useGenres, { Genre } from '../hooks/useGenre';
import { HStack, Image, List, ListItem, Skeleton } from '@chakra-ui/react';
import getCroppedImageUrl from '../service/image-url';


interface Props {
    selectedGenre: Genre | null;
    onSelectGenre: (genre: Genre) => void
}

const GenreList = ({ onSelectGenre }: Props) => {
    const { data, isLoading } = useGenres();
    const length = 15;
    const skeleton = new Array(length).fill(null)

    if (isLoading) return <>{skeleton.map((item,index) => <Skeleton key={index} width={"100%"} height="10px" p={2} />)}</>;

    return (
        <List>
            {data.map(genre => <HStack key={genre.id} onClick={() => onSelectGenre(genre)} cursor={"pointer"}>
                <Image height="20px" width="20px" src={getCroppedImageUrl(genre.image_background)}
                    alt={genre.name} />
                <ListItem >{genre.name}</ListItem>
            </HStack>)}
        </List>
    )
}

export default GenreList