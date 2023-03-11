import Layout from "components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Login from "components/Login/Login";
import "./App.scss";


function App() {


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />}>
          {/* <Route path="/character" element={<div>Character</div>}></Route> */}
        </Route>
        <Route path="login" element={<Login />}></Route>
      </Route>

    </Routes>
  );
}

export default App;
