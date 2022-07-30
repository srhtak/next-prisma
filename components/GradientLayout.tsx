import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const gradientLayout = ({
  color,
  children,
  image,
  subtitle,
  title,
  description,
  roundImage,
}) => {
  return (
    <Box
      height="calc(100vh - 100px)"
      overflowY="auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
    >
      <Flex bg={`${color}.600`} padding="40px" align="end">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempore
        distinctio mollitia rem voluptatibus esse ea consequuntur ad unde
        ducimus. Consequuntur delectus non minima quidem aliquid ducimus
        voluptatum quo cupiditate.
      </Flex>
    </Box>
  );
};

export default gradientLayout;
