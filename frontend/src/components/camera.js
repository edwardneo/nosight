import {
    Flex,
    Button,
    Stack,
    chakra,
    Box,
  } from "@chakra-ui/react";

export default function Camera() {
    return (
        <Flex
        flexDirection="row"
        width="100wh"
        height="100vh"
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
              spacing={4}
              p="1rem"
              flexDir="row"
              backgroundColor="#F2D492"
              boxShadow="md"
              borderRadius={5}
              alignItems="center"
              justifyContent="center"
            >
                <video id="video-tag" playsInline={true} autoPlay={true} />
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
}