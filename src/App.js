import Header from "./components/Header";
import Tab from "./components/Tab";
import { configureWeb3Modal } from "./constants/configureWeb3Modal";
import usePools from "./hooks/usePools";

configureWeb3Modal();

function App() {
  const pools = usePools();

  console.log("inside app", pools)
  return (
    <>
      <Header />
      <Tab />
    </>
  );
}

export default App;
