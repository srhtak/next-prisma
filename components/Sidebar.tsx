import {
  Box,
  List,
  ListIcon,
  ListItem,
  Divider,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import { Spinner, Center } from "@chakra-ui/react";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { usePlaylist } from "lib/hooks";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const music = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];

// const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const Sidebar = () => {
  const { playlists, isLoading } = usePlaylist();
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <Image src="/logo.png" objectFit="contain" width={32} height={32} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <Link href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider color="gray.800" />
        <Box marginTop="20px" marginBottom="20px">
          <List spacing={2}>
            {music.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <Link href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider color="gray.800" />
        <Box
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
          height="55%"
          overflowY="auto"
          paddingY="20px"
        >
          <List spacing={2}>
            {isLoading ? (
              <Center>
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="green.500"
                  size="md"
                />
              </Center>
            ) : (
              playlists.map((playlist) => (
                <ListItem paddingX="20px" key={playlist.id}>
                  <LinkBox>
                    <Link
                      href={{
                        pathname: "/playlist/[id]",
                        query: { id: playlist.id },
                      }}
                      passHref
                    >
                      <LinkOverlay>{playlist.name}</LinkOverlay>
                    </Link>
                  </LinkBox>
                </ListItem>
              ))
            )}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
