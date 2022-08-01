import Head from "next/head";
import GradientLayout from "components/GradientLayout";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GradientLayout color="green">
        <div>Home Page</div>
      </GradientLayout>
    </div>
  );
};

export default Home;
