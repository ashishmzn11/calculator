import "./App.css";
import Btn from "./component/Btn.jsx";
import Display from "./component/Display.jsx";
import { useState } from "react";
<link rel="icon" type="" href="./src/assets/calculator.avif" />
function App() {
  const [dis, setdis] = useState("");
  const onclickbtn = (event) => {
    if (event === "c") {
      setdis ("");
    } else if (event === "=") {
      const result= eval(dis);
      setdis(result);
    }
    else{
      const newval=dis+event;
      setdis(newval);
    }
  };

  return (
    <>
  
      <center>
        <div className="main">
          <Display disp={dis} />
          <Btn onclickbtn={onclickbtn} />
        </div>
      </center>
    </>
  );
}

export default App;
