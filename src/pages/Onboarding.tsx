import {
  Box,
  Button,
  Center,
  Checkbox,
  Grid,
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
}
const Onboarding = ({ setPage }: Props) => {
  const [sliderValue, setSliderValue] = useState(12);
  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "lg",
  };

  return (
    <Center>
      <Box
        marginTop={5}
        backgroundColor={"#3D52D5"}
        width={371}
        height={648}
        borderRadius={20}
        paddingBlock={5}
        paddingInline={5}
      >
        <Heading fontSize={30}>Investing Preferences</Heading>
        <Grid>
          <Heading fontSize={25} marginBottom={3} marginTop={5}>
            Risk
          </Heading>
          <Checkbox size={"lg"} iconColor="white" borderColor={"white"}>
            Low
          </Checkbox>
          <Checkbox size={"lg"} iconColor="white" borderColor={"white"}>
            Medium
          </Checkbox>
          <Checkbox size={"lg"} iconColor="white" borderColor={"white"}>
            High
          </Checkbox>
        </Grid>
        <Grid>
          <Heading fontSize={25} marginBottom={3} marginTop={5}>
            Portfolio
          </Heading>
          <Checkbox size={"lg"} iconColor="white" borderColor={"white"}>
            Crypto
          </Checkbox>
          <Checkbox size={"lg"} iconColor="white" borderColor={"white"}>
            Stocks
          </Checkbox>
          <Checkbox size={"lg"} iconColor="white" borderColor={"white"}>
            NFT
          </Checkbox>
          <Checkbox size={"lg"} iconColor="white" borderColor={"white"}>
            Any
          </Checkbox>
        </Grid>
        <Heading fontSize={25} marginBottom={3} marginTop={5}>
          Time Period (Months)
        </Heading>
        <Box pt={6} pb={2}>
          <Slider onChange={(val) => setSliderValue(val)} max={24}>
            <SliderMark value={0} {...labelStyles}>
              6
            </SliderMark>
            <SliderMark value={12} {...labelStyles}>
              12
            </SliderMark>
            <SliderMark value={24} {...labelStyles}>
              24
            </SliderMark>
            <SliderMark
              value={sliderValue}
              textAlign="center"
              bg="blue.500"
              color="white"
              mt="-10"
              ml="-2.5"
              w="18"
            >
              {sliderValue}
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Heading fontSize={24} marginTop={10}>
            {sliderValue} Months
          </Heading>
        </Box>
        <Button
          marginTop={5}
          width={"98%"}
          backgroundColor={"white"}
          textColor={"black"}
          onClick={() => setPage(2)}
        >
          Continue
        </Button>
      </Box>
    </Center>
  );
};

export default Onboarding;
