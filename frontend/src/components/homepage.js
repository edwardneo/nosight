import {
  Flex,
  Button,
  Stack,
  chakra,
  Box,
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { FaUpload, FaCameraRetro } from "react-icons/fa";

const CFaUpload = chakra(FaUpload);
const CFaCameraRetro = chakra(FaCameraRetro);

export default function Homepage( { setToken }) {

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
          <form>
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
            <Link to="capture">
              <Button
                borderRadius={5}
                flex={1}
                variant="solid"
                colorScheme="teal"
                onClick= {() => {setToken("capture")}}
                children={<CFaCameraRetro color="white"/>}
              /> 
            </Link>
            <Link to="view">
              <Button
                borderRadius={5}
                flex={1}
                variant="solid"
                colorScheme="teal"
                onClick= {() => {setToken("view")}}
                children={<CFaUpload color="white"/>}
              />
            </Link>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}