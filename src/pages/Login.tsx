import React from "react";
import logo from "../assets/logoAI.png";
import {
  Box,
  Button,
  Center,
  Collapse,
  Grid,
  Heading,
  Image,
  Input,
} from "@chakra-ui/react";

interface Props {
  setPage: (nr: number) => void;
}
const Login = ({ setPage }: Props) => {
  return (
    <>
      <Grid>
        <Image src={logo} />
        <Center>
          <Box
            marginTop={5}
            backgroundColor={"#3D52D5"}
            width={371}
            height={261}
            borderRadius={20}
            paddingBlock={5}
            paddingInline={5}
            borderColor="#50C878"
            borderWidth={5}
          >
            <Heading>Welcome</Heading>
            <Input
              marginTop={5}
              background={"white"}
              placeholder="Username"
              textColor={"black"}
              _placeholder={{ opacity: 1, color: "black" }}
              borderRadius={20}
            ></Input>
            <Input
              marginTop={3}
              background={"white"}
              placeholder="Password"
              textColor={"black"}
              type={"password"}
              _placeholder={{ opacity: 1, color: "black" }}
              borderRadius={20}
            ></Input>
            <Grid templateColumns="repeat(2, 1fr)" marginTop={5}>
              <Button
                width={"98%"}
                backgroundColor={"#50C878"}
                _hover={{ backgroundColor: "#98FB98" }}
                onClick={() => setPage(1)}
              >
                SignUp
              </Button>
              <Button
                width={"98%"}
                backgroundColor={"white"}
                textColor={"black"}
                onClick={() => setPage(3)}
              >
                LogIn
              </Button>
            </Grid>
          </Box>
        </Center>
      </Grid>
    </>
  );
};

export default Login;
