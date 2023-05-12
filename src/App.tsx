import { Box, Button, Center, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import Login from "./pages/Login";
import Onboarding from "./pages/Onboarding";
import Deposit from "./pages/Deposit";
import Dashboard from "./pages/Dashboard";
import Withdraw from "./pages/Withdraw";

const App = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [funds, setFunds] = useState(0);

  const setPage = () => {
    switch (pageNumber) {
      case 0:
        return <Login setPage={(nr) => setPageNumber(nr)} />;
      case 1:
        return <Onboarding setPage={(nr) => setPageNumber(nr)} />;
      case 2:
        return (
          <Deposit
            funds={funds}
            setPage={(nr) => setPageNumber(nr)}
            setFunds={(nr) => setFunds(nr)}
          />
        );
      case 3:
        return <Dashboard setPage={(nr) => setPageNumber(nr)} funds={funds} />;
      case 4:
        return (
          <Withdraw
            setPage={(nr) => setPageNumber(nr)}
            funds={funds}
            setFunds={(nr) => setFunds(nr)}
          />
        );
    }
  };

  return (
    <Center>
      <Box
        marginTop={10}
        backgroundColor={"#B4C5E4"}
        height={852}
        width={393}
        borderRadius={20}
      >
        <Box backgroundColor={"#3D52D5"} height={136} borderTopRadius={20}>
          <Center>
            <Heading marginTop={"70px"}>AInvest</Heading>
          </Center>
        </Box>
        <Center> {setPage()}</Center>
      </Box>
    </Center>
  );
};

export default App;
