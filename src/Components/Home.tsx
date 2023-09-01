import { Button, ButtonGroup, Card, CardBody, CardFooter, Container, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface Game{
    id:number;
    slug:string;
    name:string;
    background_image:string;
    rating:number;
    ratings_count:number;
    genres:[{}];
    playtime:number
    platforms:[{}];
    released:string;

}
// interface FetchGameData{
//   count:number;
//   results:Game[]
// }

export default function Home() {
  const[games,setGames]= useState<Game[]>([])

  // useEffect(()=>{
  //   let api =async()=>{
  //     await axios.get('https://api.rawg.io/api/games', { params: { key:"534d9419fce745878aae6d7679715451"}}).then((res) => {
  //       setGames(res.data.results)
  //     })
  //   }
  //   api()
  // },[])



  return (
    <Container p={"2rem"} maxW={"container-lg"} w='100%' h="100%" display={"flex"} flexDirection={"row"} flexWrap={"wrap"} gap="5px" justifyContent={"center"}>
        {games.map((game,index)=>
          <Card maxW='sm' key={index} borderRadius={"1rem"} >
            <CardBody bg="black" p={"10px"} color="white" width={"18rem"} borderRadius={"1rem"}  >
              <Image
                src={game.background_image}
                alt={game.name}
                borderRadius='lg'
                maxWidth={"100%"}
                height={"11rem"}
                objectFit={"cover"}
              />
              <Stack mt='6' p="10px" spacing='3'>
                <Heading size='sm'>{game.name}</Heading>
                <Text color='yellow' mt="auto" fontSize='10px'>
                  {game.rating}
                </Text>
              </Stack>
            </CardBody>
          </Card>
        )}
        
    </Container>
  )
}
