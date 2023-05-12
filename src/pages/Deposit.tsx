import {
  Box,
  Button,
  Checkbox,
  Grid,
  Heading,
  SimpleGrid,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import React, { useState } from "react";
interface Props {
  setPage: (nr: number) => void;
  setFunds: (nr: number) => void;
  funds: number;
}
const Deposit = ({ setPage, setFunds, funds }: Props) => {
  const [sliderValue, setSliderValue] = useState(5000);
  const [sliderValue2, setSliderValue2] = useState(2500);

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
    >
      <Heading fontSize={30}>Depozit</Heading>
      <SimpleGrid columns={2} marginTop={5} alignItems={"baseline"}>
        <Box backgroundColor={"#23145F"} padding={2} borderRadius={20}>
          <Heading>${sliderValue}</Heading>
        </Box>
        <Heading fontSize={18} marginLeft={2}>
          One time depozit
        </Heading>
      </SimpleGrid>
      <Box pt={6} pb={2}>
        <Slider onChange={(val) => setSliderValue(val)} max={10000}>
          <SliderMark value={0} {...labelStyles}>
            0
          </SliderMark>

          <SliderMark value={9000} {...labelStyles}>
            10.000
          </SliderMark>

          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
      <Heading fontSize={30} marginTop={5}>
        Recurring depozit
      </Heading>
      <SimpleGrid columns={2} marginTop={5} alignItems={"baseline"}>
        <Box backgroundColor={"#23145F"} padding={2} borderRadius={20}>
          <Heading>${sliderValue2}</Heading>
        </Box>
        <Heading fontSize={18} marginLeft={2}>
          /time
        </Heading>
      </SimpleGrid>
      <Box pt={6} pb={2}>
        <Slider onChange={(val) => setSliderValue2(val)} max={5000}>
          <SliderMark value={0} {...labelStyles}>
            0
          </SliderMark>

          <SliderMark value={4500} {...labelStyles}>
            5.000
          </SliderMark>

          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
      <Heading fontSize={25} marginTop={5} marginBottom={5}>
        Recurrence
      </Heading>
      <Grid>
        <Checkbox size={"lg"} iconColor="white" borderColor={"white"}>
          Weekly
        </Checkbox>
        <Checkbox size={"lg"} iconColor="white" borderColor={"white"}>
          Monthly
        </Checkbox>
        <Checkbox size={"lg"} iconColor="white" borderColor={"white"}>
          Yearly
        </Checkbox>
      </Grid>
      <Button
        marginTop={10}
        width={"98%"}
        backgroundColor={"white"}
        textColor={"black"}
        onClick={() => {
          setPage(3);
          setFunds(sliderValue + sliderValue2 + funds);
        }}
      >
        Continue
      </Button>
    </Box>
  );
};

export default Deposit;
