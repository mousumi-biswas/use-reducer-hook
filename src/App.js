import React from "react";
import "./App.scss";
import ReducerCount from "./components/ReducerCount/ReducerCount";
import PatientManagement from "./components/PatientManagement/PatientManagement";

function App() {
  return (
    <div>
      <ReducerCount></ReducerCount>
      <PatientManagement></PatientManagement>
    </div>
  );
}

export default App;
