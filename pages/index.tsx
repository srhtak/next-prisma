import Head from "next/head";
import GradientLayout from "components/GradientLayout";
import prisma from "lib/prisma";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const Home = ({ artists }) => {
  return (
    <div>
      <Head>
        <title>Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GradientLayout
        roundImage
        image="https://tinted-gym-f99.notion.site/image/https%3A%2F%2Fdl.dropboxusercontent.com%2Fs%2Fbgiv0ssz3xpotz9%2Fpeep.png%3Fdl%3D0?table=block&id=33f9771b-0e6f-4a72-832c-69ed2d41f290&spaceId=511cd811-5561-4a61-b550-c4086b4afafb&width=2000&userId=&cache=v2"
        subtitle="profile"
        title="Serhat Ak"
        description="15 public playlist"
        color="green"
      >
        <Box overflow="hidden" color="white" paddingX="40px">
          <Box marginBottom="40px">
            <Text fontSize="2xl" fontWeight="bold">
              Top artist this month
            </Text>
            <Text fontSize="md" color="gray.600">
              Only visible to you
            </Text>
          </Box>
          <Flex>
            {artists.map((artist) => (
              <Box paddingX="10px" width="20%">
                <Box
                  bg="gray.900"
                  borderRadius="4px"
                  padding="15px"
                  width="100%"
                >
                  <Image
                    src="http://placekitten.com/300/300"
                    borderRadius="100%"
                  />
                  <Box>
                    <Text fontSize="lg">{artist.name}</Text>
                    <Text fontSize="x-small">Artist</Text>
                  </Box>
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>
      </GradientLayout>
    </div>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});

  return {
    props: { artists },
  };
};

export default Home;
