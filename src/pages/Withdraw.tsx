import {
  Box,
  Button,
  Center,
  Heading,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  setPage: (nr: number) => void;
  funds: number;
  setFunds: (nr: number) => void;
}
const Withdraw = ({ setPage, funds, setFunds }: Props) => {
  const [sliderValue, setSliderValue] = useState(funds / 2);

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "lg",
  };
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
      <Heading fontSize={30}>Withdraw</Heading>
      <Heading fontSize={25} marginTop={10} marginBottom={3}>
        Available balance
      </Heading>
      <Box
        backgroundColor={"#23145F"}
        padding={2}
        borderRadius={20}
        width={200}
      >
        <Center>
          <Heading>${funds}</Heading>
        </Center>
      </Box>
      <Heading fontSize={25} marginTop={5} marginBottom={3}>
        Withdraw
      </Heading>
      <Box
        backgroundColor={"#23145F"}
        padding={2}
        borderRadius={20}
        width={200}
      >
        <Center>
          <Heading>${sliderValue}</Heading>
        </Center>
      </Box>
      <Box pt={6} pb={2}>
        <Slider onChange={(val) => setSliderValue(val)} max={funds}>
          <SliderMark value={0} {...labelStyles}>
            0
          </SliderMark>

          <SliderMark value={funds - 1500} {...labelStyles}>
            {funds}
          </SliderMark>

          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
      <Button
        marginTop={200}
        width={"98%"}
        backgroundColor={"white"}
        textColor={"black"}
        onClick={() => {
          setPage(3);
          setFunds(funds - sliderValue);
        }}
      >
        Withdraw Now!
      </Button>
    </Box>
  );
};

export default Withdraw;
