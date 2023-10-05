// import Transferdata from "./components/Transferdata";
// import Login from "./components/Login";
// import Course from "./components/Course/Course";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Logindata from "./components/Logindata";

function App() {
  return (
    <div>
      {/* <Transferdata username="athul" password="abc" usertype="admin"/> */}
      {/* <Login/> */}
      {/* <Course/> */}


      <BrowserRouter>
      <Routes>
     <Route path={'/'} element={<Login/>}  ></Route>
      <Route  path={'/Ldata'} element={<Logindata/>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
