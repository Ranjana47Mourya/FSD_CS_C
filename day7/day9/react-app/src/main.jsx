import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Marks from "./Marks.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App
      name="Ranjna mourya"
      email="maurya13022003@gmail.com"
      mobile="7355103951"
    />
    <App />
    <Marks m1="87" m2={70} m3={69} m4={75} />
    {/* {} ye as a string work karta hai */}
    <Marks />
  </React.StrictMode>
);
