import "../App.css";
import { MainContainer } from "../Components/MainContainer";
import { RightMenu } from "../Components/RightMenu";
import "../styles/Responsive.css";

function Favorite() {
    return (
        <div className="App">
            <MainContainer />
            <RightMenu />

            <div className="background"></div>
        </div>
    );
}

export default Favorite;
