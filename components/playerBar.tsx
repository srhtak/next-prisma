import { Box, Flex, Text } from "@chakra-ui/layout";
import { useSelector } from "react-redux";
import { RootState } from "store";
import Player from "./player";

const PlayerBar = () => {
  const songs = useSelector((state: RootState) => state.song.songs);
  const activeSong = useSelector((state: RootState) => state.song.activeSong);

  return (
    <Box height="100px" width="100vw" bg="gray.900" padding="10px">
      <Flex align="center">
        {activeSong ? (
          <Box padding="20px" color="white" width="30%">
            <Text fontSize="large">{activeSong.name}</Text>
            <Text fontSize="sm">artist name</Text>
          </Box>
        ) : null}
        <Box width="40%">
          {activeSong ? <Player songs={songs} activeSong={activeSong} /> : null}
        </Box>
      </Flex>
    </Box>
  );
};

export default PlayerBar;
