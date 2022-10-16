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
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <form>
        <Link to="capture">
            <Button
            borderRadius={5}
            flex={1}
            variant="solid"
            colorScheme="teal"
            onClick= {() => {setToken("capture")}}
            children={<CFaCameraRetro color="white" /> }
            /> 
        </Link>
        <Stack padding={3}></Stack>
        <Link to="view">
            <Button
            borderRadius={5}
            flex={2}
            variant="solid"
            colorScheme="teal"
            onClick= {() => {setToken("view")}}
            children={<CFaUpload color="white"/>}
            />
        </Link>
        </form>
      </Stack>
    </Flex>
  );
}