import {
  Box,
  Button,
  Card,
  Center,
  Checkbox,
  Grid,
  Heading,
  SimpleGrid,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Tooltip,
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
        height={678}
        borderRadius={20}
        paddingBlock={5}
        paddingInline={5}
        borderColor="#50C878"
        borderWidth={5}
      >
        <Heading fontSize={30}>Investing Preferences</Heading>
        <Grid>
          <Heading fontSize={25} marginBottom={0} marginTop={5}>
            Risk
          </Heading>
          <Tooltip
            label="Risk- Chose the amount of risk to reward the AInvest will do. Lower means its less likely to lose on the investments  but the profit will be lower. Higher will have more risk of losing on the investment but the profit will be higher.
"
          >
            <Box
              backgroundColor={"#50C878"}
              width={"-moz-fit-content"}
              padding={1}
            >
              What is risk?
            </Box>
          </Tooltip>
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
          <Heading fontSize={25} marginBottom={0} marginTop={5}>
            Portfolio
          </Heading>
          <Tooltip
            label="Portfolio -  Chose Any if you dont have a preference on what Ainvest should invest in. If you do have a preference for a specific market, you can chose which one.

"
          >
            <Box
              backgroundColor={"#50C878"}
              width={"-moz-fit-content"}
              padding={1}
            >
              What is portfolio?
            </Box>
          </Tooltip>
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
