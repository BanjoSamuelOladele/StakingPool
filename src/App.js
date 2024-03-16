import Header from "./components/Header";
import { configureWeb3Modal } from "./constants/configureWeb3Modal";

configureWeb3Modal();

function App() {
  return (
    <Header />
  );
}

export default App;
