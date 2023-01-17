import GlobalStyles from "../components/GlobalStyles";
import Layout from "../components/Layout";
import { useLocalStorage } from "../helpers/hooks";
import { CloudinaryContext } from "cloudinary-react";

function MyApp({ Component, pageProps }) {
  const [isMeals, setIsMeals] = useLocalStorage("meals", {});

  return (
    <>
      <CloudinaryContext cloudName="dhi2fh33d">
        <Layout>
          <GlobalStyles />
          <Component {...pageProps} isMeals={isMeals} setIsMeals={setIsMeals} />
        </Layout>
      </CloudinaryContext>
    </>
  );
}

export default MyApp;
