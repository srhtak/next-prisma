import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "reset-css";
import { StoreProvider } from "easy-peasy";
import { store } from "lib/store";
import { reduxStore } from "store";
import { Provider } from "react-redux";
import PlayerLayout from "../components/PlayerLayout";

const theme = extendTheme({
  colors: {
    gray: {
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <StoreProvider store={store}>
        <Provider store={reduxStore}>
          {Component.authPage ? (
            <Component {...pageProps} />
          ) : (
            <PlayerLayout>
              <Component {...pageProps} />
            </PlayerLayout>
          )}
        </Provider>
      </StoreProvider>
    </ChakraProvider>
  );
};

export default MyApp;
