import './view.css';
import {
  Flex,
  Button,
  Stack,
  chakra,
  Box,
} from "@chakra-ui/react";
import { useState, useEffect } from 'react';

export default function View() {
  const [ imageArr, setImageArr ] = useState([]);

  const getImages = () => {
    fetch("https://us-central1-nosight-c105e.cloudfunctions.net/app/getImages")
    .then(res => res.json())
    .then(res => {
      const images = [];
      res.images.forEach((image, i) => {
          images.push((
            <div className="content" key={i}>
              <h1 className="close">X</h1>
              <img className="img" src={image.data.uri} alt="Filler" />
            </div>
          ));
          
          if (image.data.uri2 !== undefined) {
            images.push((
              <div className="content" key={i}>
                <h1 className="close">X</h1>
                <img className="img" src={image.data.uri2} alt="Filler" />
              </div>
            ))
          }
        }
      );
      setImageArr(images);
    }).catch(err => console.error(err));
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <Flex
    flexDirection="row"
    backgroundColor="#202C39"
    justifyContent="center"
    alignItems="center"
  >
    <Stack
      flexDir="row"
      mb="2"
      justifyContent="center"
      alignItems="center"
    >
      <Box minW={{ base: "90%", md: "468px" }}>
        <Stack
          spacing={10}
          
          p="1rem"
          flexDir="column"
          backgroundColor="#F2D492"
          boxShadow="md"
          borderRadius={5}
          alignItems="center"
          justifyContent="center"
        >
          {imageArr}
        </Stack>
      </Box>
    </Stack>
  </Flex>
  );
}
