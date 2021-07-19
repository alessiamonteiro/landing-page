import { GlobalStyle } from "./globalStyles";
import Home from "./pages/Home";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <ScrollToTop />
    </>
  );
}
