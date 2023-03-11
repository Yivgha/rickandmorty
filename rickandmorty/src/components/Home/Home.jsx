import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import "./Home.scss"
import SearchBar from "../SearchBar/SearchBar"


function Home() {
    const [user, setUser] = useState({});
    const logo = require("../../images/logo.png");

    function handleCallbackResponse(response) {
        const userObject = jwt_decode(response.credential);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
    };

    function handleSignOut(e) {
        setUser({});
        document.getElementById("signInDiv").hidden = false;
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "950666462559-af3rvjqo3sif4uhldvt11u5h7a14vvlt.apps.googleusercontent.com",
            auto_select: true,
            cookiepolicy: 'single_host_origin',
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        );

        google.accounts.id.prompt();
    }, []);


    return (
        <div className="Container">
            {Object.keys(user).length === 0 &&
                <div className="Welcome">
                    <img src={logo} alt="logo Rick And Morty" width="312px" height="104px" />
                    <h1>Welcome!</h1>
                    <p>You can sign in via Google account:</p>
                    <div id="signInDiv"></div>
                </div>
            }


            {Object.keys(user).length !== 0 &&
                <div className="SignedInBox">
                    <div className="SignedInNav">
                        <button onClick={(e) => handleSignOut(e)} className="SignOutBtn">Sign Out</button>
                        <div className="SignedInUserBox">
                            <img src={user.picture} alt={user.name} className="SignedInImg"></img>
                            <p>{user.name}</p>
                        </div>
                    </div>
                    <div className="HomeContainer">
                        <div className="Logo">
                            <img src={logo} alt="logo Rick And Morty" width="312px" height="104px" />
                        </div>

                        <SearchBar />
                    </div>
                </div>
            }
        </div>
    );

}


export default Home;