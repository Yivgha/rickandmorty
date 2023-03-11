import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
// import Home from "components/Home/Home";

const Login = () => {
    // eslint-disable-next-line
    const [user, setUser] = useState({});
    // const logo = require("../../images/logo.png");

    function handleCallbackResponse(response) {
        const userObject = jwt_decode(response.credential);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
    };
    // function handleSignOut(e) {
    //     setUser({});
    //     document.getElementById("signInDiv").hidden = false;
    // }


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
        <>

        </>
    )
}

export default Login;