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
  console.log(imageArr);
  const deleteImage = (index, id) => {
    console.log(id);
    console.log(imageArr);
    const temp = [];
    for (let image of imageArr) {
      //console.log(image?.id);
      if (image?.id !== id) {
        temp.push(image)
      }
    }
    setImageArr(temp);

    fetch("https://us-central1-nosight-c105e.cloudfunctions.net/app/deleteImage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "img_id": id
      })
    }).then(() => {
      console.log(`Element ${id} removed!`)
    }).catch((err) => {
      console.log(err);
    })
  }

  const getImages = () => {
    fetch("https://us-central1-nosight-c105e.cloudfunctions.net/app/getImages", { method: "GET" })
    .then(res => res.json())
    .then(res => {
      setImageArr(res?.images)
    }).catch(err => console.error(err));
  }

  useEffect(() => {
    getImages();
  }, []);

  let imageElements = []
  imageArr.forEach((image, i) => {
    if (image.data.uri2 === undefined) {
      imageElements.push((
        <div className="content" key={image.id} id={image.id}>
          <h1 className="close" onClick={() => deleteImage(i, image.id)}>X</h1>
          <img className="img" src={image.data.uri} alt="Filler" />
        </div>
      ));
    } else {
      imageElements.push((
        <div key={image.id} id={image.id}>
          <div className="content">
            <h1 className="close" onClick={() => deleteImage(i, image.id)}>X</h1>
            <img className="img" src={image.data.uri} alt="Filler" />
          </div>
          <div className="content">
            <h1 className="close" onClick={() => deleteImage(i, image.id)}>X</h1>
            <img className="img" src={image.data.uri2} alt="Filler" />
          </div>
        </div>
      ));
    }
  });

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
          {imageElements}
        </Stack>
      </Box>
    </Stack>
  </Flex>
  );
}
