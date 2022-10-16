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
          
          if (image.data.uri2 !== undefined) {
            images.push((
              <div className="content" flexDir="row">
                <h1 className="close">X</h1>
                <img className="img" src={image.data.uri} alt="Filler" />
                <img className="img" src={image.data.uri2} alt="Filler" />
              </div>
            ))
          } else {
            images.push((
              <Stack flexDir="column" className="content" key={i}>
                <h1 className="close">X</h1>
                <img className="img" src={image.data.uri} alt="Filler" />
              </Stack>
            ));
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
    backgroundColor="#F2D492"
    justifyContent="center"
    alignItems="center"
  >
    <Stack
      flexDir="column"
      mb="2"
      justifyContent="center"
      alignItems="center"
    >
      {imageArr}
    </Stack>
  </Flex>
  );
}
