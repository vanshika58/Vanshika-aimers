import { useState } from "react";
import "./App.css";


import Row from 'react-bootstrap/Row';
import Upload from "./Upload";
import { Link } from "react-router-dom";

function AssignmentDoneTab() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    
    <div className="container">
      
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
        Pending
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Submited
        </button>
       
       
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
              <div className="row p-3">
                <h1>Design a dashboard accordung to bellow requirments</h1>
                <p>1. Main Dashboard</p>
                <p>2. Medical Analytics</p>
                <p>3. Chart with data showing there past 7 day heart rate</p>
              </div>
         
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="row p-3" > 
             <h1>Work left</h1>
          </div>
        </div>   
      </div>
    </div>
  );
}

export default AssignmentDoneTab;