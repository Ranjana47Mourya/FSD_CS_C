import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./component1/MainLayout";
import Registration from "./component1/Registration";
import Login from "./component1/Login";
function App() {
  const [store, setStore] = useState("");
  return (
    <div>
      {JSON.stringify(store)}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/registration"
            element={<Registration regData={setStore} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
