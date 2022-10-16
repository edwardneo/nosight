import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { FaUpload, FaCameraRetro } from "react-icons/fa";
import Main from './components/Main';

const CFaUpload = chakra(FaUpload);
const CFaCameraRetro = chakra(FaCameraRetro);

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <div style={{ overflow: "auto" }}>
      <Main setToken={setToken} token={token} />
    </div>
  );
}