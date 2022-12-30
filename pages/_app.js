import GlobalStyles from "../components/GlobalStyles";
import Layout from "../components/Layout";
import { useLocalStorage } from "../helpers/hooks";

function MyApp({ Component, pageProps }) {
  const [isMeals, setIsMeals] = useLocalStorage("meals", {});

  return (
    <>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} isMeals={isMeals} setIsMeals={setIsMeals} />
      </Layout>
    </>
  );
}

export default MyApp;
