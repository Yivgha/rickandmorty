import "./Home.scss"
import SearchBar from "../SearchBar/SearchBar"
function Home() {
    const logo = require("../../images/logo.png");
    return (
        <div>
            <div className="Logo">
<img src={logo} alt="logo Rick And Morty" width="312px" height="104px"/>
            </div>
       
       <SearchBar />
         </div>);

}


export default Home;