import { useState } from "react";
import { Button, Grid, Heading, VStack } from "@chakra-ui/react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);

    const newPlayer = player === "X" ? "O" : "X";
    setPlayer(newPlayer);

    checkWinner(newBoard);
  };

  const checkWinner = (board) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }

    if (!board.includes(null)) {
      setWinner("draw");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
  };

  return (
    <VStack spacing={4} align="center">
      <Grid templateColumns="repeat(3, 1fr)" gap={2}>
        {board.map((cell, index) => (
          <Button key={index} onClick={() => handleClick(index)} size="lg" fontSize="4xl" w={24} h={24} variant="outline" colorScheme="teal" disabled={cell}>
            {cell}
          </Button>
        ))}
      </Grid>

      {winner && (
        <Heading as="h2" size="lg" color={winner === "draw" ? "gray.500" : "teal.500"}>
          {winner === "draw" ? "It's a draw!" : `Player ${winner} wins!`}
        </Heading>
      )}

      <Button onClick={resetGame} size="lg" colorScheme="teal">
        New Game
      </Button>
    </VStack>
  );
};

export default TicTacToe;
