import "./App.css";
import { MainContainer } from "./Components/MainContainer";
import { RightMenu } from "./Components/RightMenu";
import "./styles/Responsive.css";

function App() {
  return (
    <div className="App">
      <MainContainer />
      <RightMenu />

      <div className="background"></div>
      <div className="liquid"></div>
    </div>
  );
}

export default App;
