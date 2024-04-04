import { Heading, VStack } from "@chakra-ui/react";
import TicTacToe from "../components/TicTacToe";

const Index = () => {
  return (
    <VStack spacing={8} mt={8}>
      <Heading as="h1" size="xl">
        Tic Tac Toe
      </Heading>
      <TicTacToe />
    </VStack>
  );
};

export default Index;
