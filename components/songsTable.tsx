import { Box } from "@chakra-ui/layout";
import { Table, Thead, Td, Tr, Tbody, Th, IconButton } from "@chakra-ui/react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { formatDate, formatTime } from "lib/formatters";
import { useDispatch } from "react-redux";
import { changeActiveSong, changeActiveSongs } from "store/songReducer";

const SongsTable = ({ songs }) => {
  const dispatch = useDispatch();

  const handlePlay = (activeSong?) => {
    dispatch(changeActiveSong(activeSong || songs[0]));
    dispatch(changeActiveSongs(songs));
  };

  return (
    <Box bg="transparent" color="white">
      <Box padding="10px" marginBottom="20px">
        <Box marginBottom="30px" marginLeft="10px">
          <IconButton
            icon={<BsFillPlayFill fontSize="30px" />}
            colorScheme="green"
            size="lg"
            isRound
            aria-label="Play"
            onClick={() => handlePlay()}
          />
        </Box>
        <Table variant="unstyled">
          <Thead borderBottom="1px solid" borderColor="rgba(255,255,255,0.2)">
            <Tr>
              <Th>#</Th>
              <Th>Title</Th>
              <Th>Date Added</Th>
              <Th>
                <AiOutlineClockCircle />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {songs.map((song, i) => (
              <Tr
                cursor="pointer"
                key={song.id}
                sx={{
                  transition: "all 0.3s",
                  "&:hover": {
                    bg: "rgba(255,255,255,0.1)",
                  },
                }}
                onClick={() => handlePlay(song)}
              >
                <Td>{i + 1}</Td>
                <Td>{song.name}</Td>
                <Td>{formatDate(song.createdAt)}</Td>
                <Td>{formatTime(song.duration)}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default SongsTable;
