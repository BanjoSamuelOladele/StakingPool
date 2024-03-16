import Header from "./components/Header";
import Tab from "./components/Tab";
import { configureWeb3Modal } from "./constants/configureWeb3Modal";

configureWeb3Modal();

function App() {
  return (
    <>
      <Header />
      <Tab />
    </>
  );
}

export default App;
