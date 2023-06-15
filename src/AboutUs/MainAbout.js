import "../App.css";
import MainAbout from "./MainAboutUs";
import { RightMenu } from "../Components/RightMenu";

function AboutUs() {
  return (
    <div className="App">
      <MainAbout />
      <RightMenu />

      <div className="background"></div>
    </div>
  );
}

export default AboutUs;
