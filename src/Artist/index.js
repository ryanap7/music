import "../App.css";
import { MainContainer } from "../Components/MainContainer";
import { RightMenu } from "../Components/RightMenu";
import "../styles/Responsive.css";

function Artist() {
    return (
        <div className="App">
            <MainContainer />
            <RightMenu />

            <div className="background"></div>
        </div>
    );
}

export default Artist;
