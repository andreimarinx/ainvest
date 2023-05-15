import {
  Box,
  Button,
  Center,
  Grid,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import graph from "../assets/graph.png";
interface Props {
  setPage: (nr: number) => void;
  funds: number;
}
const Dashboard = ({ setPage, funds }: Props) => {
  return (
    <Box
      marginTop={5}
      backgroundColor={"#3D52D5"}
      width={371}
      height={648}
      borderRadius={20}
      paddingBlock={5}
      paddingInline={5}
      borderColor="#50C878"
      borderWidth={5}
    >
      <Heading>Welcome!</Heading>
      <SimpleGrid columns={2} marginTop={10} alignItems={"baseline"}>
        <Box backgroundColor={"#23145F"} padding={2} borderRadius={20}>
          <Center>
            <Heading>${funds}</Heading>
          </Center>
        </Box>
        <Heading fontSize={22} marginLeft={2} color={"#98FB98"}>
          +0.0%
        </Heading>
      </SimpleGrid>
      <Image src={graph} marginTop={5} />
      <Heading fontSize={30}>Current Investments</Heading>
      <SimpleGrid columns={3} marginTop={2} alignItems={"baseline"}>
        <Heading fontSize={25}>Tesla</Heading>
        <Heading fontSize={25}>NIO</Heading>
        <Heading fontSize={25}>BTC</Heading>
        <Heading fontSize={25}>APPLE</Heading>
        <Heading fontSize={25}>BMW</Heading>
        <Heading fontSize={25}>ATM</Heading>
      </SimpleGrid>
      <Grid templateColumns="repeat(2, 1fr)" marginTop={10}>
        <Button
          width={"98%"}
          backgroundColor={"#50C878"}
          _hover={{ backgroundColor: "#98FB98" }}
          onClick={() => setPage(2)}
        >
          Deposit
        </Button>
        <Button
          width={"98%"}
          backgroundColor={"white"}
          textColor={"black"}
          onClick={() => setPage(4)}
        >
          Withdraw
        </Button>
      </Grid>
    </Box>
  );
};

export default Dashboard;
