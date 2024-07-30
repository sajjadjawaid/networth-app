import { useState } from "react";

import "./App.css";
import Login from "./login";
import Signup from "./signup";

function App() {
  const [login, setLogin] = useState("true");

  const updateLogin = (newState) => {
    setLogin(newState);
  };

  return (
    <div className=" w-screen h-screen bg-gray-200 flex justify-center items-center">
      {login ? (
        <Login updateLogin={updateLogin} />
      ) : (
        <Signup updateLogin={updateLogin} />
      )}
    </div>
    // <Home/>
  );
}

export default App;
