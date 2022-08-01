import Head from "next/head";
import GradientLayout from "components/GradientLayout";

const Home = () => {
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
        <div>Home Page</div>
      </GradientLayout>
    </div>
  );
};

export default Home;
